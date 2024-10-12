import { Flex } from '@chakra-ui/react';
import ProfileCard from '../profiles/profileCard';
import { SuggestionCard } from '../suggestions/suggestionCard';
import { DevCard } from '../devCards/devCard';

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
