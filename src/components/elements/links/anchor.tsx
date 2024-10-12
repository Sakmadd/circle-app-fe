import { Link as ReactLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import React from 'react';

export function Anchor({
  href,
  children,
  thin,
  align,
  color,
}: {
  color?: string;
  align?: string;
  href: string;
  thin?: boolean;
  children: React.ReactNode;
}) {
  return (
    <ChakraLink
      as={ReactLink}
      to={href}
      color={color === undefined ? '#F3C623' : color}
      textAlign={align === 'left' ? 'left' : 'center'}
      {...(thin
        ? {
            fontSize: 'sm',
            fontWeight: 'thin',
          }
        : {
            fontSize: 'sm',
            fontWeight: 'bold',
          })}
    >
      {children}
    </ChakraLink>
  );
}
