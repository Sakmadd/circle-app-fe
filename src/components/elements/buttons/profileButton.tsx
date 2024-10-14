import { Avatar, ButtonProps } from '@chakra-ui/react';
import GhostButton from './ghostButton';

export function ProfileButton(props: ButtonProps) {
  return (
    <GhostButton {...props}>
      <Avatar src="bro" width={'2rem'} height={'2rem'} />
    </GhostButton>
  );
}
