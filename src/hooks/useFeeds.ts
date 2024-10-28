import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { FeedDataType, FeedType } from '../types/types';
import useCircleInfoToast from './circleInfoToast';
import api from '../networks/api';

interface useFeedsParams {
  onClose?: () => void;
}

export function useFeeds(params: useFeedsParams = {}) {
  const toast = useCircleInfoToast();
  const queryClient: QueryClient = useQueryClient();

  const {
    data: feeds,
    isLoading,
    isError,
    error,
  } = useQuery<FeedType[]>({
    queryKey: ['feeds'],
    queryFn: async () => {
      return await api.GET_ALL_FEEDS();
    },
  });

  const createFeed = useMutation({
    mutationFn: CREATE_FEED,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['feeds'] });
    },
  });

  const deleteFeed = useMutation({
    mutationFn: DELETE_FEED,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['feeds'] });
    },
  });

  async function onPost(data: FeedDataType): Promise<void> {
    const formData: FormData = new FormData();

    formData.append('content', data.content);
    formData.append('image', data.image ? data.image[0] : null);

    createFeed.mutate(formData);

    if (params.onClose) {
      params.onClose();
    }
  }

  function onDelete(id: number): void {
    deleteFeed.mutate(id);
  }

  async function CREATE_FEED(data: FormData): Promise<string> {
    const createFeed: Promise<string> = api.CREATE_FEED(data);
    toast(createFeed, {
      title: 'Create Feed',
      message: 'Feed Successfully Created!',
    });

    return createFeed;
  }

  async function DELETE_FEED(id: number): Promise<FeedType> {
    const deleteFeed: Promise<FeedType> = api.DELETE_FEED(id);
    toast(deleteFeed, {
      message: 'Feed Successfully Deleted',
      title: 'Delete Feed',
    });

    return deleteFeed;
  }

  return {
    feeds,
    onPost,
    onDelete,
    isLoading,
    isError,
    error,
  };
}
