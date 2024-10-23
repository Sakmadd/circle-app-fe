import { Flex } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DevCard } from '../devCards/devCard';
import ProfileCard from '../profiles/profileCard';
import { SuggestionCard } from '../suggestions/suggestionCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

export function UserPreferences() {
  const loggedUser = useSelector((state: RootState) => state.loggedUser.value);
  const navigation = useNavigate();
  const location = useLocation();
  return (
    <>
      <Flex
        direction={'column'}
        gap={'1rem'}
        pos={'fixed'}
        padding={'1rem'}
        width={{ lg: '36%', xl: '24%' }}
      >
        {location.pathname !== '/self' && (
          <ProfileCard
            user={loggedUser!}
            profileHandler={() => navigation('/self')}
          />
        )}
        <SuggestionCard />
        <DevCard />
      </Flex>
    </>
  );
}
