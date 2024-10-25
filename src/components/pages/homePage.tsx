import { useEffect, useState } from 'react';
import { useFeeds } from '../../hooks/useFeeds';
import { FeedType } from '../../types/types';
import { MainContent } from '../fragments/bars/mainContent';
import { FeedPost } from '../fragments/feeds/feedPost';
import FeedList from '../fragments/feeds/item/feedList';

function HomePage() {
  const [preparedFeeds, setPreparedFeeds] = useState<FeedType[]>([]);
  const { feeds, onPost } = useFeeds();

  useEffect(() => {
    setPreparedFeeds(() => {
      if (feeds) {
        return feeds;
      }
      return [];
    });
  }, [feeds]);

  return (
    <MainContent>
      <FeedPost
        onPost={onPost}
        modal={true}
        placeholder={"What's on your mind?"}
        imagePreviewId={'atHome'}
      />
      <FeedList feeds={preparedFeeds} />
    </MainContent>
  );
}

export default HomePage;
