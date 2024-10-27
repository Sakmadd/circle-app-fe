import { Params, useParams } from 'react-router-dom';
import { useReplies } from '../../hooks/useReplies';
import { LeftArrowButton } from '../elements/buttons/leftArrowButton';
import { MainContent } from '../fragments/bars/mainContent';
import { FeedDetail } from '../fragments/feeds/feedDetail';

export function FeedDetailPage() {
  const { id }: Readonly<Params<string>> = useParams();
  const targetId = id ? +id : NaN;
  const { feed } = useReplies(targetId);

  if (feed) {
    return (
      <>
        <MainContent>
          <LeftArrowButton href="/" text="Post" />
          <FeedDetail feed={feed} />
        </MainContent>
      </>
    );
  }

  return (
    <>
      <MainContent>
        <LeftArrowButton href="/" text="Post" />
      </MainContent>
    </>
  );
}
