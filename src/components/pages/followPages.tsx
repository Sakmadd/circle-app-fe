import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { UserType } from '../../types/types';
import { LeftArrowButton } from '../elements/buttons/leftArrowButton';
import { MainContent } from '../fragments/bars/mainContent';
import BrandTabs from '../fragments/utils/BrandTabs';
import AccountListCard from '../fragments/utils/acountListCard';
import { dummyUsers } from '../../data/dummy';

function FollowsPage() {
  const [followers, setFollowers] = useState<UserType[]>([]);
  const [followings, setFollowings] = useState<UserType[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const loggedUser = useSelector(
    (states: RootState) => states.loggedUser.value
  );

  useEffect(() => {
    async function getUsers() {
      setLoading(true);

      if (loggedUser) {
        setFollowers(() => {
          return dummyUsers.filter((user) => {
            return loggedUser.followers.some(
              (follower) => follower.ownerId === user.id
            );
          });
        });

        setFollowings(() => {
          return dummyUsers.filter((user) => {
            return loggedUser.followings.some(
              (following) => following.targetId === user.id
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
          leftContent={<>loading</>}
          rightTitle={'Following'}
          rightContent={<>loading</>}
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
