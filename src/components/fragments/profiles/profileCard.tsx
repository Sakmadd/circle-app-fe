import { Flex, useColorModeValue } from '@chakra-ui/react';
import { ProfileCardHeader } from './profilesCardHeader';
import ProfileCardBody from './profileCardBody';
import ProfileCardFooter from './profilecardFooter';

function ProfileCard() {
  const borderBaseDarker = useColorModeValue('day.baseDarker', 'transparent');
  const bgBaseDarker = useColorModeValue('transparent', 'night.baseDarker');
  const fontColor = useColorModeValue('day.text', 'night.text');
  const border = useColorModeValue('2px', '0px');

  return (
    <Flex
      flexDirection={'column'}
      border={border}
      borderColor={borderBaseDarker}
      backgroundColor={bgBaseDarker}
      borderRadius={'10px'}
      padding={'5%'}
      color={fontColor}
    >
      <ProfileCardHeader
        bgImg="https://s3-alpha-sig.figma.com/img/ff72/df09/d00360c5841aa3f95403eff20cb41f19?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q3WDgg946e5-1Ojyl5~dMXGSWqTpS2T36oGpRx8OMooCd~uxeY8YPWPSqR96a~Y2B6xM~GQ2Jjm7DWqZzkb6Jmmfm~QBBXALbGsqbBymX98vj0tp4EEjN4B6vzh8CpdAgwRz~BUHIF0jTYbTp3etrQRO4Xc~AIjGY~rF~zltfxXGtl6FWe~TvTqxY3okicODHGpjB7ELzHpt5FAx1X0VdgcJpVkOK1bY1ehseZ3akm8oKagk6QP-89xKSRsE7Bq-c2HHxepLwEWfCdHcAuaIh2kwIB4ZL6kqdpqrf5ZrmRG39WK~Mfjr~Z-6CsUXgSK9ULOCDLJAw7V0vOD~ugEllA__"
        profileImg="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"
      />
      <ProfileCardBody
        bio={'Lorem impsum dolor sit amet ngentot'}
        name={'Ini Nama'}
        username={'IniUsername'}
      />
      <ProfileCardFooter totalFollower={0} totalFollowing={0} />
    </Flex>
  );
}

export default ProfileCard;
