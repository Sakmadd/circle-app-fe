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
        <Flex margin={'20px'}>
          <Avatar src={''} marginRight={'20px'} />

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
                    <BiImageAdd fontSize={'2rem'} cursor={'pointer'} />
                  </Box>
                </label>
              </FormControl>
              <SolidButton text={buttonText ? buttonText : 'Post'} />
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
