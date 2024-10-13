import { ButtonProps, Button } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { transparentHover } from '../../../styles/style';

interface GhostButtonProps extends ButtonProps {
  children: ReactNode;
  onTop?: boolean;
}

function GhostButton({ children, onTop, ...props }: GhostButtonProps) {
  return (
    <Button
      pos={'relative'}
      padding={0}
      height={'auto'}
      width={'auto'}
      variant={'ghost'}
      display={'flex'}
      alignItems={onTop ? 'start' : 'center'}
      justifyContent={'start'}
      minWidth={'none'}
      minHeight={'none'}
      _hover={transparentHover}
      {...props}
    >
      {children}
    </Button>
  );
}

export default GhostButton;
