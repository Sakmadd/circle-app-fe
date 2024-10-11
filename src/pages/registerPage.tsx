import { Box } from '@chakra-ui/react';
import { RegisterInputForms } from '../components/fragments/logForms/registerInputForms';
import { SideImage1 } from '../components/elements/sideImage1';

export function RegisterPage() {
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
        <RegisterInputForms></RegisterInputForms>
      </Box>
    </>
  );
}
