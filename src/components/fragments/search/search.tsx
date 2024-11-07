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
import { AccountCardSkeleton } from '../skeleton/accountCardSkeleton';

export function Search() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [watchedValue, setWatchedValue] = useState('');
  const { searchBarColor } = useCustomColorModeValues();
  const [searchResult, setSearchResult] = useState<UserType[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (watchedValue) {
      setIsFetching(true);
      async function search(keyword: string) {
        const result: UserType[] = await api.SEARCH_USER(keyword);
        setSearchResult(result);
        setIsFetching(false);
      }
      search(watchedValue);
    } else {
      setSearchResult([]);
    }
  }, [watchedValue]);

  return (
    <>
      <SearchBar isOpen={isOpen} onOpen={onOpen} />
      <SearchModal
        onValueChange={setWatchedValue}
        isOpen={isOpen}
        onClose={onClose}
      >
        {watchedValue && (
          <ModalBody
            backgroundColor={searchBarColor}
            padding={'1rem'}
            margin={'10px'}
            borderRadius={'5px'}
          >
            <Flex gap={'10px'} flexDirection={'column'} padding={'5px'}>
              {isFetching ? (
                <Flex flexDirection={'column'} gap={'1rem'}>
                  <AccountCardSkeleton />
                </Flex>
              ) : searchResult.length === 0 ? (
                <Flex
                  alignItems={'center'}
                  flexDirection={'column'}
                  gap={'5px'}
                >
                  <Text>Sorry, we couldn't find that user</Text>
                  <Text>' {watchedValue} '</Text>
                </Flex>
              ) : (
                searchResult.map((user) => (
                  <div key={user.id}>
                    <AccountCard
                      id={user.id}
                      username={user.username}
                      name={user.name}
                      bio={user.bio}
                      avatar={user.avatar}
                      isFollowed={user.isFollowed}
                    />
                    <Divider />
                  </div>
                ))
              )}
            </Flex>
          </ModalBody>
        )}
      </SearchModal>
    </>
  );
}
