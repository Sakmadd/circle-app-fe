import { Flex, GridItem } from '@chakra-ui/react';
import ProfileCard from '../profiles/profileCard';
import { SuggestionCard } from '../suggestions/suggestionCard';
import { DevCard } from '../devCards/devCard';

export function UserPreferences() {
  return (
    <>
      <GridItem
        colSpan={{ lg: 3, xl: 4 }}
        display={{ base: 'none', lg: 'block' }}
      >
        <Flex direction={'column'} gap={'1rem'} pos={'fixed'} padding={'1rem'}>
          <ProfileCard />
          <SuggestionCard />
          <DevCard />
        </Flex>
      </GridItem>
    </>
  );
}
