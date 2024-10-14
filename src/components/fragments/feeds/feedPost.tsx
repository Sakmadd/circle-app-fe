import {
  Avatar,
  Box,
  Divider,
  Flex,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BiImageAdd } from 'react-icons/bi';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';
import SolidButton from '../../elements/buttons/solidButton';
import ImagePreview from '../utils/imagePreview';
import { FeedInput } from './feedInput';

interface FeedPostProps {
  placeholder: string;
  buttonText?: string;
  imagePreviewId: string;
}

export function FeedPost({
  placeholder,
  buttonText,
  imagePreviewId,
}: FeedPostProps) {
  const [imagePreview, setImagePreview] = useState<string>('');

  function onImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;

    if (files?.length) {
      setImagePreview(URL.createObjectURL(files[0]));
    }
  }

  const { baseColor, textColor, borderLineColor } = useCustomColorModeValues();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box onClick={onOpen}>
        <Text
          fontSize={'2xl'}
          fontWeight={'bold'}
          padding={'1rem'}
          color={textColor}
          display={{ base: 'none', xl: 'block' }}
        >
          Home
        </Text>
        <Flex margin={'20px'} alignItems={'center'}>
          <Avatar
            src={''}
            marginRight={'20px'}
            width={{ base: '2rem', md: '3rem' }}
            height={{ base: '2rem', md: '3rem' }}
          />

          <Flex alignItems={'center'} gap={'1rem'} width={'100%'}>
            <FeedInput placeholder={placeholder} name={'content'} />
            <Flex alignItems={'center'} gap={'1rem'} color={'circle.accent'}>
              <FormControl
                display={'flex'}
                justifyContent={'flex-end'}
                alignItems={'center'}
              >
                <Input
                  display={'none'}
                  type={'file'}
                  id={imagePreviewId}
                  variant={'hollow'}
                  placeholder={placeholder}
                  onChange={onImageChange}
                />
                <Box color={textColor}>
                  <BiImageAdd fontSize={'1.5rem'} cursor={'pointer'} />
                </Box>
              </FormControl>
              <Box>
                <SolidButton
                  fontSize={{ base: '10px', sm: '12px', md: 'md' }}
                  padding={{ base: '1', sm: '3', md: '5' }}
                  text={buttonText ? buttonText : 'Post'}
                />
              </Box>
            </Flex>
          </Flex>
        </Flex>

        <Divider border={'1px'} borderColor={borderLineColor} />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
        <ModalOverlay backdropFilter="blur(4px) " />
        <ModalContent
          backgroundColor={baseColor}
          padding={'1rem'}
          display={'flex'}
          gap={'1rem'}
          margin={'20px'}
        >
          <ModalCloseButton />
          <ModalBody paddingX={'0px'}>
            <Flex>
              <Avatar
                src={''}
                marginRight={'20px'}
                width={{ base: '2.5rem', md: '3rem' }}
                height={{ base: '2.5rem', md: '3rem' }}
              />

              <FeedInput placeholder={placeholder} name={'content'} />
            </Flex>
          </ModalBody>
          <ImagePreview
            imagePreview={imagePreview}
            onClose={() => setImagePreview('')}
          />
          <Divider border={'1px'} borderColor={borderLineColor} />
          <ModalFooter
            padding={'0px'}
            display={'flex'}
            justifyContent={'flex-end'}
          >
            <Flex
              alignItems={'center'}
              gap={'1rem'}
              color={'circle.accent'}
              width={'100%'}
            >
              <Box
                display={'flex'}
                justifyContent={'flex-end'}
                alignItems={'center'}
              >
                <Input
                  display={'none'}
                  type={'file'}
                  id={imagePreviewId}
                  variant={'hollow'}
                  placeholder={placeholder}
                  onChange={(e) => onImageChange(e)}
                />
                <label htmlFor={imagePreviewId}>
                  <Box color={textColor}>
                    <BiImageAdd fontSize={'1.5rem'} cursor={'pointer'} />
                  </Box>
                </label>
              </Box>
              <Spacer />
              <Box>
                <SolidButton
                  fontSize={{ base: '10px', sm: '12px', md: 'md' }}
                  padding={{ base: '1', sm: '3', md: '5' }}
                  text={buttonText ? buttonText : 'Post'}
                />
              </Box>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
