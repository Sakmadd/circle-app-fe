import { Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface HeadingTextProps {
  size?: string;
  align?: string;
  children: ReactNode;
  mb?: string | number;
}

function HeadingText({
  size = 'xl',
  children,
  mb = '0',
  align,
}: HeadingTextProps) {
  return (
    <Heading
      textAlign={align === undefined ? 'left' : 'center'}
      fontWeight={'700'}
      fontSize={size}
      mb={mb}
    >
      {children}
    </Heading>
  );
}

export default HeadingText;
