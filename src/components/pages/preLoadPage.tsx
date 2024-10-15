import { Container, Flex, Image, Spinner } from '@chakra-ui/react';

export function PreLoadPage() {
  const animationStyle = {
    animation: 'pulse 2s infinite',
  };
  return (
    <Container height={'100vh'}>
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        gap={'.5rem'}
        height={'100%'}
        flexDirection={'column'}
        marginBottom={'50px'}
      >
        <Image
          src={'/src/assets/preload-circle-logo.svg'}
          width={'85px'}
          paddingTop={'15px'}
          style={animationStyle}
        />
        <Spinner
          thickness="10px"
          width={'120px'}
          height={'120px'}
          color={'accent.base'}
          pos={'absolute'}
        />
      </Flex>
    </Container>
  );
}
