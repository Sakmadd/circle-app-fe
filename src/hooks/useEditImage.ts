import { useDisclosure } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { EditUserImageType, UserType } from '../types/types';
import { EditUserImageSchema } from '../validators/validator';

export function UseEditImage() {
  const loggedUser: UserType | undefined = useSelector(
    (states: RootState) => states.loggedUser.value
  );
  const [avatarPreview, setAvatarPreview] = useState<string | undefined>(
    loggedUser?.avatar
  );
  const [bannerPreview, setBannerPreview] = useState<string | undefined>(
    loggedUser?.banner
  );
  const { register, handleSubmit } = useForm<EditUserImageType>({
    resolver: zodResolver(EditUserImageSchema),
  });

  const {
    isOpen: isEditorAvatarOpen,
    onClose: onEditorAvatarClose,
    onOpen: onEditorAvatarOpen,
  } = useDisclosure();

  const {
    isOpen: isEditorBannerOpen,
    onClose: onEditorBannerClose,
    onOpen: onEditorBannerOpen,
  } = useDisclosure();

  return {
    avatarPreview,
    bannerPreview,
    setAvatarPreview,
    setBannerPreview,
    isEditorAvatarOpen,
    isEditorBannerOpen,
    onEditorAvatarClose,
    onEditorBannerClose,
    onEditorAvatarOpen,
    onEditorBannerOpen,
    register,
    handleSubmit,
  };
}
