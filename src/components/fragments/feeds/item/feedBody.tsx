import { CardBody, Image, Text } from '@chakra-ui/react';
import { useCustomColorModeValues } from '../../../../hooks/useCustomColorModeValues';
import GhostButton from '../../../elements/buttons/ghostButton';

interface FeedBodyProps {
  feedId: number;
  feedContent: string;
  feedImage: string | null;
  onOpen: () => void;
  noImage?: boolean;
}

export function FeedBody({
  feedContent,
  feedImage,
  noImage,
  onOpen,
}: FeedBodyProps) {
  const { textColor } = useCustomColorModeValues();

  function onImageClick(): void {
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
