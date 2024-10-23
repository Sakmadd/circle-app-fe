import { Flex } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';
import { UserType } from '../../../types/types';
import ProfileCardBody from './profileCardBody';
import ProfileCardFooter from './profilecardFooter';
import { ProfileCardHeader } from './profilesCardHeader';

interface ProfileCardProps {
  profileHandler?: () => void;
  user: UserType;
}

function ProfileCard({ profileHandler, user }: ProfileCardProps) {
  const location = useLocation();

  const { baseColor, borderLineColor, textColor } = useCustomColorModeValues();

  if (user) {
    const {
      id,
      avatar,
      banner,
      bio,
      username,
      name,
      totalFollowers,
      totalFollowings,
    } = user;
    return (
      <Flex
        flexDirection={'column'}
        border={
          location.pathname === '/self' || location.pathname === `/user/${id}`
            ? 'none'
            : '2px'
        }
        borderColor={borderLineColor}
        backgroundColor={baseColor}
        borderRadius={'10px'}
        padding={
          location.pathname === '/self' || location.pathname === `/user/${id}`
            ? '0'
            : '5%'
        }
        color={textColor}
      >
        <ProfileCardHeader
          bgImg={banner}
          profileImg={avatar}
          profileHandler={profileHandler}
        />
        <ProfileCardBody bio={bio} name={name} username={username} />
        <ProfileCardFooter
          totalFollower={totalFollowers}
          totalFollowing={totalFollowings}
        />
      </Flex>
    );
  }
}

export default ProfileCard;
