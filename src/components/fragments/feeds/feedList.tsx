import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { FeedType } from '../../../types/types';
import { EmptyMessage } from '../utils/emptyMessage';
import { FeedItem } from './item/feedItem';

interface VibeListProps {
  feed: FeedType[];
  noLink?: boolean;
}

export default function FeedList({ feed, noLink }: VibeListProps) {
  if (feed.length) {
    return (
      <Box>
        {feed.map((feed) => {
          if (noLink) {
            return <FeedItem feed={feed} key={feed.id} isReply />;
          }

          return (
            <Link to={`/feed/${feed.id}`} key={feed.id}>
              <FeedItem feed={feed} />
            </Link>
          );
        })}
      </Box>
    );
  }

  return <EmptyMessage header={'No feed has been posted at this moment.'} />;
}
