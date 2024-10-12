import { Box, Flex, Spacer } from '@chakra-ui/react';
import { LogoText } from '../../elements/logoText';
import { Link } from 'react-router-dom';
import NavigationItem from './navigationItem';
import {
  BiHeart,
  BiLogOut,
  BiSearchAlt,
  BiSolidHome,
  BiUser,
} from 'react-icons/bi';
import SolidButton from '../../elements/buttons/solidButton';

export function Navigation() {
  async function onLogout() {
    return;
  }

  return (
    <>
      <Box display={'flex'} justifyContent={'center'}>
        <Flex
          as={'nav'}
          direction={'column'}
          gap={'2rem'}
          height={'90vh'}
          pos={'fixed'}
          w={'266px'}
        >
          <LogoText margin="0px 0px" width="50%" marginy="0" />
          <Link to={'/'}>
            <NavigationItem icon={<BiSolidHome />} text={'Home'} />
          </Link>
          <Link to={'/search'}>
            <NavigationItem icon={<BiSearchAlt />} text={'Search'} />
          </Link>
          <Link to={'/follows'}>
            <NavigationItem icon={<BiHeart />} text={'Follows'} />
          </Link>
          <Link to={'/me'}>
            <NavigationItem icon={<BiUser />} text={'Me'} />
          </Link>
          <SolidButton text="Create Post"></SolidButton>
          <Spacer />
          <NavigationItem
            icon={<BiLogOut />}
            text={'Logout'}
            onLogout={onLogout}
          />
        </Flex>
      </Box>
    </>
  );
}
