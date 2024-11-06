import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../networks/api';
import { RootState } from '../../redux/store';
import { UserType } from '../../types/types';
import { LeftArrowButton } from '../elements/buttons/leftArrowButton';
import { MainContent } from '../fragments/bars/mainContent';
import { AccountCardSkeleton } from '../fragments/skeleton/accountCardSkeleton';
import BrandTabs from '../fragments/utils/BrandTabs';
import AccountListCard from '../fragments/utils/acountListCard';

function FollowsPage() {
  const loggedUser = useSelector((state: RootState) => state.loggedUser.value);

  const [followers, setFollowers] = useState<UserType[]>([]);
  const [followings, setFollowings] = useState<UserType[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getUsers() {
      setLoading(true);
      const rawUsers = await api.GET_ALL_USERS();
      if (loggedUser) {
        setFollowers(() => {
          return rawUsers.filter((user) => {
            return loggedUser.followers.some(
              (follower) => follower.followingId === user.id
            );
          });
        });

        setFollowings(() => {
          return rawUsers.filter((user) => {
            return loggedUser.followings.some(
              (following) => following.followerId === user.id
            );
          });
        });

        setLoading(false);
      }
    }

    getUsers();
  }, [loggedUser]);
  return (
    <MainContent>
      <LeftArrowButton text="Follows" href="/" />
      {isLoading ? (
        <BrandTabs
          leftTitle={'Followers'}
          leftContent={
            <Flex flexDirection={'column'} padding={'1rem'} gap={'1rem'}>
              <AccountCardSkeleton />
            </Flex>
          }
          rightTitle={'Following'}
          rightContent={
            <Flex flexDirection={'column'} padding={'1rem'} gap={'1rem'}>
              <AccountCardSkeleton />
            </Flex>
          }
        />
      ) : (
        <BrandTabs
          leftTitle={'Followers'}
          leftContent={<AccountListCard accounts={followers} />}
          rightTitle={'Following'}
          rightContent={<AccountListCard accounts={followings} />}
        />
      )}
    </MainContent>
  );
}

export default FollowsPage;
