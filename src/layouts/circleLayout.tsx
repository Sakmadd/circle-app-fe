import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { Navigation } from '../components/fragments/navigations/navigation';
import { SideBar } from '../components/fragments/bars/sideBar';

export function CircleLayout() {
  return (
    <Grid templateColumns={'repeat(24, 1fr)'}>
      <GridItem colSpan={5}>
        <SideBar>
          <Navigation />
        </SideBar>
      </GridItem>
      <GridItem colSpan={19}>
        <Outlet />
      </GridItem>
    </Grid>
  );
}
