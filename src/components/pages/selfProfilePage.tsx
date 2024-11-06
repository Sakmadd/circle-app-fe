import { Box, Flex, Spacer, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useCustomColorModeValues } from '../../hooks/useCustomColorModeValues';
import api from '../../networks/api';
import { RootState } from '../../redux/store';
import { UserType } from '../../types/types';
import GhostButton from '../elements/buttons/ghostButton';
import { LeftArrowButton } from '../elements/buttons/leftArrowButton';
import { MainContent } from '../fragments/bars/mainContent';
import FeedList from '../fragments/feeds/item/feedList';
import { EditProfileModal } from '../fragments/modals/editProfileModal';
import ProfileCard from '../fragments/profiles/profileCard';
import { ProfileSkeleton } from '../fragments/skeleton/profileSkeleton';
import BrandTabs from '../fragments/utils/BrandTabs';
import { MediaCollections } from './mediaCollections';

export function SelfProfilePage() {
  const [loading, isLoading] = useState(true);
  const { textColor } = useCustomColorModeValues();
  const {
    isOpen: isEditProfileModalOpen,
    onOpen: onEditProfileModalOpen,
    onClose: onCloseEditProfileModal,
  } = useDisclosure();
  const loggedUser = useSelector(
    (states: RootState) => states.loggedUser.value
  );

  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    async function GET_USER() {
      const user: UserType = await api.GET_SINGLE_USER(loggedUser!.id);
      console.log(user);

      setUser(user);
      isLoading(false);
    }
    GET_USER();
  }, [loggedUser]);
  if (loading) {
    return (
      <MainContent>
        <ProfileSkeleton />
      </MainContent>
    );
  }
  if (user) {
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
          <ProfileCard user={loggedUser!} />
          <Box paddingTop={'1rem'}>
            <BrandTabs
              leftTitle={'Posts'}
              leftContent={<FeedList feeds={user!.feeds} />}
              rightTitle={'Media'}
              rightContent={<MediaCollections feeds={user!.feeds} />}
            ></BrandTabs>
          </Box>
        </MainContent>
        <EditProfileModal
          isOpen={isEditProfileModalOpen}
          onClose={onCloseEditProfileModal}
        />
      </>
    );
  }
}
