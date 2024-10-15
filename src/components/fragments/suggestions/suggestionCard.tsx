import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { dummyUsers } from '../../../data/dummy';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';
import { UserType } from '../../../types/types';
import HeadingText from '../../elements/texts/headingText';
import { SuggestionAccountCard } from './suugestionAccountCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

export function SuggestionCard() {
  const { borderLineColor, baseColor, textColor } = useCustomColorModeValues();
  const [users, setUsers] = useState<UserType[]>([]);
  const loggedUser: UserType | undefined = useSelector(
    (states: RootState) => states.loggedUser.value
  );

  useEffect(() => {
    async function getUsers() {
      const rawUsers: UserType[] = dummyUsers;

      if (loggedUser) {
        const users = rawUsers.filter((user) => {
          return !user.isFollowed && user.id !== loggedUser.id;
        });

        const randomUsers = users.sort(() => Math.random() - 0.5).splice(0, 3);
        setUsers(randomUsers);
      }
    }

    getUsers();
  }, [loggedUser]);

  if (users.length) {
    return (
      <>
        <Flex
          flexDirection={'column'}
          border={'2px'}
          borderColor={borderLineColor}
          backgroundColor={baseColor}
          borderRadius={'10px'}
          padding={'5%'}
          color={textColor}
          gap={'.7rem'}
        >
          <HeadingText size="lg" textAlign={{ base: 'center', lg: 'left' }}>
            Suggested For You
          </HeadingText>
          <Flex
            flexDirection={'column'}
            gap={'1rem'}
            maxHeight={'200px'}
            overflow={'auto'}
            sx={{
              '&::-webkit-scrollbar': {
                width: '2px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#888',
                borderRadius: '24px',
              },
            }}
          >
            {users.map((user) => (
              <SuggestionAccountCard
                key={user.id}
                id={user.id}
                username={user.username}
                name={user.name}
                bio={user.bio}
                avatar={user.avatar}
                isFollowed={user.isFollowed}
                noBio
              />
            ))}
          </Flex>
        </Flex>
      </>
    );
  }
}
