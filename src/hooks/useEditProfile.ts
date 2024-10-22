import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { EditUserDataType, UserType } from '../types/types';
import { RootState } from '../redux/store';
import { EditUserSchema } from '../validators/validator';
import { useDisclosure } from '@chakra-ui/react';

export function useEditProfile() {
  const loggedUser: UserType | undefined = useSelector(
    (states: RootState) => states.loggedUser.value
  );
  const [profilePreview, setAvatarPreview] = useState<string | undefined>(
    loggedUser?.avatar
  );
  const [bannerPreview, setBannerPreview] = useState<string | undefined>(
    loggedUser?.banner
  );

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

  function onBannerChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;

    if (files?.length) {
      setBannerPreview(URL.createObjectURL(files[0]));
    }
  }
  function onAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;

    if (files?.length) {
      setAvatarPreview(URL.createObjectURL(files[0]));
    }
  }

  const { register, handleSubmit } = useForm<EditUserDataType>({
    resolver: zodResolver(EditUserSchema),
  });
  return {
    isEditorAvatarOpen,
    isEditorBannerOpen,
    onEditorAvatarClose,
    onEditorBannerClose,
    onEditorAvatarOpen,
    onEditorBannerOpen,
    setAvatarPreview,
    setBannerPreview,
    register,
    handleSubmit,
    profilePreview,
    onAvatarChange,
    loggedUser,
    bannerPreview,
    onBannerChange,
  };
}
