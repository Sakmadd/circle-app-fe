import { Flex } from '@chakra-ui/react';
import { UserType } from '../../../types/types';
import { SuggestionAccountCard } from '../suggestions/suugestionAccountCard';

interface AccountListCardProps {
  accounts: UserType[];
}

function AccountListCard({ accounts }: AccountListCardProps) {
  if (accounts.length) {
    return (
      <Flex direction={'column'} gap={'1rem'} padding={'1rem'}>
        {accounts.map((account) => (
          <SuggestionAccountCard
            key={account.id}
            id={account.id}
            username={account.username}
            name={account.name}
            bio={account.bio}
            avatar={account.avatar}
            isFollowed={account.isFollowed}
          />
        ))}
      </Flex>
    );
  }
}

export default AccountListCard;