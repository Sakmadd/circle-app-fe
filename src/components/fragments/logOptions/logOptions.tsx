import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';

export function LogOptions() {
  const { baseDarkerColor, borderLineColor } = useCustomColorModeValues();

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
          <Button colorScheme="yellow" variant="outline" padding={'2'}>
            <Image src="/src/assets/social/google-icon.svg" />
          </Button>
          <Button colorScheme="yellow" variant="outline" padding={'2'}>
            <Image src="/src/assets/social/facebook-icon.svg" />
          </Button>
        </Box>
      </Box>
    </>
  );
}
