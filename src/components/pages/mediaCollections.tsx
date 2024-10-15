import { Grid, Image } from '@chakra-ui/react';
import { FeedType } from '../../types/types';
import GhostButton from '../elements/buttons/ghostButton';

interface MediaCollectionProps {
  feeds: FeedType[];
}

export function MediaCollections({ feeds }: MediaCollectionProps) {
  function onImageClick(id: number): void {
    console.log(id);
  }
  return (
    <>
      {' '}
      <Grid
        templateColumns={'repeat(3, 1fr)'}
        templateRows={'repeat(1, 150px)'}
        autoRows={'150px'}
        gap={'.5rem'}
        padding={'1rem'}
      >
        {feeds.map((feed) => {
          if (feed.image) {
            return (
              <GhostButton onClick={() => onImageClick(feed.id)} key={feed.id}>
                <Image
                  src={feed.image}
                  height={'100%'}
                  width={'100%'}
                  objectFit={'cover'}
                />
              </GhostButton>
            );
          }
        })}
      </Grid>
    </>
  );
}
