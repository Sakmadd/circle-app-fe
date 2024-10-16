import { Grid, Image, useDisclosure } from '@chakra-ui/react';
import { FeedType } from '../../types/types';
import GhostButton from '../elements/buttons/ghostButton';
import { DetailImageModal } from '../fragments/modals/detailImageModal';

interface MediaCollectionProps {
  feeds: FeedType[];
}

export function MediaCollections({ feeds }: MediaCollectionProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
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
              <GhostButton onClick={onOpen} key={feed.id}>
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
      <DetailImageModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
