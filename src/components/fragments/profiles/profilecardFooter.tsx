import { Text, Box } from '@chakra-ui/react';
import GhostButton from '../../elements/buttons/ghostButton';

interface ProfileCardFooterProps {
  totalFollower: number;
  totalFollowing: number;
}

function ProfileCardFooter({
  totalFollower,
  totalFollowing,
}: ProfileCardFooterProps) {
  return (
    <Box display={'flex'} gap={'1rem'} padding={0} justifyContent={'center'}>
      <GhostButton>
        <Text color={'circle.font'}>{totalFollowing}</Text>
        <Text as={'p'} fontWeight={'thin'} ml={'.25rem'} fontSize={'sm'}>
          Following
        </Text>
      </GhostButton>
      {'|'}
      <GhostButton>
        <Text color={'circle.font'}>{totalFollower}</Text>
        <Text as={'p'} fontWeight={'thin'} ml={'.25rem'} fontSize={'sm'}>
          Followers
        </Text>
      </GhostButton>
    </Box>
  );
}

export default ProfileCardFooter;
