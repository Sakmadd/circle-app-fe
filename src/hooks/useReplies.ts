import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import api from '../networks/api';
import { DetailedFeedType, ReplyDataType, ReplyType } from '../types/types';
import useCircleInfoToast from './circleInfoToast';

export function useReplies(id: number) {
  const toast = useCircleInfoToast();
  const queryClient = useQueryClient();

  const { data: feed } = useQuery<DetailedFeedType | null>({
    queryKey: ['feed', id],
    queryFn: async () => {
      return await api.GET_SINGLE_FEED(id);
    },
  });

  const createReply = useMutation({
    mutationFn: CREATE_REPLY,
    onSuccess: (newReply) => {
      queryClient.setQueryData(
        ['feed', id],
        (oldData: DetailedFeedType | null) => {
          if (!oldData) return null;
          return {
            ...oldData,
            replies: [newReply, ...oldData.replies], // Tambahkan reply baru di awal array
            totalReplies: oldData.totalReplies + 1,
          };
        }
      );
      toast(Promise.resolve(newReply), {
        message: 'Successfully Replied!',
        title: 'Reply Feed',
      });
    },
  });

  const deleteReply = useMutation({
    mutationFn: DELETE_REPLY,
    onSuccess: (deletedReply) => {
      queryClient.setQueryData(
        ['feed', id],
        (oldData: DetailedFeedType | null) => {
          if (!oldData) return null;
          return {
            ...oldData,
            replies: oldData.replies.filter(
              (reply) => reply.id !== deletedReply.id
            ),
            totalReplies: oldData.totalReplies - 1,
          };
        }
      );
      toast(Promise.resolve(deletedReply), {
        message: 'Reply Successfully Deleted!',
        title: 'Delete Reply',
      });
    },
  });

  async function onReply(data: ReplyDataType): Promise<void> {
    if (id) {
      createReply.mutate(data);
    }
  }

  function onDelete(id: number): void {
    deleteReply.mutate(id);
  }

  async function CREATE_REPLY(data: ReplyDataType): Promise<ReplyType> {
    return await api.REPLY_FEED(data);
  }

  async function DELETE_REPLY(id: number): Promise<ReplyType> {
    return await api.DELETE_REPLY(id);
  }

  return {
    feed,
    onReply,
    onDelete,
  };
}
