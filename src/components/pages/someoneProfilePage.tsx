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
import { ProfileSkeleton } from '../fragments/skeleton/profileSkeleton';
import BrandTabs from '../fragments/utils/BrandTabs';
import { MediaCollections } from './mediaCollections';

export function SomeoneProfilePage() {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);
  const { textColor } = useCustomColorModeValues();
  const { id }: Readonly<Params<string>> = useParams();
  const navigate = useNavigate();
  const loggedUser = useSelector((state: RootState) => state.loggedUser.value);

  useEffect(() => {
    // Mengatur ulang loading saat URL berganti
    setIsLoading(true);
    setIsNotFound(false);

    async function fetchUser() {
      try {
        const fetchedUser: UserType = await api.GET_SINGLE_USER(id!);
        if (!fetchedUser) {
          setIsNotFound(true);
          return;
        }
        if (loggedUser?.id === fetchedUser.id) {
          navigate('/self');
          return;
        }
        setUser(fetchedUser);
      } catch {
        setIsNotFound(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUser();
  }, [id, loggedUser, navigate]);

  if (isLoading) {
    return (
      <MainContent>
        <ProfileSkeleton />
      </MainContent>
    );
  }

  if (isNotFound || !user) {
    return (
      <MainContent>
        <LeftArrowButton href="/" text="Not Found" />
        <Flex justifyContent="center" margin="50px">
          <Text fontWeight="bold" fontSize="2xl" color={textColor}>
            Sorry, We Couldn't Find That User
          </Text>
        </Flex>
      </MainContent>
    );
  }

  return (
    <MainContent>
      <LeftArrowButton href="/" text={user.name} />
      <ProfileCard user={user} />
      <Box paddingTop="1rem">
        <BrandTabs
          leftTitle="Posts"
          leftContent={<FeedList feeds={user.feeds} />}
          rightTitle="Media"
          rightContent={<MediaCollections feeds={user.feeds} />}
        />
      </Box>
    </MainContent>
  );
}
