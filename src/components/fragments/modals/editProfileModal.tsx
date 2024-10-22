import {
  Flex,
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
import { useEditProfile } from '../../../hooks/useEditProfile';
import { EditUserDataType } from '../../../types/types';
import HollowButton from '../../elements/buttons/hollowButton';
import SolidButton from '../../elements/buttons/solidButton';
import { EditProfileInput } from '../../elements/input/editProfileInput';
import { ProfileCardHeader } from '../profiles/profilesCardHeader';
import { ChangeAvatarModal } from './imageEditor/changeAvatarModal';
import { ChangeBannerModal } from './imageEditor/changeBannerModal';

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
    loggedUser,
    bannerPreview,
    onEditorBannerClose,
    onEditorBannerOpen,
    onEditorAvatarClose,
    onEditorAvatarOpen,
    isEditorAvatarOpen,
    isEditorBannerOpen,
    setBannerPreview,
    setAvatarPreview,
  } = useEditProfile();

  return (
    <Modal onClose={onClose} size={'xl'} isOpen={isOpen}>
      <ModalOverlay backdropFilter="blur(3px) " />
      <ModalContent backgroundColor={baseColor}>
        <ModalHeader color={textColor}>Edit Profile</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <ProfileCardHeader
            bgImg={bannerPreview}
            profileImg={profilePreview}
          />

          <Flex gap={'1rem'} justifyContent={'center'} padding={'1rem'}>
            <HollowButton onClick={onEditorAvatarOpen}>
              <Text cursor={'pointer'} paddingY={'20px'}>
                Change Avatar
              </Text>
            </HollowButton>
            <ChangeAvatarModal
              setAvatarPreview={setAvatarPreview}
              isOpen={isEditorAvatarOpen}
              onClose={onEditorAvatarClose}
              register={register}
            />
            <HollowButton onClick={onEditorBannerOpen}>
              <Text cursor={'pointer'} paddingY={'20px'}>
                Change Banner
              </Text>
            </HollowButton>
            <ChangeBannerModal
              setBannerPreview={setBannerPreview}
              isOpen={isEditorBannerOpen}
              onClose={onEditorBannerClose}
              register={register}
            />
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
