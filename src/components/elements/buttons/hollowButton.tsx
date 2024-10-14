import { Button } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';

interface HollowButtonProps {
  onClick?: () => void;
  text?: string;
  dark?: boolean;
  children?: ReactNode;
}

function HollowButton({ onClick, text, dark, children }: HollowButtonProps) {
  const { borderLineColor } = useCustomColorModeValues();

  if (text == 'Following') {
    return (
      <Button
        onClick={onClick}
        variant={'outline'}
        borderRadius={'lg'}
        border={'2px'}
        borderColor={borderLineColor}
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
      borderColor={borderLineColor}
      fontSize={'xs'}
      color={dark ? 'circle.dark' : 'circle.font'}
    >
      {text}
      {children}
    </Button>
  );
}

export default HollowButton;
