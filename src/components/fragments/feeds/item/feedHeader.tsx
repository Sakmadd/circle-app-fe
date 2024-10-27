import {
  CardHeader,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { UserType } from '../../../../types/types';
import { dateFormatter } from '../../../../utils/dateFormater';
import GhostButton from '../../../elements/buttons/ghostButton';
import { FeedButton } from './feedButton';
import { useCustomColorModeValues } from '../../../../hooks/useCustomColorModeValues';
import { useNavigate } from 'react-router-dom';
import { useFeeds } from '../../../../hooks/useFeeds';
import { useReplies } from '../../../../hooks/useReplies';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

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

export function FeedHeader({
  name,
  username,
  date,
  feedId,
  repliesTarget,
  isReply,
  authorId,
}: FeedHeaderProps) {
  const loggedUser = useSelector((state: RootState) => state.loggedUser.value);
  const navigate = useNavigate();
  const { onDelete: feedOnDelete } = useFeeds();
  const { onDelete: replyOnDelete } = useReplies(feedId);

  const { textColor } = useCustomColorModeValues();

  return (
    <>
      <CardHeader
        display={'flex'}
        gap={'.5rem'}
        alignItems={'center'}
        padding={0}
        paddingBottom={'.5rem'}
      >
        <GhostButton onClick={() => navigate(`/user/${authorId}`)}>
          <Text
            fontSize={'sm'}
            color={textColor}
            mr={'.5rem'}
            fontWeight={'700'}
          >
            {name}
          </Text>
          <Text fontSize={'sm'} color={textColor}>
            {username}
          </Text>
        </GhostButton>
        <Text fontSize={'sm'} color={textColor}>
          &#8226; {dateFormatter(date)}
        </Text>
        <Spacer />
        <Menu>
          <MenuButton
            as={FeedButton}
            color={textColor}
            icon={<BiDotsVerticalRounded fontSize={'1.5rem'} />}
            hoverColor={'circle.accent'}
            ml={'.5rem'}
            atLeft
          />
          <MenuList bg={'circle.darker'} border={0}>
            {authorId === loggedUser!.id && (
              <MenuItem
                bg={'circle.darker'}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (repliesTarget) {
                    navigate('/');
                    return feedOnDelete(feedId);
                  }
                  if (isReply) {
                    return replyOnDelete(feedId);
                  }
                  return feedOnDelete(feedId);
                }}
              >
                Delete
              </MenuItem>
            )}
          </MenuList>
        </Menu>
      </CardHeader>
    </>
  );
}
