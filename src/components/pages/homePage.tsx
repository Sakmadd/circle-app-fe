import { MainContent } from '../fragments/bars/mainContent';
import { FeedPost } from '../fragments/feeds/feedPost';

function HomePage() {
  return (
    <MainContent>
      <FeedPost
        placeholder={"What's on your mind?"}
        imagePreviewId={'atHome'}
      />
    </MainContent>
  );
}

export default HomePage;
