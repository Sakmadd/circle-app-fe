import {
  Avatar,
  Box,
  Divider,
  Flex,
  Spacer,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { BiImageAdd } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useCustomColorModeValues } from '../../../hooks/useCustomColorModeValues';
import { RootState } from '../../../redux/store';
import { UserType } from '../../../types/types';
import SolidButton from '../../elements/buttons/solidButton';
import { FeedReplyModal } from '../modals/feedReplyModal';

interface FeedReplyProps {
  placeholder: string;
  buttonText?: string;
  imagePreviewId: string;
  modal: boolean;
}

export function FeedReply({
  modal,
  placeholder,
  buttonText,
  imagePreviewId,
}: FeedReplyProps) {
  const location = useLocation();
  const loggedUser: UserType | undefined = useSelector(
    (states: RootState) => states.loggedUser.value
  );
  const { textColor, borderLineColor } = useCustomColorModeValues();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box onClick={onOpen}>
        {location.pathname === '/' && (
          <Text
            fontSize={'2xl'}
            fontWeight={'bold'}
            padding={'1rem'}
            color={textColor}
            display={{ base: 'none', xl: 'block' }}
          >
            Home
          </Text>
        )}
        <Flex margin={'17px'} alignItems={'center'}>
          <Avatar
            src={loggedUser?.avatar}
            marginRight={'20px'}
            width={{ base: '2rem', md: '3rem' }}
            height={{ base: '2rem', md: '3rem' }}
          />

          <Flex alignItems={'center'} gap={'1rem'} width={'100%'}>
            <Flex
              alignItems={'center'}
              gap={'1rem'}
              color={'circle.accent'}
              width={'100%'}
            >
              <Text color={textColor}>{placeholder}</Text>
              <Spacer />
              <Box color={textColor}>
                <BiImageAdd fontSize={'1.5rem'} cursor={'pointer'} />
              </Box>
              <Box>
                <SolidButton
                  fontSize={{ base: '10px', sm: '12px', md: 'md' }}
                  padding={{ base: '1', sm: '3', md: '5' }}
                  text={buttonText ? buttonText : 'Post'}
                />
              </Box>
            </Flex>
          </Flex>
        </Flex>

        <Divider border={'1px'} borderColor={borderLineColor} />
      </Box>
      {modal && (
        <FeedReplyModal
          placeholder={placeholder}
          imagePreviewId={imagePreviewId}
          buttonText={buttonText}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </>
  );
}