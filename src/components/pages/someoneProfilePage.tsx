import { Box } from '@chakra-ui/react';
import { LeftArrowButton } from '../elements/buttons/leftArrowButton';
import { MainContent } from '../fragments/bars/mainContent';
import FeedList from '../fragments/feeds/item/feedList';
import ProfileCard from '../fragments/profiles/profileCard';
import BrandTabs from '../fragments/utils/BrandTabs';
import { MediaCollections } from './mediaCollections';
import { dummyFeeds } from '../../data/dummy';

export function SomeoneProfilePage() {
  const name = 'John Doe';
  return (
    <MainContent>
      <LeftArrowButton href="/" text={name} />
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
  );
}
