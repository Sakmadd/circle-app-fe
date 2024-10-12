import { Image } from '@chakra-ui/react';

export function SideImage2() {
  return (
    <>
      <Image
        src="/src/assets/password-illustration.svg"
        display={{ base: 'none', md: 'block' }}
        width={{ md: '30%', '2xl': '25%' }}
      />
    </>
  );
}
