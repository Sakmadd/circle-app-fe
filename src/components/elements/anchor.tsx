import { Link as ReactLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import React from 'react';

export function Anchor({
  href,
  children,
  thin,
}: {
  href: string;
  thin?: boolean;
  children: React.ReactNode;
}) {
  return (
    <ChakraLink
      as={ReactLink}
      to={href}
      {...(thin
        ? {
            fontSize: 'sm',
            fontWeight: 'thin',
            textAlign: 'center',
            color: '#000',
          }
        : {
            fontSize: 'sm',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#F3C623',
          })}
    >
      {children}
    </ChakraLink>
  );
}
