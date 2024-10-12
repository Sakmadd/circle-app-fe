import { Flex, Text } from '@chakra-ui/react';

interface EmptyMessageProps {
  header?: string;
  body?: string;
}

export function EmptyMessage({ header, body }: EmptyMessageProps) {
  return (
    <Flex direction={'column'} alignItems={'center'} mt={'3rem'} width={'100%'}>
      {header && (
        <Text fontSize={'lg'} fontWeight={'600'} color={'circle.dark'}>
          {header}
        </Text>
      )}
      {body && (
        <Text fontSize={'md'} color={'circle.dark'}>
          {body}
        </Text>
      )}
    </Flex>
  );
}
