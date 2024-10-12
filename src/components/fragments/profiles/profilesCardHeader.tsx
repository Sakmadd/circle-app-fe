import { Box, Image, useColorModeValue } from '@chakra-ui/react';
import { Anchor } from '../../elements/links/anchor';

export function ProfileCardHeader({
  bgImg,
  profileImg,
}: {
  bgImg: string;
  profileImg: string;
}) {
  const bgBase = useColorModeValue('day.base', 'night.baseDarker');
  const fontColor = useColorModeValue('day.text', 'night.text');

  return (
    <>
      <Box
        display={'flex'}
        gap={'10px'}
        flexDirection={'column'}
        position={'relative'}
        color={fontColor}
      >
        <Box height={'100px'} overflow={'hidden'} borderRadius={'xl'}>
          <Image src={bgImg} />
        </Box>
        <Anchor href="/#">
          <Image
            position={'absolute'}
            top={'45%'}
            left={'50%'}
            transform={'translate(-50%, -50%)'}
            bg={'teal.500'}
            marginX={'1%'}
            width={'22%'}
            borderRadius={'full'}
            border={'4px'}
            borderColor={bgBase}
            src={profileImg}
          />
        </Anchor>
      </Box>
    </>
  );
}
