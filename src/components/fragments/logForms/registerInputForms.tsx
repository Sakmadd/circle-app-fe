import { Box, Button, Text } from '@chakra-ui/react';
import { Inputs } from '../../elements/inputs';
import { Anchor } from '../../elements/anchor';
import { LogOptions } from '../logOptions/logOptions';
import { LogoText } from '../../elements/logoText';

export function RegisterInputForms() {
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
          border={{ base: 'none', md: '1px solid #E5E5E5' }}
          bg={'white'}
          display={'flex'}
          flexDirection={'column'}
          gap={3}
        >
          <LogoText />
          <Inputs placeholder={['Username', 'Email', 'Password']}></Inputs>
          <Button colorScheme="blackAlpha">Register</Button>

          <LogOptions></LogOptions>
        </Box>

        <Box
          justifyContent={'center'}
          padding={'5%'}
          border={{ base: 'none', md: '1px solid #E5E5E5' }}
          bg={'white'}
          display={'flex'}
          flexDirection={'row'}
          gap={1}
        >
          <Text fontSize={'sm'}>Already have an account?</Text>
          <Anchor href="#">Login</Anchor>
        </Box>
      </Box>
    </>
  );
}
