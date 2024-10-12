import { Button, useColorModeValue } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface HollowButtonProps {
  onClick?: () => void;
  text?: string;
  dark?: boolean;
  children?: ReactNode;
}

function HollowButton({ onClick, text, dark, children }: HollowButtonProps) {
  const bdColor = useColorModeValue('day.baseDarker', 'night.line');
  if (text == 'Following') {
    return (
      <Button
        onClick={onClick}
        variant={'outline'}
        borderRadius={'lg'}
        border={'2px'}
        borderColor={bdColor}
        fontSize={'xs'}
        color={dark ? 'circle.dark' : 'circle.font'}
        opacity={'.4'}
        cursor={'default'}
        pointerEvents={'none'}
      >
        {text}
        {children}
      </Button>
    );
  }

  return (
    <Button
      onClick={onClick}
      variant={'outline'}
      borderRadius={'lg'}
      border={'2px'}
      borderColor={bdColor}
      fontSize={'xs'}
      color={dark ? 'circle.dark' : 'circle.font'}
    >
      {text}
      {children}
    </Button>
  );
}

export default HollowButton;
