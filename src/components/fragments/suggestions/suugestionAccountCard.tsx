import { Avatar, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HollowButton from '../../elements/buttons/hollowButton';

interface AccountCardProps {
  id: number;
  username: string;
  name: string;
  bio?: string | null;
  avatar: string;
  isFollowed: boolean;
  noBio?: boolean;
}

export function SuggestionAccountCard({
  id,
  username,
  name,
  bio,
  avatar,
  isFollowed,
  noBio,
}: AccountCardProps) {
  const [isUserFollowed, setUserFollowed] = useState<boolean>(isFollowed);

  const onFollow = () => {
    setUserFollowed(isFollowed);
  };

  const isLoading = false;

  return (
    <>
      {' '}
      <Flex gap={'.5rem'} alignItems={'center'}>
        <Link to={`/user/${id}`}>
          <Avatar
            src={avatar}
            width={'40px'}
            height={'40px'}
            _hover={{ opacity: '.8', transition: 'opacity .3s ease' }}
          />
        </Link>
        <Flex
          direction={'column'}
          justifyContent={'center'}
          gap={0}
          mr={'auto'}
        >
          <Link to={`/user/${id}`}>
            <Text
              fontSize={'xs'}
              fontWeight={'700'}
              _hover={{ opacity: '.8', transition: 'opacity .3s ease' }}
            >
              {name}
            </Text>
            <Text
              fontSize={'xs'}
              color={'circle.dark'}
              _hover={{ opacity: '.8', transition: 'opacity .3s ease' }}
            >
              @{username}
            </Text>
          </Link>
          {bio && !noBio && <Text fontSize={'xl'}>{bio}</Text>}
        </Flex>
        {isLoading ? (
          <HollowButton />
        ) : isUserFollowed ? (
          <HollowButton text={'Following'} onClick={onFollow} dark />
        ) : (
          <HollowButton text={'Follow'} onClick={onFollow} />
        )}
      </Flex>
    </>
  );
}
