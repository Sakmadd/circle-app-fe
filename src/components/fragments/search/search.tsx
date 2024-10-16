import { Divider, Flex, ModalBody, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { dummyUsers } from '../../../data/dummy';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';
import { SearchModal } from '../modals/searchModal';
import { SuggestionAccountCard } from '../suggestions/suugestionAccountCard';
import { SearchBar } from './searchBar';

export function Search() {
  useCustomColorModeValues();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [watchedValue, setWatchedValue] = useState('');
  const { searchBarColor } = useCustomColorModeValues();
  const handleWatchedValueChange = (value: string) => {
    setWatchedValue(value);
  };
  if (!watchedValue) {
    return (
      <>
        <SearchBar isOpen={isOpen} onOpen={onOpen} />
        <SearchModal
          onValueChange={handleWatchedValueChange}
          isOpen={isOpen}
          onClose={onClose}
        ></SearchModal>
      </>
    );
  }
  return (
    <>
      <SearchBar isOpen={isOpen} onOpen={onOpen} />
      <SearchModal
        onValueChange={handleWatchedValueChange}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalBody
          backgroundColor={searchBarColor}
          padding={'1rem'}
          margin={'10px'}
          borderRadius={'5px'}
        >
          <Flex gap={'10px'} flexDirection={'column'} padding={'5px'}>
            {dummyUsers.map((user) => (
              <>
                <SuggestionAccountCard
                  key={user.id}
                  id={user.id}
                  username={user.username}
                  name={user.name}
                  bio={user.bio}
                  avatar={user.avatar}
                  isFollowed={user.isFollowed}
                />
                <Divider />
              </>
            ))}
          </Flex>
        </ModalBody>
      </SearchModal>
    </>
  );
}
