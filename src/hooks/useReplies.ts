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
            replies: [newReply, ...oldData.replies],
            totalReplies: oldData.totalReplies + 1,
          };
        }
      );
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
    },
  });

  async function onReply(data: ReplyDataType): Promise<void> {
    const formData: FormData = new FormData();

    if (id) {
      formData.append('id', id.toString());
      formData.append('content', data.content);
      formData.append('image', data.image ? data.image[0] : null);

      createReply.mutate(formData);
    }
  }

  function onDelete(id: number): void {
    deleteReply.mutate(id);
  }

  async function CREATE_REPLY(data: FormData): Promise<ReplyType> {
    const promise: Promise<ReplyType> = api.REPLY_FEED(data);
    toast(promise, {
      message: 'Successfully Replied!',
      title: 'Reply Feed',
    });
    return promise;
  }

  async function DELETE_REPLY(id: number): Promise<ReplyType> {
    const promise: Promise<ReplyType> = api.DELETE_REPLY(id);
    toast(promise, {
      message: 'Successfully Deleted Reply!',
      title: 'Delete Reply',
    });
    return promise;
  }

  return {
    feed,
    onReply,
    onDelete,
  };
}
