import { Box, Button, Text } from '@chakra-ui/react';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';
import { Inputs } from '../../elements/inputs';
import { Anchor } from '../../elements/links/anchor';
import { LogoText } from '../../elements/logoText';

export function ForgotInputForms() {
  const { baseColor, borderLineColor } = useCustomColorModeValues();

  return (
    <>
      <Box
        width={{ base: 'full', md: '40%', '2xl': '30%' }}
        display={'flex'}
        flexDirection={'column'}
        gap={3}
      >
        <Box
          padding={'10%'}
          border={{ base: 'none', md: '1px solid ' }}
          borderColor={borderLineColor}
          bg={baseColor}
          display={'flex'}
          flexDirection={'column'}
          gap={3}
        >
          <LogoText />
          <Text fontSize={'md'} textAlign={'center'}>
            Forgot Your Password?
          </Text>
          <Inputs props={[{ name: 'email', placeholder: 'Email' }]}></Inputs>
          <Button colorScheme="blackAlpha">Send Me Instructions</Button>
        </Box>

        <Box
          justifyContent={'center'}
          padding={'5%'}
          border={{ base: 'none', md: '1px solid ' }}
          borderColor={borderLineColor}
          bg={baseColor}
          display={'flex'}
          flexDirection={'row'}
          gap={1}
        >
          <Text fontSize={'sm'}>Try another account?</Text>
          <Anchor href="/login">Login</Anchor>
        </Box>
      </Box>
    </>
  );
}
