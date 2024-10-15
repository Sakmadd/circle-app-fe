import { Flex, Spacer } from '@chakra-ui/react';
import { BiHeart, BiLogOut, BiSolidHome, BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import SolidButton from '../../elements/buttons/solidButton';
import NavigationItem from './navigationItem';

export function Navigation() {
  async function onLogout() {
    return;
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
        <SolidButton text="Create Post"></SolidButton>
        <Spacer />
        <Flex gap={'1rem'}>
          <NavigationItem
            icon={<BiLogOut />}
            text={'Logout'}
            onLogout={onLogout}
          />
        </Flex>
      </Flex>
    </>
  );
}
