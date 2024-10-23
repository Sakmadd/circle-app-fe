import { Box, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Params, useNavigate, useParams } from 'react-router-dom';
import { useCustomColorModeValues } from '../../hooks/useCustomColorModeValues';
import api from '../../networks/api';
import { RootState } from '../../redux/store';
import { UserType } from '../../types/types';
import { LeftArrowButton } from '../elements/buttons/leftArrowButton';
import { MainContent } from '../fragments/bars/mainContent';
import FeedList from '../fragments/feeds/item/feedList';
import ProfileCard from '../fragments/profiles/profileCard';
import BrandTabs from '../fragments/utils/BrandTabs';
import { MediaCollections } from './mediaCollections';

export function SomeoneProfilePage() {
  const { textColor } = useCustomColorModeValues();
  const { id }: Readonly<Params<string>> = useParams();
  const navigate = useNavigate();
  const loggedUser = useSelector(
    (states: RootState) => states.loggedUser.value
  );

  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    async function GET_USER() {
      const user: UserType = await api.GET_SINGLE_USER(+id!);

      if (loggedUser) {
        if (loggedUser.id === user.id) {
          navigate('/self');
        }
      }

      setUser(user);
    }

    setUser(null);
    GET_USER();
  }, [loggedUser, id, navigate]);
  if (user) {
    return (
      <MainContent>
        <LeftArrowButton href="/" text={user.name} />
        <ProfileCard user={user} />
        <Box paddingTop={'1rem'}>
          <BrandTabs
            leftTitle={'Posts'}
            leftContent={<FeedList feeds={user.feeds} />}
            rightTitle={'Media'}
            rightContent={<MediaCollections feeds={user.feeds} />}
          ></BrandTabs>
        </Box>
      </MainContent>
    );
  }

  return (
    <MainContent>
      <LeftArrowButton href="/" text={'Not Found'} />
      <Flex justifyContent={'center'} margin={'50px'}>
        <Text fontWeight={'bold'} fontSize={'2xl'} color={textColor}>
          Sorry, We Couldn't Find That User
        </Text>
      </Flex>
    </MainContent>
  );
}
