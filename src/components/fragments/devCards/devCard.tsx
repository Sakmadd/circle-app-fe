import { Flex, Text, Image } from '@chakra-ui/react';
import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoInstagram,
  BiLogoTwitter,
} from 'react-icons/bi';
import GhostButton from '../../elements/buttons/ghostButton';
import { CardContainer } from '../utils/cardContainer';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';

export function DevCard() {
  const { textColor } = useCustomColorModeValues();

  return (
    <CardContainer>
      <Flex
        color={textColor}
        alignItems={'center'}
        gap={'.25rem'}
        mb={'.25rem'}
      >
        <Text color={'circle.font'} fontSize={'sm'}>
          Developed by <strong>Ahmad Safi'i</strong>
        </Text>
        <Text color={textColor} fontSize={'sm'}>
          •
        </Text>
        <GhostButton color={textColor}>
          <BiLogoGithub fontSize={'xl'} />
        </GhostButton>
        <GhostButton color={textColor}>
          <BiLogoLinkedinSquare fontSize={'xl'} />
        </GhostButton>
        <GhostButton color={textColor}>
          <BiLogoInstagram fontSize={'xl'} />
        </GhostButton>
        <GhostButton color={textColor}>
          <BiLogoTwitter fontSize={'xl'} />
        </GhostButton>
      </Flex>
      <Flex color={textColor} fontSize={'xs'} alignItems={'center'}>
        Powered by
        <Image
          src={'/assets/logo-dw.svg'}
          boxSize={'1.5rem'}
          display={'inline'}
          mx=".5rem"
        />
        DumbWays Indonesia
      </Flex>
    </CardContainer>
  );
}
