import { Box } from '@chakra-ui/react';
import { SideImage2 } from '../elements/images/sideImage2';
import { ResetInputForms } from '../fragments/forgotResetForms/resetInputForms';
import { Params, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ResetDataType } from '../../validators/formType';
import api from '../../networks/api';
import useCircleInfoToast from '../../hooks/circleInfoToast';

export function ResetPage() {
  const { token }: Readonly<Params> = useParams();
  const navigate = useNavigate();
  const toast = useCircleInfoToast();

  useEffect(() => {
    if (!token) navigate('/');
  }, [navigate, token]);

  async function onReset(data: ResetDataType) {
    const promise = handler(data);
    toast(promise, {
      message: 'Password has been Reset!',
      title: 'Reset Password',
    });
    navigate('/');
    return promise;
  }

  async function handler(data: ResetDataType) {
    await api.RESET_PASSWORD(data, token!);
  }

  return (
    <Box
      height={'100vh'}
      width={'full'}
      display={'flex'}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={3}
    >
      <SideImage2 />
      <ResetInputForms onSubmit={onReset} />
    </Box>
  );
}
