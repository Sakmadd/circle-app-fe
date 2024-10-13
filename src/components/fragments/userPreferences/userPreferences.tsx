import { Flex } from '@chakra-ui/react';
import { DevCard } from '../devCards/devCard';
import ProfileCard from '../profiles/profileCard';
import { SuggestionCard } from '../suggestions/suggestionCard';

export function UserPreferences() {
  return (
    <>
      <Flex direction={'column'} gap={'1rem'} pos={'fixed'} padding={'1rem'}>
        <ProfileCard />
        <SuggestionCard />
        <DevCard />
      </Flex>
    </>
  );
}
