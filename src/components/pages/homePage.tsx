import { MainContent } from '../fragments/bars/mainContent';
import FeedList from '../fragments/feeds/feedList';
import { FeedPost } from '../fragments/feeds/feedPost';
import { dummyFeed } from '../../data/dummy';

function HomePage() {
  return (
    <MainContent>
      <FeedPost
        placeholder={"What's on your mind?"}
        imagePreviewId={'atHome'}
      />
      <FeedList feed={dummyFeed} />
    </MainContent>
  );
}

export default HomePage;
