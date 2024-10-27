import { Box } from '@chakra-ui/react';
import { SideImage1 } from '../elements/images/sideImage1';
import { LoginInputForms } from '../fragments/logForms/loginInputForms';
import { useNavigate } from 'react-router-dom';
import useCircleInfoToast from '../../hooks/circleInfoToast';
import { LoginDataType } from '../../validators/formType';
import api from '../../networks/api';

export function LoginPage() {
  const navigate = useNavigate();
  const createToast = useCircleInfoToast();

  async function onLogin(data: LoginDataType) {
    const promise = handler(data);
    createToast(promise, {
      title: 'Login',
      message: 'Logged In!',
    });
    return promise;
  }

  async function handler(data: LoginDataType): Promise<unknown> {
    await api.LOGIN(data);
    navigate('/');
    return navigate(0);
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
      <SideImage1 />
      <LoginInputForms onSubmit={onLogin} />
    </Box>
  );
}
