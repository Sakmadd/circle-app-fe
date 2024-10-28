import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import api from '../../../networks/api';
import { DetailedFeedType, FeedType, UserType } from '../../../types/types';
import { FeedReply } from './feedReply';
import { FeedItem } from './item/feedItem';
import FeedList from './item/feedList';

interface FeedDetailProps {
  feed: DetailedFeedType;
  noImage?: boolean;
}
export function FeedDetail({ feed, noImage }: FeedDetailProps) {
  const { replies, ...rest } = feed;

  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    async function getUsers() {
      const users: UserType[] = await api.GET_ALL_USERS();
      setUsers(users);
    }

    getUsers();
  }, []);

  const repliesWithAuthor: FeedType[] = replies.map((reply) => {
    return {
      id: reply.id,
      content: reply.content,
      image: reply.image,
      createdAt: reply.createdAt.toString(),
      authorId: reply.userId,
      totalReplies: 0,
      totalLikes: 0,
      isLiked: false,
      badLabels: [],
      author: users.find((user) => user.id === reply.userId),
    };
  });

  if (!replies.length)
    return (
      <Box>
        <FeedItem feed={rest} noImage={noImage && noImage} repliesTarget />
        <FeedReply
          modal={true}
          placeholder={'Post your reply'}
          imagePreviewId={'atDetail'}
          buttonText={'Reply'}
        />
      </Box>
    );

  return (
    <>
      <Box>
        <FeedItem feed={rest} noImage={noImage && noImage} repliesTarget />
        <FeedReply
          modal={true}
          placeholder="Leave a reply"
          imagePreviewId="atDetail"
          buttonText="Reply"
        />
      </Box>
      <FeedList feeds={repliesWithAuthor} noLink />
    </>
  );
}
