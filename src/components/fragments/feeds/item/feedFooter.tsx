import { CardFooter, Flex, Spacer } from '@chakra-ui/react';
import { FeedButton } from './feedButton';
import { BiCommentDetail, BiSolidHeart } from 'react-icons/bi';
import { UserType } from '../../../../types/types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface feedFooterProps {
  feedId: number;
  totalLike: number;
  totalReply: number;
  isLiked: boolean;
  author: UserType;
  isReply?: boolean;
  repliesTarget?: boolean;
  badLabels: string[];
}

export function FeedFooter({
  feedId,
  totalLike,
  totalReply,
  isLiked,
}: feedFooterProps) {
  const navigate = useNavigate();
  const [isFeedLiked, setFeedLiked] = useState<boolean>(isLiked);
  const [totalFeedLike, setTotalFeedLike] = useState<number>(totalLike);

  async function onToggleLike() {
    try {
      setFeedLiked((oldState) => !oldState);
      setTotalFeedLike((oldState) => {
        if (!isFeedLiked) {
          return oldState + 1;
        }

        return oldState - 1;
      });
    } catch {
      setFeedLiked(isLiked);
      setTotalFeedLike(totalLike);
    }
  }
  return (
    <>
      <CardFooter paddingLeft={'0px'}>
        {totalReply !== undefined && totalLike !== undefined && (
          <Flex gap={'1rem'}>
            <FeedButton
              icon={<BiSolidHeart />}
              value={totalFeedLike}
              color={isFeedLiked ? 'circle.red' : 'circle.dark'}
              hoverColor={isFeedLiked ? 'circle.dark' : 'circle.red'}
              onClick={onToggleLike}
            />
            <FeedButton
              icon={<BiCommentDetail />}
              value={totalReply}
              color={'circle.dark'}
              hoverColor={'circle.accent'}
              onClick={() => navigate(`/feed/${feedId}`)}
            />
          </Flex>
        )}
        <Spacer />
      </CardFooter>
    </>
  );
}
