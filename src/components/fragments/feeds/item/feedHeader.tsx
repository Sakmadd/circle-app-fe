import {
  CardHeader,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { UserType } from '../../../../types/types';
import GhostButton from '../../../elements/buttons/ghostButton';
import { dateFormatter } from '../../../../utils/dateFormater';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { FeedButton } from './feedButton';

interface FeedHeaderProps {
  name: string;
  username: string;
  date: string;
  author: UserType;
  feedId: number;
  isReply?: boolean;
  repliesTarget?: boolean;
  authorId: number;
}

export function FeedHeader({ name, username, date }: FeedHeaderProps) {
  return (
    <>
      <CardHeader
        display={'flex'}
        gap={'.5rem'}
        alignItems={'center'}
        padding={0}
        paddingBottom={'.5rem'}
      >
        <GhostButton onClick={() => null}>
          <Text
            fontSize={'sm'}
            color={'circle.font'}
            mr={'.5rem'}
            fontWeight={'700'}
          >
            {name}
          </Text>
          <Text fontSize={'sm'} color={'circle.dark'}>
            {username}
          </Text>
        </GhostButton>
        <Text fontSize={'sm'} color={'circle.dark'}>
          &#8226; {dateFormatter(date)}
        </Text>
        <Spacer />
        <Menu>
          <MenuButton
            as={FeedButton}
            color={'circle.dark'}
            icon={<BiDotsVerticalRounded fontSize={'1.5rem'} />}
            hoverColor={'circle.accent'}
            ml={'.5rem'}
            atLeft
          ></MenuButton>
          <MenuList bg={'circle.darker'} border={0}>
            <MenuItem
              bg={'circle.darker'}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              Delete
            </MenuItem>
          </MenuList>
        </Menu>
      </CardHeader>
    </>
  );
}
