import {
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Spacer,
} from '@chakra-ui/react';

export function AccountCardSkeleton() {
  return (
    <>
      <Flex gap={'.5rem'} alignItems={'center'}>
        <SkeletonCircle size={{ base: '40px' }} variant={'shine'} />
        <Flex flexDirection={'column'} gap={'5px'}>
          <SkeletonText
            width={{ base: '50px' }}
            noOfLines={1}
            variant={'shine'}
          />
          <SkeletonText
            width={{ base: '90px' }}
            noOfLines={1}
            variant={'shine'}
          />
        </Flex>
        <Spacer />
        <Skeleton
          borderRadius={'5px'}
          height={{ base: '30px' }}
          width={{ base: '50px' }}
          variant={'shine'}
        />
      </Flex>
      <Flex gap={'.5rem'} alignItems={'center'}>
        <SkeletonCircle size={{ base: '40px' }} variant={'shine'} />
        <Flex flexDirection={'column'} gap={'5px'}>
          <SkeletonText
            width={{ base: '50px' }}
            noOfLines={1}
            variant={'shine'}
          />
          <SkeletonText
            width={{ base: '90px' }}
            noOfLines={1}
            variant={'shine'}
          />
        </Flex>
        <Spacer />
        <Skeleton
          borderRadius={'5px'}
          height={{ base: '30px' }}
          width={{ base: '50px' }}
          variant={'shine'}
        />
      </Flex>
      <Flex gap={'.5rem'} alignItems={'center'}>
        <SkeletonCircle size={{ base: '40px' }} variant={'shine'} />
        <Flex flexDirection={'column'} gap={'5px'}>
          <SkeletonText
            width={{ base: '50px' }}
            noOfLines={1}
            variant={'shine'}
          />
          <SkeletonText
            width={{ base: '90px' }}
            noOfLines={1}
            variant={'shine'}
          />
        </Flex>
        <Spacer />
        <Skeleton
          borderRadius={'5px'}
          height={{ base: '30px' }}
          width={{ base: '50px' }}
          variant={'shine'}
        />
      </Flex>
    </>
  );
}
