import {
  Avatar,
  Box,
  Divider,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Spacer,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiImageAdd } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { Params, useParams } from 'react-router-dom';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';
import { useReplies } from '../../../hooks/useReplies';
import { RootState } from '../../../redux/store';
import { ReplyDataType, UserType } from '../../../types/types';
import { ReplySchema } from '../../../validators/validator';
import SolidButton from '../../elements/buttons/solidButton';
import { FeedInput } from '../feeds/item/feedInput';
import ImagePreview from '../utils/imagePreview';

interface FeedReplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  imagePreviewId: string;
  placeholder: string;
  buttonText: string | undefined;
}
export function FeedReplyModal({
  isOpen,
  onClose,
  imagePreviewId,
  placeholder,
  buttonText,
}: FeedReplyModalProps) {
  const { id }: Readonly<Params<string>> = useParams();
  const targetId = id ? +id : NaN;
  const { onReply } = useReplies(targetId);

  const loggedUser: UserType | undefined = useSelector(
    (states: RootState) => states.loggedUser.value
  );
  const [imagePreview, setImagePreview] = useState<string>('');

  function onImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;

    if (files?.length) {
      setImagePreview(URL.createObjectURL(files[0]));
    }
  }

  const { baseColor, textColor, borderLineColor } = useCustomColorModeValues();

  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
    setValue,
  } = useForm<ReplyDataType>({ resolver: zodResolver(ReplySchema) });

  return (
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
              src={loggedUser?.avatar}
              marginRight={'20px'}
              width={{ base: '2.5rem', md: '3rem' }}
              height={{ base: '2.5rem', md: '3rem' }}
            />
            <FeedInput
              error={errors.content}
              register={register}
              placeholder={placeholder}
              name={'content'}
            />
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
                {...register('image', { value: [] })}
                onChange={(e) => {
                  onImageChange(e);
                  if (e.target.files?.[0]) {
                    setValue('image', [e.target.files[0]]);
                  }
                }}
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
                onClick={handleSubmit(async (data) => {
                  data.id = data.id || targetId;
                  data.image = data.image || null;
                  onReply(data);
                  onClose();
                  resetField('content');
                  resetField('image');
                  setImagePreview('');
                })}
              />
            </Box>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
