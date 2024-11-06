import { Flex, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

export function FeedListSkeleton() {
  return (
    <>
      <Flex padding={'1rem'} gap={'1rem'}>
        <SkeletonCircle size={{ base: '40px', md: '60px' }} variant={'shine'} />
        <Flex flexDirection={'column'} gap={'.5rem'}>
          <SkeletonText
            width={{ base: '150px', sm: '250px' }}
            noOfLines={1}
            variant={'shine'}
          />
          <SkeletonText
            width={{ base: '100px' }}
            noOfLines={1}
            variant={'shine'}
          />
          <Skeleton
            height={{ base: '200px', md: '250px' }}
            width={{ base: '250px', md: '600px', lg: '400px', xl: '530px' }}
            variant={'shine'}
          />
        </Flex>
      </Flex>
      <Flex padding={'1rem'} gap={'1rem'}>
        <SkeletonCircle size={{ base: '40px', md: '60px' }} variant={'shine'} />
        <Flex flexDirection={'column'} gap={'.5rem'}>
          <SkeletonText
            width={{ base: '150px', sm: '250px' }}
            noOfLines={1}
            variant={'shine'}
          />
          <SkeletonText
            width={{ base: '100px' }}
            noOfLines={1}
            variant={'shine'}
          />
          <Skeleton
            height={{ base: '200px', md: '250px' }}
            width={{ base: '250px', md: '600px', lg: '400px', xl: '530px' }}
            variant={'shine'}
          />
        </Flex>
      </Flex>
    </>
  );
}
