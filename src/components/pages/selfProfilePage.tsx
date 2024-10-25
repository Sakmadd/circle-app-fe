import { Box, Flex, Spacer, useDisclosure } from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useCustomColorModeValues } from '../../hooks/useCustomColorModeValues';
import { RootState } from '../../redux/store';
import { UserType } from '../../types/types';
import GhostButton from '../elements/buttons/ghostButton';
import { LeftArrowButton } from '../elements/buttons/leftArrowButton';
import { MainContent } from '../fragments/bars/mainContent';
import FeedList from '../fragments/feeds/item/feedList';
import { EditProfileModal } from '../fragments/modals/editProfileModal';
import ProfileCard from '../fragments/profiles/profileCard';
import BrandTabs from '../fragments/utils/BrandTabs';
import { MediaCollections } from './mediaCollections';

export function SelfProfilePage() {
  const loggeduser = useSelector(
    (states: RootState) => states.loggedUser.value
  );
  const { textColor } = useCustomColorModeValues();
  const {
    isOpen: isEditProfileModalOpen,
    onOpen: onEditProfileModalOpen,
    onClose: onCloseEditProfileModal,
  } = useDisclosure();

  const { feeds }: UserType = loggeduser!;

  return (
    <>
      <MainContent>
        <Flex>
          <LeftArrowButton href="/" text="Profile" />
          <Spacer />
          <Flex gap={'1rem'} alignItems={'center'} margin={'1rem'}>
            <GhostButton
              color={textColor}
              padding={'.5rem'}
              fontSize={'xl'}
              onClick={onEditProfileModalOpen}
            >
              <FiEdit />
            </GhostButton>
          </Flex>
        </Flex>
        <ProfileCard user={loggeduser!} />
        <Box paddingTop={'1rem'}>
          <BrandTabs
            leftTitle={'Posts'}
            leftContent={<FeedList feeds={feeds} />}
            rightTitle={'Media'}
            rightContent={<MediaCollections feeds={feeds} />}
          ></BrandTabs>
        </Box>
      </MainContent>
      <EditProfileModal
        onPost={() => {}}
        isOpen={isEditProfileModalOpen}
        onClose={onCloseEditProfileModal}
      />
    </>
  );
}
