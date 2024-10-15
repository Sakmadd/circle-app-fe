import { Box, Flex, Spacer, useDisclosure } from '@chakra-ui/react';
import { LeftArrowButton } from '../elements/buttons/leftArrowButton';
import { MainContent } from '../fragments/bars/mainContent';
import FeedList from '../fragments/feeds/item/feedList';
import ProfileCard from '../fragments/profiles/profileCard';
import BrandTabs from '../fragments/utils/BrandTabs';
import { MediaCollections } from './mediaCollections';
import { dummyFeeds } from '../../data/dummy';
import GhostButton from '../elements/buttons/ghostButton';
import { FiEdit } from 'react-icons/fi';
import { EditProfileModal } from '../fragments/modals/editProfileModal';
import { useCustomColorModeValues } from '../../hooks/useCustomColorModeValues';

export function SelfProfilePage() {
  const { textColor } = useCustomColorModeValues();
  const { isOpen, onOpen, onClose } = useDisclosure();
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
              onClick={onOpen}
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
        isOpen={isOpen}
        onClose={onClose}
      ></EditProfileModal>
    </>
  );
}
