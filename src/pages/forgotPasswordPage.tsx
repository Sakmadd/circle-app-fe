import { Box } from '@chakra-ui/react';
import { SideImage2 } from '../components/elements/sideImage2';
import { ForgotInputForms } from '../components/fragments/forgotResetForms/forgotInputForms';

export function ForgotPage() {
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
      <ForgotInputForms />
    </Box>
  );
}
