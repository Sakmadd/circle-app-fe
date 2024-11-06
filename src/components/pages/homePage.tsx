import { useEffect, useState } from 'react';
import { useFeeds } from '../../hooks/useFeeds';
import { FeedType } from '../../types/types';
import { MainContent } from '../fragments/bars/mainContent';
import { FeedPost } from '../fragments/feeds/feedPost';
import FeedList from '../fragments/feeds/item/feedList';

function HomePage() {
  const [preparedFeeds, setPreparedFeeds] = useState<FeedType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { feeds, onPost } = useFeeds();

  useEffect(() => {
    if (feeds) {
      setPreparedFeeds(feeds);
      setIsLoading(false);
    }
  }, [feeds]);

  return (
    <MainContent>
      <FeedPost
        onPost={onPost}
        modal={true}
        placeholder={"What's on your mind?"}
        imagePreviewId={'atHome'}
      />
      <FeedList feeds={preparedFeeds} isLoading={isLoading} />{' '}
    </MainContent>
  );
}

export default HomePage;
