import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { EditUserProfileType } from '../types/types';
import { EditUserProfileSchema } from '../validators/validator';
import api from '../networks/api';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useNavigate } from 'react-router-dom';
import { setLoggedUser } from '../redux/slices/authSlice';

export function useEditProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedUser = useSelector((state: RootState) => state.loggedUser.value);
  const { register, handleSubmit } = useForm<EditUserProfileType>({
    resolver: zodResolver(EditUserProfileSchema),
  });

  async function onPost(data: EditUserProfileType) {
    try {
      const updatedUser = await api.EDIT_USER({
        ...data,
        id: loggedUser!.id,
        filterContent: loggedUser!.filterContent,
        banner: null,
        avatar: null,
      });
      dispatch(setLoggedUser(updatedUser));
    } finally {
      navigate(0);
    }
  }
  return {
    onPost,
    register,
    handleSubmit,
  };
}
