import { Box, Flex, Spacer, useDisclosure } from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';
import { dummyFeeds } from '../../data/dummy';
import { useCustomColorModeValues } from '../../hooks/useCustomColorModeValues';
import GhostButton from '../elements/buttons/ghostButton';
import { LeftArrowButton } from '../elements/buttons/leftArrowButton';
import { MainContent } from '../fragments/bars/mainContent';
import FeedList from '../fragments/feeds/item/feedList';
import { EditProfileModal } from '../fragments/modals/editProfileModal';
import ProfileCard from '../fragments/profiles/profileCard';
import BrandTabs from '../fragments/utils/BrandTabs';
import { MediaCollections } from './mediaCollections';

export function SelfProfilePage() {
  const { textColor } = useCustomColorModeValues();
  const {
    isOpen: isEditProfileModalOpen,
    onOpen: onEditProfileModalOpen,
    onClose: onCloseEditProfileModal,
  } = useDisclosure();

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
        <ProfileCard />
        <Box paddingTop={'1rem'}>
          <BrandTabs
            leftTitle={'Posts'}
            leftContent={<FeedList feeds={dummyFeeds} />}
            rightTitle={'Media'}
            rightContent={<MediaCollections feeds={dummyFeeds} />}
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
