import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';
import api from '../../../networks/api';

export function LogOptions() {
  const { baseDarkerColor, borderLineColor } = useCustomColorModeValues();
  async function handleLogin(provider: string) {
    const response = await api.LOGIN_PROVIDER(provider);
    window.location.href = response;
  }
  return (
    <>
      <Box bg={'white'} display={'flex'} flexDirection={'column'} gap={3}>
        <Box display={'flex'} gap={5} justifyContent={'center'}>
          <Box
            width={'full'}
            as="hr"
            height="1px"
            border="0"
            borderColor={borderLineColor}
            backgroundColor={baseDarkerColor}
            marginY={4}
          />
          <Text fontSize={'xl'}>Or</Text>
          <Box
            width={'full'}
            as="hr"
            height="1px"
            border="0"
            borderColor={borderLineColor}
            backgroundColor={baseDarkerColor}
            marginY={4}
          />
        </Box>

        <Box display={'flex'} gap={3} justifyContent={'center'}>
          <Button
            colorScheme="yellow"
            variant="outline"
            padding={'2'}
            onClick={() => handleLogin('google')}
          >
            <Image src="/assets/social/google-icon.svg" />
          </Button>
          <Button
            colorScheme="yellow"
            variant="outline"
            padding={'2'}
            onClick={() => handleLogin('facebook')}
          >
            <Image src="/assets/social/facebook-icon.svg" />
          </Button>
        </Box>
      </Box>
    </>
  );
}
