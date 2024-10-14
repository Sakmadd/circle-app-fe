import { CardBody, Image, Text } from '@chakra-ui/react';
import GhostButton from '../../../elements/buttons/ghostButton';
import { useSearchParams } from 'react-router-dom';
import { useCustomColorModeValues } from '../../../../hooks/useCustomColorModeValues';

interface FeedBodyProps {
  feedId: number;
  feedContent: string;
  feedImage: string | null;
  onOpen: () => void;
  noImage?: boolean;
}

export function FeedBody({
  feedContent,
  feedId,
  feedImage,
  noImage,
  onOpen,
}: FeedBodyProps) {
  const { textColor } = useCustomColorModeValues();
  const [, setSearchParams] = useSearchParams();

  function onImageClick(): void {
    setSearchParams({ feedId: String(feedId) });

    onOpen();
  }
  return (
    <>
      <CardBody padding={0}>
        <Text fontSize={'sm'} paddingBottom={'.5rem'} color={textColor}>
          {feedContent}
        </Text>
        {!noImage && feedImage && (
          <GhostButton onClick={onImageClick}>
            <Image
              src={feedImage}
              objectFit={'cover'}
              maxWidth={'100%'}
              width={'auto'}
              height={'auto'}
              borderRadius={'lg'}
              mt={'.25rem'}
            />
          </GhostButton>
        )}
      </CardBody>
    </>
  );
}
