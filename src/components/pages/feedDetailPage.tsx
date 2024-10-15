import { dummyDetailFeed } from '../../data/dummy';
import { FeedDataType } from '../../types/types';
import { LeftArrowButton } from '../elements/buttons/leftArrowButton';
import { MainContent } from '../fragments/bars/mainContent';
import { FeedDetail } from '../fragments/feeds/feedDetail';

const onReply: (data: FeedDataType) => Promise<void> | void = () => {};

export function FeedDetailPage() {
  return (
    <>
      <MainContent>
        <LeftArrowButton href="/" text="Post" />
        <FeedDetail feed={dummyDetailFeed} onReply={onReply} />
      </MainContent>
    </>
  );
}
