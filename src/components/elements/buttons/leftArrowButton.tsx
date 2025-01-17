import { Box, BoxProps, Flex, Text } from '@chakra-ui/react';
import { Anchor } from '../links/anchor';
import { FaArrowLeft } from 'react-icons/fa';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';

interface BackButtonProps extends BoxProps {
  onclick?: () => void;
  text?: string;
  href?: string;
}

export function LeftArrowButton({
  text,
  href,
  onclick,
  ...props
}: BackButtonProps) {
  const { textColor } = useCustomColorModeValues();
  return (
    <>
      <Flex
        gap={'1rem'}
        alignItems={'center'}
        margin={'1rem'}
        onClick={onclick}
        {...props}
      >
        <Box marginY={'auto'} cursor={'pointer'} fontSize={'2xl'}>
          <Anchor href={href}>
            <FaArrowLeft></FaArrowLeft>
          </Anchor>
        </Box>
        {text && (
          <Text fontWeight={'bold'} fontSize={'xl'} color={textColor}>
            {text}
          </Text>
        )}
      </Flex>
    </>
  );
}
