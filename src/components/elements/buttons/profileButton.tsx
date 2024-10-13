import { Avatar } from '@chakra-ui/react';
import GhostButton from './ghostButton';

export function ProfileButton() {
  return (
    <>
      <GhostButton>
        <Avatar src="bro" width={'2rem'} height={'2rem'} />
      </GhostButton>
    </>
  );
}
