import {
  Divider,
  Flex,
  ModalBody,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';
import api from '../../../networks/api';
import { UserType } from '../../../types/types';
import { SearchModal } from '../modals/searchModal';
import { AccountCard } from '../utils/accountCard';
import { SearchBar } from './searchBar';

export function Search() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [watchedValue, setWatchedValue] = useState('');
  const { searchBarColor } = useCustomColorModeValues();
  const [searchResult, setSearchResult] = useState<UserType[]>([]);

  useEffect(() => {
    if (watchedValue) {
      async function search(keyword: string) {
        const result: UserType[] = await api.SEARCH_USER(keyword);
        console.log(result);
        setSearchResult(result);
      }
      search(watchedValue);
    }
  }, [watchedValue]);

  if (!watchedValue) {
    return (
      <>
        <SearchBar isOpen={isOpen} onOpen={onOpen} />
        <SearchModal
          onValueChange={setWatchedValue}
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
        onValueChange={setWatchedValue}
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
            {searchResult.length >= 1 ? (
              searchResult.map((user) => (
                <>
                  <AccountCard
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
              ))
            ) : (
              <Flex alignItems={'center'} flexDirection={'column'} gap={'5px'}>
                <Text>Sorry We Couldn't Find Person Name</Text>
                <Text>' {watchedValue} '</Text>
              </Flex>
            )}
          </Flex>
        </ModalBody>
      </SearchModal>
    </>
  );
}
