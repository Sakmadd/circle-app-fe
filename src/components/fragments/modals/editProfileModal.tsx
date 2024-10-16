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
  Text,
} from '@chakra-ui/react';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';
import { EditUserDataType } from '../../../types/types';
import HollowButton from '../../elements/buttons/hollowButton';
import SolidButton from '../../elements/buttons/solidButton';
import { EditProfileInput } from '../../elements/input/editProfileInput';
import { ProfileCardHeader } from '../profiles/profilesCardHeader';
import { useEditProfile } from '../../../hooks/useEditProfile';

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
  const { baseColor, textColor } = useCustomColorModeValues();

  const {
    register,
    handleSubmit,
    profilePreview,
    onAvatarChange,
    loggedUser,
    bannerPreview,
    onBannerChange,
  } = useEditProfile();

  return (
    <Modal onClose={onClose} size={'xl'} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent backgroundColor={baseColor}>
        <ModalHeader color={textColor}>Edit Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ProfileCardHeader
            bgImg={bannerPreview}
            profileImg={profilePreview}
          />
          <Flex gap={'1rem'} justifyContent={'center'} padding={'1rem'}>
            <Input
              {...register('avatar')}
              display={'none'}
              type={'file'}
              id={'avatarInput'}
              variant={'hollow'}
              onChange={(e) => onAvatarChange(e)}
            />
            <HollowButton>
              <Text
                cursor={'pointer'}
                as={'label'}
                htmlFor={'avatarInput'}
                paddingY={'20px'}
              >
                Change Avatar
              </Text>
            </HollowButton>

            <Input
              {...register('banner')}
              display={'none'}
              type={'file'}
              id={'bannerInput'}
              variant={'hollow'}
              onChange={(e) => onBannerChange(e)}
            />
            <HollowButton>
              <Text
                cursor={'pointer'}
                as={'label'}
                htmlFor={'bannerInput'}
                paddingY={'20px'}
              >
                Change Banner
              </Text>
            </HollowButton>
          </Flex>
          <Flex
            alignItems={'center'}
            flexDirection={'column'}
            gap={'5px'}
            fontSize={'lg'}
          >
            <EditProfileInput
              name="name"
              register={register}
              defaultValue={loggedUser?.name}
            />
            <EditProfileInput
              name="username"
              register={register}
              defaultValue={loggedUser?.username}
            />
            <EditProfileInput
              name="bio"
              register={register}
              defaultValue={loggedUser?.bio || ''}
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
