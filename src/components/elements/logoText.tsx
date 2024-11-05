import { Image } from '@chakra-ui/react';

export function LogoText({
  margin,
  marginy,
  width,
}: {
  marginy?: string;
  margin?: string;
  width?: string;
}) {
  return (
    <>
      <Image
        margin={margin ?? 'auto'}
        marginTop={marginy ?? '10%'}
        marginBottom={marginy ?? '10%'}
        width={width ?? '40%'}
        src="/assets/circle-text.svg"
      />
    </>
  );
}
