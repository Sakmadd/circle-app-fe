import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';

interface SearchBarProps {
  isOpen: boolean;
  onOpen: () => void;
}

export function SearchBar({ isOpen, onOpen }: SearchBarProps) {
  const { baseColor, searchBarColor } = useCustomColorModeValues();

  return (
    <>
      <InputGroup
        maxWidth={'500px'}
        margin={'auto'}
        pos={'relative'}
        opacity={isOpen ? '0' : '1'}
      >
        <InputLeftElement pointerEvents="none">
          <FiSearch color={baseColor} />
        </InputLeftElement>
        <Input
          variant={'unstyled'}
          borderRadius={'full'}
          width={'100%'}
          height={'40px'}
          fontSize={{ base: '10px', md: '14px' }}
          type="tel"
          placeholder="Search"
          focusBorderColor="grey"
          backgroundColor={searchBarColor}
          readOnly
          onClick={onOpen}
        />
      </InputGroup>
    </>
  );
}
