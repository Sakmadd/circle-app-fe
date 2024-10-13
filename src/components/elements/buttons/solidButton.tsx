import { Button, ButtonProps, useColorModeValue } from '@chakra-ui/react';
import { transparentHover } from '../../../styles/style';

interface SolidButtonProps extends ButtonProps {
  text: string;
}

function SolidButton({ onClick, text, ...props }: SolidButtonProps) {
  const fontColor = useColorModeValue('white', 'black');
  return (
    <Button
      onClick={onClick}
      backgroundColor={'accent.base'}
      _hover={transparentHover}
      color={fontColor}
      {...props}
    >
      {text}
    </Button>
  );
}

export default SolidButton;
