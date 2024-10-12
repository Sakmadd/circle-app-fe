import { Text, Flex } from '@chakra-ui/react';
import { Anchor } from '../../elements/links/anchor';

interface ProfileCardBodyProps {
  username: string;
  name: string;
  bio: string | null;
}

function ProfileCardBody({ username, name, bio }: ProfileCardBodyProps) {
  return (
    <Flex flexDirection={'column'} paddingY={'15px'} textAlign={'center'}>
      <Text as={'h1'} fontWeight={'700'} fontSize={'2xl'}>
        {name}
      </Text>
      <Anchor href="#" children={'@' + username} align={'center'} thin={true} />
      {bio && <Text fontSize={'sm'}>{bio}</Text>}
    </Flex>
  );
}

export default ProfileCardBody;
