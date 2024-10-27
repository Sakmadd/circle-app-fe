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
import HollowButton from '../../elements/buttons/hollowButton';
import SolidButton from '../../elements/buttons/solidButton';
import { EditProfileInput } from '../../elements/input/editProfileInput';
import { ProfileCardHeader } from '../profiles/profilesCardHeader';
import { ChangeAvatarModal } from './imageEditor/changeAvatarModal';
import { ChangeBannerModal } from './imageEditor/changeBannerModal';
import { UseEditImage } from '../../../hooks/useEditImage';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function EditProfileModal({ isOpen, onClose }: EditProfileModalProps) {
  const loggedUser = useSelector((state: RootState) => state.loggedUser.value);
  const { baseColor, textColor } = useCustomColorModeValues();

  const {
    register: registerProfile,
    handleSubmit: handleSubmitProfile,
    onPost,
  } = useEditProfile();

  const {
    avatarPreview,
    bannerPreview,
    isEditorAvatarOpen,
    isEditorBannerOpen,
    onEditorAvatarClose,
    onEditorAvatarOpen,
    onEditorBannerClose,
    onEditorBannerOpen,
    setAvatarPreview,
    setBannerPreview,
    register: registerImage,
  } = UseEditImage();

  return (
    <Modal onClose={onClose} size={'xl'} isOpen={isOpen}>
      <ModalOverlay backdropFilter="blur(3px) " />
      <ModalContent backgroundColor={baseColor}>
        <ModalHeader color={textColor}>Edit Profile</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <ProfileCardHeader bgImg={bannerPreview} profileImg={avatarPreview} />
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
              register={registerImage}
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
              register={registerImage}
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
              register={registerProfile}
              defaultValue={loggedUser?.name}
            />
            <EditProfileInput
              name="username"
              register={registerProfile}
              defaultValue={loggedUser?.username}
            />
            <EditProfileInput
              name="bio"
              register={registerProfile}
              defaultValue={loggedUser?.bio || ''}
            />
          </Flex>
        </ModalBody>

        <ModalFooter>
          <SolidButton
            text="Save"
            onClick={() => {
              handleSubmitProfile((data) => onPost(data))();
            }}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
