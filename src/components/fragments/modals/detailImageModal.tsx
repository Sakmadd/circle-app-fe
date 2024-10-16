import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import { dummyDetailFeed } from '../../../data/dummy';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';
import { LeftArrowButton } from '../../elements/buttons/leftArrowButton';
import { FeedDetail } from '../feeds/feedDetail';

interface detailImageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DetailImageModal = ({
  isOpen,
  onClose,
}: detailImageModalProps) => {
  const { baseColor } = useCustomColorModeValues();
  return (
    <>
      <Modal
        onClose={onClose}
        size={'full'}
        isOpen={isOpen}
        isCentered={true}
        scrollBehavior="inside"
      >
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent
          margin={'30px'}
          backgroundColor={'transparent'}
          shadow={'0'}
        >
          <ModalBody
            display={'flex'}
            padding={0}
            overflowX={'hidden'}
            flexDirection={{ base: 'column', lg: 'row' }}
          >
            <Box margin={'auto'} paddingY={'20px'}>
              <Image src={'https://picsum.photos/1600/900'}></Image>
            </Box>
            <Box
              minWidth={{ base: 'full', lg: '370px' }}
              backgroundColor={baseColor}
              margin={{ base: 'auto', lg: '20px' }}
              borderRadius={'10px'}
              paddingX={'5px'}
              overflow={'auto'}
              sx={{
                '&::-webkit-scrollbar': {
                  width: '4px',
                },
                '&::-webkit-scrollbar-track': {
                  background: 'transparent',
                  marginY: '20px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: 'accent.base',
                },
              }}
            >
              <LeftArrowButton
                onclick={onClose}
                text="Detail Image"
                pos={'sticky'}
                top={'0px'}
                zIndex={10}
                backgroundColor={baseColor}
                paddingY={'20px'}
                marginY={'0px'}
              />
              <FeedDetail feed={dummyDetailFeed} onReply={() => {}} />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
