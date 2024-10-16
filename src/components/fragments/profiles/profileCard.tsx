import { Flex } from '@chakra-ui/react';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';
import ProfileCardBody from './profileCardBody';
import ProfileCardFooter from './profilecardFooter';
import { ProfileCardHeader } from './profilesCardHeader';
import { useLocation } from 'react-router-dom';
import { UserType } from '../../../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

interface ProfileCardProps {
  profileHandler?: () => void;
}

function ProfileCard({ profileHandler }: ProfileCardProps) {
  const loggedUser: UserType | undefined = useSelector(
    (states: RootState) => states.loggedUser.value
  );
  const location = useLocation();

  const { baseColor, borderLineColor, textColor } = useCustomColorModeValues();

  if (loggedUser) {
    const {
      id,
      avatar,
      banner,
      bio,
      username,
      name,
      totalFollower,
      totalFollowing,
    } = loggedUser;
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
          totalFollower={totalFollower}
          totalFollowing={totalFollowing}
        />
      </Flex>
    );
  }
}

export default ProfileCard;
