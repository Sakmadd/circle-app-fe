import { Button } from '@chakra-ui/react';

interface SolidButtonProps {
  onClick?: () => void;
  text: string;
  py?: string;
}

function SolidButton({ onClick, text }: SolidButtonProps) {
  return (
    <Button onClick={onClick} colorScheme="yellow" color={'white'}>
      {text}
    </Button>
  );
}

export default SolidButton;
