import { Text, Button, Box } from '@chakra-ui/react';
import { forwardRef, ReactNode } from 'react';

interface FeedButtonProps {
  onClick?: () => void;
  icon: ReactNode;
  value?: number;
  color?: string;
  hoverColor?: string;
  atLeft?: boolean;
  ml?: string;
}

export const FeedButton = forwardRef<HTMLButtonElement, FeedButtonProps>(
  ({ icon, value, color, hoverColor, atLeft, ml, onClick }, ref) => {
    function onClickHandler(
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void {
      e.stopPropagation();
      e.preventDefault();

      if (onClick) onClick();
    }

    return (
      <Button
        ref={ref}
        variant={'ghost'}
        display={'flex'}
        justifyContent={atLeft ? 'flex-end' : 'center'}
        alignItems={'center'}
        gap={atLeft ? 0 : '.5rem'}
        minWidth={0}
        color={color}
        padding={0}
        zIndex={1}
        ml={ml && ml}
        height={atLeft ? 0 : 'auto'}
        _hover={{ color: hoverColor, background: 'transparent' }}
        onClick={(e) => onClickHandler(e)}
      >
        <Box fontSize={'lg'}>{icon}</Box>
        <Text color={'circle.dark'} fontSize={'sm'} fontWeight={'400'}>
          {value}
        </Text>
      </Button>
    );
  }
);
