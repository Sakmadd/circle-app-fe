import { Box, Image } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';

interface ProfileCardHeaderProps {
  profileHandler?: () => void;
  bgImg: string | undefined;
  profileImg: string | undefined;
  userId?: string;
}

export function ProfileCardHeader({
  profileHandler,
  bgImg,
  profileImg,
  userId,
}: ProfileCardHeaderProps) {
  const location = useLocation();
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
        <Box
          overflow={'hidden'}
          borderRadius={
            ['/self', `/user/${userId}`].includes(location.pathname)
              ? '0px'
              : 'xl'
          }
        >
          <Image
            src={bgImg}
            alt="Background Image"
            width={'full'}
            height={'full'}
          />
        </Box>
        <Box onClick={profileHandler}>
          <Image
            position={'absolute'}
            top={'45%'}
            left={'50%'}
            transform={'translate(-50%, -50%)'}
            bg={'teal.500'}
            width={'22%'}
            maxWidth={'150px'}
            borderRadius={'full'}
            border={'4px'}
            borderColor={baseColor}
            src={profileImg}
            alt="Profile Image"
            cursor="pointer"
          />
        </Box>
      </Box>
    </>
  );
}
