import { Box, Image } from '@chakra-ui/react';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';
import { Anchor } from '../../elements/links/anchor';

export function ProfileCardHeader({
  bgImg,
  profileImg,
}: {
  bgImg: string;
  profileImg: string;
}) {
  const { textColor, baseColor } = useCustomColorModeValues();

  return (
    <>
      <Box
        display={'flex'}
        gap={'10px'}
        flexDirection={'column'}
        position={'relative'}
        color={textColor}
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
            borderColor={baseColor}
            src={profileImg}
          />
        </Anchor>
      </Box>
    </>
  );
}
