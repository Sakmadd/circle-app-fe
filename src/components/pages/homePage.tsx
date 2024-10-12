import { Grid, GridItem } from '@chakra-ui/react';
import { SideBar } from '../fragments/bars/sideBar';
import { FeedsBar } from '../fragments/bars/feedsBar';

function HomePage() {
  return (
    <Grid templateColumns={'repeat(19, 1fr)'}>
      <GridItem colSpan={12}>
        <FeedsBar>
          <div>FeedsBar</div>
        </FeedsBar>
      </GridItem>
      <GridItem colSpan={7}>
        <SideBar>
          <div>SideBar</div>
        </SideBar>
      </GridItem>
    </Grid>
  );
}

export default HomePage;
