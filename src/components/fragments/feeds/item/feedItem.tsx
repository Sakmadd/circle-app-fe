import {
  Avatar,
  Box,
  Card,
  Divider,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { FeedType } from '../../../../types/types';
import GhostButton from '../../../elements/buttons/ghostButton';
import { FeedHeader } from './feedHeader';
import { FeedBody } from './feedBody';
import { FeedFooter } from './feedFooter';

interface FeedItemProps {
  feed: FeedType;
  noImage?: boolean;
  repliesTarget?: boolean;
  isReply?: boolean;
}
export function FeedItem({
  feed,
  noImage,
  repliesTarget,
  isReply,
}: FeedItemProps) {
  const {
    id,
    content,
    image,
    createdAt,
    totalLikes,
    totalReplies,
    isLiked,
    badLabels,
    author,
  } = feed;
  const borderColor = useColorModeValue('day.baseDarker', 'night.baseDarker');
  const bgColor = useColorModeValue('day.base', 'night.base');

  if (author) {
    return (
      <>
        <Box>
          <Card
            bg={bgColor}
            color={'circle.font'}
            p={'1rem'}
            borderRadius={'0px'}
          >
            <Flex gap={'1rem'}>
              <GhostButton alignItems={'self-start'}>
                <Avatar src={'author'} />
              </GhostButton>
              <Flex direction={'column'} width={'100%'}>
                <FeedHeader
                  feedId={id}
                  authorId={author.id}
                  name={author.name}
                  username={`@${author.username}`}
                  date={createdAt}
                  author={author}
                  isReply={isReply && isReply}
                  repliesTarget={repliesTarget && repliesTarget}
                />
                <FeedBody
                  feedId={id}
                  feedContent={content}
                  feedImage={image}
                  noImage={noImage && noImage}
                  onOpen={() => null}
                />
                <FeedFooter
                  feedId={id}
                  totalLike={totalLikes}
                  totalReply={totalReplies}
                  isLiked={isLiked}
                  author={author}
                  isReply={isReply && isReply}
                  badLabels={badLabels}
                  repliesTarget={repliesTarget && repliesTarget}
                />
              </Flex>
            </Flex>
          </Card>
          <Divider border={'1px'} borderColor={borderColor} />
        </Box>
      </>
    );
  }
}
