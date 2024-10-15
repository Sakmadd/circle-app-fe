import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { TopBar } from '../components/fragments/bars/topBar';
import { Navigation } from '../components/fragments/navigations/navigation';
import { UserPreferences } from '../components/fragments/userPreferences/userPreferences';
import { useCustomColorModeValues } from '../hooks/useCustomColorModeValues';

export function CircleLayout() {
  const { baseColor } = useCustomColorModeValues();
  return (
    <>
      <Box backgroundColor={baseColor}>
        <TopBar />
        <Grid templateColumns={'repeat(25, 1fr)'}>
          <GridItem colSpan={5} display={{ base: 'none', xl: 'block' }}>
            <Navigation />
          </GridItem>
          <GridItem colSpan={{ base: 245, lg: 16, xl: 14 }}>
            <Outlet />
          </GridItem>
          <GridItem
            colSpan={{ lg: 4, xl: 4 }}
            display={{ base: 'none', lg: 'block' }}
          >
            <UserPreferences />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
