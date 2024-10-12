import { Button, useColorModeValue } from '@chakra-ui/react';
import { transparentHover } from '../../../styles/style';

interface SolidButtonProps {
  onClick?: () => void;
  text: string;
}

function SolidButton({ onClick, text }: SolidButtonProps) {
  const fontColor = useColorModeValue('white', 'black');
  return (
    <Button
      onClick={onClick}
      backgroundColor={'accent.base'}
      _hover={transparentHover}
      color={fontColor}
    >
      {text}
    </Button>
  );
}

export default SolidButton;
