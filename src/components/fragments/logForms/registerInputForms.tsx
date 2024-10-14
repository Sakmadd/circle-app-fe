import { Box, Button, Text } from '@chakra-ui/react';
import { Inputs } from '../../elements/inputs';
import { Anchor } from '../../elements/links/anchor';
import { LogOptions } from '../logOptions/logOptions';
import { LogoText } from '../../elements/logoText';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';

export function RegisterInputForms() {
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
              { name: 'username', placeholder: 'Username' },
              { name: 'email', placeholder: 'Email' },
              { name: 'password', placeholder: 'Password' },
            ]}
          ></Inputs>
          <Button colorScheme="blackAlpha">Register</Button>

          <LogOptions></LogOptions>
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
          <Text fontSize={'sm'}>Already have an account?</Text>
          <Anchor href="/login">Login</Anchor>
        </Box>
      </Box>
    </>
  );
}
