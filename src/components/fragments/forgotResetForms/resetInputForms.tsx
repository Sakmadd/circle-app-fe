import { Box, Button, Text } from '@chakra-ui/react';
import { Inputs } from '../../elements/input/inputs';
import { Anchor } from '../../elements/links/anchor';
import { LogoText } from '../../elements/logoText';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';

export function ResetInputForms() {
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
          border={{ base: 'none', md: '1px solid  ' }}
          borderColor={borderLineColor}
          bg={baseColor}
          display={'flex'}
          flexDirection={'column'}
          gap={3}
        >
          <LogoText />
          <Text fontSize={'md'} textAlign={'center'}>
            Secure Your Account!
          </Text>
          <Inputs
            props={[
              { name: 'newPassword', placeholder: 'New Password' },
              { name: 'confirmPassword', placeholder: 'Confirm Password' },
            ]}
          ></Inputs>
          <Button colorScheme="blackAlpha">Create New Password</Button>
        </Box>

        <Box
          justifyContent={'center'}
          padding={'5%'}
          border={{ base: 'none', md: '1px solid' }}
          borderColor={borderLineColor}
          bg={baseColor}
          display={'flex'}
          flexDirection={'row'}
          gap={1}
        >
          <Text fontSize={'sm'}>Already have an account?</Text>
          <Anchor href="/login">Log In</Anchor>
        </Box>
      </Box>
    </>
  );
}
