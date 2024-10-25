import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import api from '../networks/api';
import { DetailedFeedType, ReplyDataType, ReplyType } from '../types/types';
import useCircleInfoToast from './circleInfoToast';

export function useReplies(id: number) {
  const toast = useCircleInfoToast();
  const queryClient: QueryClient = new QueryClient();

  const { data: feed } = useQuery<DetailedFeedType | null>({
    queryKey: ['feed', id],
    queryFn: async () => {
      return await api.GET_SINGLE_FEED(id);
    },
  });

  const createReply = useMutation({
    mutationFn: CREATE_REPLY,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['feed'] });
    },
  });

  const deleteReply = useMutation({
    mutationFn: DELETE_REPLY,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['feed'] });
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
    const createReply: Promise<ReplyType> = api.REPLY_FEED(data);
    toast(createReply, {
      message: 'Successfully Replied!',
      title: 'Reply Feed',
    });
    return createReply;
  }

  async function DELETE_REPLY(id: number): Promise<ReplyType> {
    const deleteReply: Promise<ReplyType> = api.DELETE_REPLY(id);
    toast(deleteReply, {
      message: 'Reply Successfully Deleted!',
      title: 'Delete Reply',
    });
    return deleteReply;
  }

  return {
    feed,
    onReply,
    onDelete,
  };
}
