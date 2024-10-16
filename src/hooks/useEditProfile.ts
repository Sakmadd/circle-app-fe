import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { EditUserDataType, UserType } from '../types/types';
import { RootState } from '../redux/store';
import { EditUserSchema } from '../validators/validator';

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
    register,
    handleSubmit,
    profilePreview,
    onAvatarChange,
    loggedUser,
    bannerPreview,
    onBannerChange,
  };
}
