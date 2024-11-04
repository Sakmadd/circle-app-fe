import { Avatar, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../../../networks/api';
import { setLoggedUser } from '../../../redux/slices/authSlice';
import { UserType } from '../../../types/types';
import HollowButton from '../../elements/buttons/hollowButton';

interface AccountCardProps {
  id: string;
  username: string;
  name: string;
  bio?: string | null;
  avatar: string;
  isFollowed: boolean;
  noBio?: boolean;
}

export function AccountCard({
  id,
  username,
  name,
  bio,
  avatar,
  isFollowed,
  noBio,
}: AccountCardProps) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [follows, setFollows] = useState<boolean>(isFollowed);

  const dispatch = useDispatch();

  async function onFollow() {
    try {
      setLoading(true);

      if (!isFollowed) {
        await api.FOLLOW_USER(id);
        return setFollows(true);
      }

      await api.UNFOLLOW_USER(id);
      return setFollows(false);
    } catch {
      setFollows(isFollowed);
    } finally {
      dispatchNewUserData();
      setLoading(false);
    }
  }

  async function dispatchNewUserData() {
    const loggedUser: UserType = await api.GET_LOGGED_USER();
    dispatch(setLoggedUser(loggedUser));
  }

  return (
    <>
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
          {bio && !noBio && <Text fontSize={'10px'}>{bio}</Text>}
        </Flex>
        {isLoading ? (
          <HollowButton />
        ) : follows ? (
          <HollowButton text={'Unfollow'} onClick={onFollow} dark />
        ) : (
          <HollowButton text={'Follow'} onClick={onFollow} />
        )}
      </Flex>
    </>
  );
}
