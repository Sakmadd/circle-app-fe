import { Flex, GridItem, Spacer } from '@chakra-ui/react';
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
      <GridItem colSpan={4} display={{ base: 'none', xl: 'block' }}>
        <Flex
          as={'nav'}
          direction={'column'}
          gap={'1rem'}
          pos={'sticky'}
          top={'24'}
          width={'100%'}
          paddingX={'1rem'}
        >
          <Link to={'/'}>
            <NavigationItem icon={<BiSolidHome />} text={'Home'} />
          </Link>

          <Link to={'/follows'}>
            <NavigationItem icon={<BiHeart />} text={'Follows'} />
          </Link>
          <Link to={'/me'}>
            <NavigationItem icon={<BiUser />} text={'Me'} />
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
      </GridItem>
    </>
  );
}
