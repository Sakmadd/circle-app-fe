import { Flex, useColorModeValue } from '@chakra-ui/react';
import HeadingText from '../../elements/texts/headingText';
import { SuggestionAccountCard } from './suugestionAccountCard';
import { dummyAccounts } from '../../../data/dummy';

export function SuggestionCard() {
  const borderBaseDarker = useColorModeValue('day.baseDarker', 'transparent');
  const bgBaseDarker = useColorModeValue('transparent', 'night.baseDarker');
  const border = useColorModeValue('2px', '0px');

  const fontColor = useColorModeValue('day.text', 'night.text');
  const users = dummyAccounts;
  return (
    <>
      <Flex
        flexDirection={'column'}
        border={border}
        borderColor={borderBaseDarker}
        backgroundColor={bgBaseDarker}
        borderRadius={'10px'}
        padding={'5%'}
        color={fontColor}
        gap={'.7rem'}
      >
        <HeadingText size="lg">Suggested For You</HeadingText>
        <Flex
          flexDirection={'column'}
          gap={'1rem'}
          maxHeight={'200px'}
          overflow={'auto'}
          sx={{
            '&::-webkit-scrollbar': {
              width: '2px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#888',
              borderRadius: '24px',
            },
          }}
        >
          {users.map((user) => (
            <SuggestionAccountCard
              key={user.id}
              id={user.id}
              username={user.username}
              name={user.name}
              bio={user.bio}
              avatar={user.avatar}
              isFollowed={user.isFollowed}
              noBio
            />
          ))}
        </Flex>
      </Flex>
    </>
  );
}
