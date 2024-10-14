import { Link as ReactLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import React from 'react';

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  anchor?: boolean;
}

export function Anchor({ href, children, anchor, ...props }: AnchorProps) {
  return (
    <ChakraLink
      as={ReactLink}
      to={href}
      color={'accent.base'}
      textDecoration={anchor ? 'underline' : 'none'}
      {...props}
    >
      {children}
    </ChakraLink>
  );
}
