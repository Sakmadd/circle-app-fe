import {
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { useCustomColorModeValues } from '../../../../hooks/useCustomColorModeValues';
import ProfileCard from '../../profiles/profileCard';
import { SuggestionCard } from '../../suggestions/suggestionCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

interface ChildProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UserPreferencesMobile({ isOpen, onClose }: ChildProps) {
  const loggedUser = useSelector((state: RootState) => state.loggedUser.value);
  const { baseColor } = useCustomColorModeValues();
  const menuRef = useRef<HTMLDivElement | null>(null);

  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInRight"
      size={'xs'}
    >
      <ModalOverlay backdropFilter="blur(4px)" />

      <ModalContent padding={0} pos={'absolute'} right={0}>
        <ModalBody padding={5} bgColor={baseColor}>
          <Flex
            ref={menuRef}
            display={{ base: 'flex', xl: 'none' }}
            backgroundColor={baseColor}
            as={'nav'}
            direction={'column'}
            gap={'1rem'}
            height={'80vh'}
            borderRadius={'2xl'}
            transition={'100ms'}
          >
            <ProfileCard user={loggedUser!} />
            <SuggestionCard />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
