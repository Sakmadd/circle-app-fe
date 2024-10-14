import { Button, ButtonProps } from '@chakra-ui/react';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';
import { transparentHover } from '../../../styles/style';

interface SolidButtonProps extends ButtonProps {
  text: string;
}

function SolidButton({ onClick, text, ...props }: SolidButtonProps) {
  const { accentTextColor } = useCustomColorModeValues();

  return (
    <Button
      onClick={onClick}
      backgroundColor={'accent.base'}
      _hover={transparentHover}
      color={accentTextColor}
      {...props}
    >
      {text}
    </Button>
  );
}

export default SolidButton;
