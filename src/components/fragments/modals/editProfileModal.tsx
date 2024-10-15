import {
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';
import { RootState } from '../../../redux/store';
import { EditUserDataType, UserType } from '../../../types/types';
import { EditUserSchema } from '../../../validators/validator';
import SolidButton from '../../elements/buttons/solidButton';
import { ProfileCardHeader } from '../profiles/profilesCardHeader';

interface EditProfileModalProps {
  onPost: (data: EditUserDataType) => void;
  isOpen: boolean;
  onClose: () => void;
}
export function EditProfileModal({
  isOpen,
  onClose,
  onPost,
}: EditProfileModalProps) {
  const loggedUser: UserType | undefined = useSelector(
    (states: RootState) => states.loggedUser.value
  );

  const { baseColor, textColor } = useCustomColorModeValues();

  const { register, handleSubmit } = useForm<EditUserDataType>({
    resolver: zodResolver(EditUserSchema),
  });

  return (
    <Modal onClose={onClose} size={'xl'} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent backgroundColor={baseColor}>
        <ModalHeader color={textColor}>Edit Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ProfileCardHeader
            bgImg={loggedUser?.banner}
            profileImg={loggedUser?.avatar}
          />

          <Flex
            alignItems={'center'}
            flexDirection={'column'}
            gap={'5px'}
            fontSize={'lg'}
          >
            <Input
              variant={'flushed'}
              textAlign={'center'}
              maxWidth={'85%'}
              fontSize={'lg'}
              padding={'1rem'}
              {...register('name')}
              focusBorderColor={textColor}
              value={loggedUser?.name}
            />
            <Input
              variant={'flushed'}
              textAlign={'center'}
              maxWidth={'85%'}
              fontSize={'lg'}
              padding={'1rem'}
              {...register('username')}
              focusBorderColor={textColor}
              value={`@${loggedUser?.username}`}
            />
            <Input
              variant={'flushed'}
              textAlign={'center'}
              maxWidth={'85%'}
              fontSize={'lg'}
              padding={'1rem'}
              {...register('bio')}
              focusBorderColor={textColor}
              value={loggedUser?.bio || ''}
            />
          </Flex>
        </ModalBody>
        <ModalFooter>
          <SolidButton
            text="Save"
            onClick={handleSubmit(async (data) => onPost(data))}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
