import { Box, Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { TopBar } from '../components/fragments/bars/topBar';
import { Navigation } from '../components/fragments/navigations/navigation';
import { UserPreferences } from '../components/fragments/userPreferences/userPreferences';

export function CircleLayout() {
  const bgColor = useColorModeValue('day.base', 'night.base');

  return (
    <>
      <Box backgroundColor={bgColor}>
        <TopBar />
        <Grid templateColumns={'repeat(24, 1fr)'}>
          <Navigation />
          <GridItem colSpan={{ base: 24, lg: 17, xl: 14 }}>
            <Outlet />
          </GridItem>
          <UserPreferences />
        </Grid>
      </Box>
    </>
  );
}
