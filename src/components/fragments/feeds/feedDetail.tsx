import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { dummyUsers } from '../../../data/dummy';
import { DetailedFeedType, FeedDataType, UserType } from '../../../types/types';
import { FeedPost } from './feedPost';
import { FeedItem } from './item/feedItem';
import FeedList from './item/feedList';

interface FeedDetailProps {
  onReply: (data: FeedDataType) => void;
  feed: DetailedFeedType;
  noImage?: boolean;
}
export function FeedDetail({ feed, onReply, noImage }: FeedDetailProps) {
  const { replies, ...rest } = feed;
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    setUsers(dummyUsers);
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
        <FeedPost
          modal={true}
          placeholder={'Post your reply'}
          onPost={onReply}
          imagePreviewId={'atDetail'}
          buttonText={'Reply'}
        />
        <div>Hah kosong?</div>
      </Box>
    );

  if (replies.length) {
    return (
      <>
        <Box>
          <FeedItem feed={rest} noImage={noImage && noImage} repliesTarget />
          <FeedPost
            onPost={onReply}
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
