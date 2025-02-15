import { Flex, Spacer, useDisclosure } from '@chakra-ui/react';
import { BiHeart, BiLogOut, BiSolidHome, BiUser } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import SolidButton from '../../elements/buttons/solidButton';
import NavigationItem from './navigationItem';
import api from '../../../networks/api';
import { useDispatch } from 'react-redux';
import { unsetLoggedUser } from '../../../redux/slices/authSlice';
import { FeedPostModal } from '../modals/feedPostModal';
import { useFeeds } from '../../../hooks/useFeeds';

export function Navigation() {
  const { onPost } = useFeeds();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function onLogout() {
    api.SET_TOKEN('');
    dispatch(unsetLoggedUser());

    navigate('/');
  }

  return (
    <>
      <Flex
        as={'nav'}
        direction={'column'}
        gap={'1.5rem'}
        pos={'sticky'}
        top={'24'}
        width={'100%'}
        padding={'2rem'}
        paddingTop={'1rem'}
      >
        <Link to={'/'}>
          <NavigationItem icon={<BiSolidHome />} text={'Home'} />
        </Link>

        <Link to={'/follows'}>
          <NavigationItem icon={<BiHeart />} text={'Follows'} />
        </Link>
        <Link to={'/self'}>
          <NavigationItem icon={<BiUser />} text={'Self'} />
        </Link>
        <SolidButton onClick={onOpen} text="Create Post"></SolidButton>
        <Spacer />
        <Flex gap={'1rem'}>
          <NavigationItem
            icon={<BiLogOut />}
            text={'Logout'}
            onLogout={onLogout}
          />
        </Flex>
      </Flex>
      <FeedPostModal
        onPost={onPost}
        onClose={onClose}
        isOpen={isOpen}
        buttonText="Post"
        imagePreviewId="atNavigation"
        placeholder="Whats On Your Mind?"
      />
    </>
  );
}
