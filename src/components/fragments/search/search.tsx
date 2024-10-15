import { useDisclosure } from '@chakra-ui/react';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';
import { SearchBar } from './searchBar';
import { SearchModal } from './searchModal';
import { useState } from 'react';

export function Search() {
  useCustomColorModeValues();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [watchedValue, setWatchedValue] = useState('');

  const handleWatchedValueChange = (value: string) => {
    setWatchedValue(value);
  };
  return (
    <>
      <SearchBar isOpen={isOpen} onOpen={onOpen} />
      <SearchModal
        onValueChange={handleWatchedValueChange}
        isOpen={isOpen}
        onClose={onClose}
      >
        <div>{watchedValue}</div>
      </SearchModal>
    </>
  );
}
