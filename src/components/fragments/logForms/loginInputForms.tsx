import { Box, Button, Text } from '@chakra-ui/react';
import { Inputs } from '../../elements/inputs';
import { Anchor } from '../../elements/links/anchor';
import { LogoText } from '../../elements/logoText';
import { LogOptions } from '../logOptions/logOptions';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';

export function LoginInputForms() {
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
          <Inputs
            props={[
              { name: 'emailOrUsername', placeholder: 'Email/Username' },
              { name: 'password', placeholder: 'Password' },
            ]}
          ></Inputs>

          <Button colorScheme="blackAlpha">login</Button>
          <LogOptions></LogOptions>
          <Anchor href="/help/forgot">Forgot Password ?</Anchor>
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
          <Text fontSize={'sm'}>Don't have an account yet?</Text>
          <Anchor href="/register">Register</Anchor>
        </Box>
      </Box>
    </>
  );
}
