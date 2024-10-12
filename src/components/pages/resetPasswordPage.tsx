import { Box } from '@chakra-ui/react';
import { SideImage2 } from '../elements/images/sideImage2';
import { ResetInputForms } from '../fragments/forgotResetForms/resetInputForms';

export function ResetPage() {
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
      <ResetInputForms />
    </Box>
  );
}
