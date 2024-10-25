import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import api from '../../../networks/api';
import { DetailedFeedType, UserType } from '../../../types/types';
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
    async function getAllUser() {
      const users: UserType[] = await api.GET_ALL_USERS();
      setUsers(users);
    }
    getAllUser();
  }, []);

  const repliesWithAuthor = replies.map((reply) => {
    return {
      ...reply,
      author: users.find((user) => user.id === reply.authorId),
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

  if (replies.length) {
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
        {users.length ? (
          <FeedList feeds={repliesWithAuthor} noLink />
        ) : (
          <Box pt={'3rem'}>
            <>loading</>
          </Box>
        )}
      </>
    );
  }
}
