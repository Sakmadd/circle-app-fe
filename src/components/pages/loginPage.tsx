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

  async function onLogin(data: LoginDataType): Promise<void> {
    const watchedPromise = registerHandler(data);
    createToast(watchedPromise, {
      title: 'Login',
      message: 'Logged In!',
    });
  }

  async function registerHandler(data: LoginDataType): Promise<unknown> {
    await api.LOGIN(data);
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
