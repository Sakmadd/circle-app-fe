import { Grid, Image, useDisclosure } from '@chakra-ui/react';
import { FeedType } from '../../types/types';
import GhostButton from '../elements/buttons/ghostButton';
import { DetailImageModal } from '../fragments/modals/detailImageModal';
import { useState } from 'react';

interface MediaCollectionProps {
  feeds: FeedType[];
}

export function MediaCollections({ feeds }: MediaCollectionProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selecetedFeed, setSelectedFeed] = useState<number | null>(null);
  function handleOpenModal(id: number) {
    setSelectedFeed(id);
    onOpen();
  }

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
              <GhostButton
                onClick={() => handleOpenModal(feed.id)}
                key={feed.id}
              >
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
      {selecetedFeed && (
        <DetailImageModal
          id={selecetedFeed}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </>
  );
}
