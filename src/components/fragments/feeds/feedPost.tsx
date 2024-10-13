import {
  Avatar,
  Box,
  Divider,
  Flex,
  FormControl,
  Input,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BiImageAdd } from 'react-icons/bi';
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
  const bdColor = useColorModeValue('day.baseDarker', 'night.baseDarker');
  const fontColor = useColorModeValue('day.text', 'night.text');

  return (
    <>
      <Box>
        <Text
          fontSize={'2xl'}
          fontWeight={'bold'}
          padding={'1rem'}
          color={fontColor}
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
                  onChange={(e) => onImageChange(e)}
                />
                <label htmlFor={imagePreviewId}>
                  <Box color={fontColor}>
                    <BiImageAdd fontSize={'1.5rem'} cursor={'pointer'} />
                  </Box>
                </label>
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
        <ImagePreview
          imagePreview={imagePreview}
          onClose={() => setImagePreview('')}
        />
        <Divider border={'1px'} borderColor={bdColor} />
      </Box>
    </>
  );
}
