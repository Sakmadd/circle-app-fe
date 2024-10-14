import { Box, Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { useState } from 'react';
import { TopBar } from '../components/fragments/bars/topBar';
import { NavigationMobile } from '../components/fragments/mobile/navigationMobile';
import { UserPreferencesMobile } from '../components/fragments/mobile/userPreferencesMobile';
import { Navigation } from '../components/fragments/navigations/navigation';
import { UserPreferences } from '../components/fragments/userPreferences/userPreferences';

export function CircleLayout() {
  const bgColor = useColorModeValue('day.base', 'night.base');
  const [showNavigation, setNavigation] = useState(false);
  const [showPreferences, setPreferences] = useState(false);

  function toggleMenu() {
    setNavigation(!showNavigation);
  }
  function togglePreferences() {
    setPreferences(!showPreferences);
  }

  return (
    <>
      <UserPreferencesMobile showPreferencesMobile={showPreferences} />
      <NavigationMobile showNavigationMobile={showNavigation} />
      <Box backgroundColor={bgColor}>
        <TopBar togglePreferences={togglePreferences} toggleMenu={toggleMenu} />

        <Grid templateColumns={'repeat(24, 1fr)'}>
          <Navigation />

          <GridItem colSpan={{ base: 24, lg: 16, xl: 14 }}>
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
