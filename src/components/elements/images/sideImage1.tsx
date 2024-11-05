import { Image } from '@chakra-ui/react';

export function SideImage1() {
  return (
    <>
      <Image
        src="/assets/log-illustration.svg"
        display={{ base: 'none', md: 'block' }}
        width={{ md: '40%', '2xl': '35%' }}
      />
    </>
  );
}
