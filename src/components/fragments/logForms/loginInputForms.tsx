import { Box, Button, Text } from '@chakra-ui/react';
import { Inputs } from '../../elements/input/inputs';
import { Anchor } from '../../elements/links/anchor';
import { LogoText } from '../../elements/logoText';
import { LogOptions } from '../logOptions/logOptions';

export function LoginInputForms() {
  return (
    <>
      <Box
        width={{ base: 'full', md: '40%', '2xl': '30%' }}
        display={'flex'}
        flexDirection={'column'}
        gap={3}
      >
        <Box
          borderRadius={'3px'}
          padding={'10%'}
          border={{ base: 'none', md: '1px solid grey' }}
          bg={'day.baseColor'}
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
          <Box textAlign={'center'}>
            <Anchor href="/help/forgot">Forgot Password ?</Anchor>
          </Box>
        </Box>

        <Box
          borderRadius={'3px'}
          justifyContent={'center'}
          padding={'5%'}
          border={{ base: 'none', md: '1px solid grey' }}
          bg={'day.baseColor'}
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
