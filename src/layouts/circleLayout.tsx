import { Box, Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { Navigation } from '../components/fragments/navigations/navigation';
import { TopBar } from '../components/fragments/bars/topBar';
import { UserPreferences } from '../components/fragments/userPreferences/userPreferences';

export function CircleLayout() {
  const bgColor = useColorModeValue('day.base', 'night.base');

  return (
    <>
      <Box backgroundColor={bgColor}>
        <TopBar />
        <Grid templateColumns={'repeat(24, 1fr)'}>
          <GridItem colSpan={4}>
            <Navigation />
          </GridItem>
          <GridItem colSpan={14}>
            <Outlet />
          </GridItem>
          <GridItem colSpan={3}>
            <UserPreferences />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
