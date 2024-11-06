import {
  Box,
  Divider,
  Flex,
  Skeleton,
  SkeletonCircle,
  Spacer,
} from '@chakra-ui/react';

export function ProfileSkeleton() {
  return (
    <>
      <Flex gap={'.5rem'} alignItems={'center'} flexDirection={'column'}>
        <Skeleton
          borderRadius={'5px'}
          height={{ base: '30px' }}
          width={{ base: '100px' }}
          variant={'shine'}
          gap={'.5rem'}
          margin={'2rem'}
          alignSelf={'start'}
        />
        <Divider />
        <Box paddingY={'2rem'}>
          <SkeletonCircle size={{ base: '150px' }} variant={'shine'} />
        </Box>
        <Divider />

        <Flex
          flexDirection={'column'}
          gap={'5px'}
          alignItems={'center'}
          padding={'2rem'}
        >
          <Skeleton
            borderRadius={'5px'}
            height={{ base: '30px' }}
            width={{ base: '250px' }}
            variant={'shine'}
            gap={'.5rem'}
          />
          <Skeleton
            borderRadius={'5px'}
            height={{ base: '15px' }}
            width={{ base: '200px' }}
            variant={'shine'}
          />
        </Flex>
        <Flex gap={'.5rem'} alignItems={'center'}>
          <Skeleton
            borderRadius={'5px'}
            height={'30px'}
            width={'70px'}
            variant={'shine'}
          />
          <Skeleton
            borderRadius={'5px'}
            height={'30px'}
            width={'70px'}
            variant={'shine'}
          />
        </Flex>
        <Spacer />
      </Flex>
    </>
  );
}
