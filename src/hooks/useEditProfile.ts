import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { EditUserProfileType } from '../types/types';
import { EditUserProfileSchema } from '../validators/validator';
import api from '../networks/api';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useNavigate } from 'react-router-dom';

export function useEditProfile() {
  const navigate = useNavigate();
  const loggedUser = useSelector((state: RootState) => state.loggedUser.value);
  const { register, handleSubmit } = useForm<EditUserProfileType>({
    resolver: zodResolver(EditUserProfileSchema),
  });

  async function onPost(data: EditUserProfileType) {
    await api.EDIT_USER({
      ...data,
      id: loggedUser!.id,
      filterContent: loggedUser!.filterContent,
      banner: null,
      avatar: null,
    });
    navigate(0);
  }
  return {
    onPost,
    register,
    handleSubmit,
  };
}
