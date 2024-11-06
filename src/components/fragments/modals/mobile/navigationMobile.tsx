import {
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spacer,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { BiHeart, BiLogOut, BiSolidHome, BiUser } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { useCustomColorModeValues } from '../../../../hooks/useCustomColorModeValues';
import NavigationItem from '../../navigations/navigationItem';
import SolidButton from '../../../elements/buttons/solidButton';
import api from '../../../../networks/api';
import { unsetLoggedUser } from '../../../../redux/slices/authSlice';
import { useDispatch } from 'react-redux';

interface ChildProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NavigationMobile({ isOpen, onClose }: ChildProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function onLogout() {
    api.SET_TOKEN('');
    dispatch(unsetLoggedUser());

    navigate('/');
  }
  const { baseDarkerColor } = useCustomColorModeValues();

  const menuRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInLeft"
        size={'xs'}
      >
        <ModalOverlay backdropFilter="blur(4px)" />
        <ModalContent padding={0} pos={'absolute'} left={0}>
          <ModalBody padding={0} backgroundColor={baseDarkerColor}>
            <Flex
              ref={menuRef}
              display={{ base: 'flex', xl: 'none' }}
              backgroundColor={baseDarkerColor}
              as={'nav'}
              direction={'column'}
              gap={'1rem'}
              height={'80vh'}
              padding={'2rem'}
              borderRadius={'2xl'}
              transition={'100ms'}
            >
              <Link to={'/'}>
                <NavigationItem icon={<BiSolidHome />} text={'Home'} />
              </Link>

              <Link to={'/follows'}>
                <NavigationItem icon={<BiHeart />} text={'Follows'} />
              </Link>
              <Link to={'/self'}>
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
