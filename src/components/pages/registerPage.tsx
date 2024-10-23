import { Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import useCircleInfoToast from '../../hooks/circleInfoToast';
import api from '../../networks/api';
import { RegisterDataType } from '../../validators/formType';
import { SideImage1 } from '../elements/images/sideImage1';
import { RegisterInputForms } from '../fragments/logForms/registerInputForms';

export function RegisterPage() {
  const navigate = useNavigate();
  const createToast = useCircleInfoToast();

  async function onRegister(data: RegisterDataType): Promise<void> {
    const watchedPromise = registerHandler(data);
    createToast(watchedPromise, {
      title: 'Register',
      message: 'Account created!',
    });
  }

  async function registerHandler(data: RegisterDataType): Promise<unknown> {
    await api.REGISTER(data);
    return navigate('/');
  }
  return (
    <>
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
        <RegisterInputForms onSubmit={onRegister} />
      </Box>
    </>
  );
}
