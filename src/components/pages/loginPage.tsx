import { Box } from '@chakra-ui/react';
import { LoginInputForms } from '../fragments/logForms/loginInputForms';
import { SideImage1 } from '../elements/images/sideImage1';

export function LoginPage() {
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
      <LoginInputForms></LoginInputForms>
    </Box>
  );
}
