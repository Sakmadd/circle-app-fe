import { Flex, Text, Image } from '@chakra-ui/react';
import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoInstagram,
  BiLogoTwitter,
} from 'react-icons/bi';
import GhostButton from '../../elements/buttons/ghostButton';
import { CardContainer } from '../utils/cardContainer';

export function DevCard() {
  return (
    <CardContainer>
      <Flex
        color={'circle.dark'}
        alignItems={'center'}
        gap={'.25rem'}
        mb={'.25rem'}
      >
        <Text color={'circle.font'} fontSize={'sm'}>
          Developed by <strong>Ahmad Safi'i</strong>
        </Text>
        <Text color={'circle.dark'} fontSize={'sm'}>
          •
        </Text>
        <GhostButton color="circle.dark">
          <BiLogoGithub fontSize={'xl'} />
        </GhostButton>
        <GhostButton color="circle.dark">
          <BiLogoLinkedinSquare fontSize={'xl'} />
        </GhostButton>
        <GhostButton color="circle.dark">
          <BiLogoInstagram fontSize={'xl'} />
        </GhostButton>
        <GhostButton color="circle.dark">
          <BiLogoTwitter fontSize={'xl'} />
        </GhostButton>
      </Flex>
      <Flex color={'circle.dark'} fontSize={'xs'} alignItems={'center'}>
        Powered by
        <Image
          src={'/src/assets/logo-dw.svg'}
          boxSize={'1.5rem'}
          display={'inline'}
          mx=".5rem"
        />
        DumbWays Indonesia
      </Flex>
    </CardContainer>
  );
}
