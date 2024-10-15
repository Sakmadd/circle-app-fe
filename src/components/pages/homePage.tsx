import { dummyFeeds } from '../../data/dummy';
import { FeedDataType } from '../../types/types';
import { MainContent } from '../fragments/bars/mainContent';
import { FeedPost } from '../fragments/feeds/feedPost';
import FeedList from '../fragments/feeds/item/feedList';

const onPost: (data: FeedDataType) => Promise<void> | void = () => {};
function HomePage() {
  return (
    <MainContent>
      <FeedPost
        onPost={onPost}
        modal={true}
        placeholder={"What's on your mind?"}
        imagePreviewId={'atHome'}
      />
      <FeedList feeds={dummyFeeds} />
    </MainContent>
  );
}

export default HomePage;
