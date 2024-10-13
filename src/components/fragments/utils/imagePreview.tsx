import { Box, Image } from '@chakra-ui/react';
import { BiX } from 'react-icons/bi';
import GhostButton from '../../elements/buttons/ghostButton';

interface ImagePreviewProps {
  imagePreview: string;
  onClose: () => void;
}

function ImagePreview({ imagePreview, onClose }: ImagePreviewProps) {
  if (imagePreview) {
    return (
      <Box mx={'1rem'} pos={'relative'}>
        <Image src={imagePreview} borderRadius={'lg'} />
        <Box
          pos={'absolute'}
          top={0}
          right={0}
          margin={'.5rem'}
          borderRadius={'full'}
          bg={'circle.backdrop'}
        >
          <GhostButton color={'circle.font'} fontSize={'2xl'} onClick={onClose}>
            <BiX />
          </GhostButton>
        </Box>
      </Box>
    );
  }
}

export default ImagePreview;
