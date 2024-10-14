import { Flex } from '@chakra-ui/react';
import { dummyAccounts } from '../../../data/dummy';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';
import HeadingText from '../../elements/texts/headingText';
import { SuggestionAccountCard } from './suugestionAccountCard';

export function SuggestionCard() {
  const { borderLineColor, baseColor, textColor } = useCustomColorModeValues();
  const users = dummyAccounts;
  return (
    <>
      <Flex
        flexDirection={'column'}
        border={'2px'}
        borderColor={borderLineColor}
        backgroundColor={baseColor}
        borderRadius={'10px'}
        padding={'5%'}
        color={textColor}
        gap={'.7rem'}
      >
        <HeadingText size="lg" textAlign={{ base: 'center', lg: 'left' }}>
          Suggested For You
        </HeadingText>
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
