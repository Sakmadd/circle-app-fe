import { Box } from '@chakra-ui/react';
import { SideImage2 } from '../elements/images/sideImage2';
import { ForgotInputForms } from '../fragments/forgotResetForms/forgotInputForms';
import useCircleInfoToast from '../../hooks/circleInfoToast';
import { ForgotDataType } from '../../validators/formType';
import api from '../../networks/api';

export function ForgotPage() {
  const toast = useCircleInfoToast();

  async function onSubmit(data: ForgotDataType) {
    const promise = handler(data);
    toast(promise, {
      message: 'Instructions Sent To Your Email!',
      title: 'Forgot Password',
    });
    return promise;
  }

  async function handler(data: ForgotDataType) {
    await api.FORGOT(data);
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
      <ForgotInputForms onSubmit={onSubmit} />
    </Box>
  );
}
