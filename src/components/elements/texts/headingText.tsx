import { Heading, HeadingProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface HeadingTextProps extends HeadingProps {
  children: ReactNode;
}

function HeadingText({
  size = 'xl',
  children,
  mb = '0',
  ...rest
}: HeadingTextProps) {
  return (
    <Heading fontWeight="700" fontSize={size} mb={mb} {...rest}>
      {children}
    </Heading>
  );
}

export default HeadingText;
