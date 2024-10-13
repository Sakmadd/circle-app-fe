import { Box, Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { TopBar } from '../components/fragments/bars/topBar';
import { Navigation } from '../components/fragments/navigations/navigation';
import { UserPreferences } from '../components/fragments/userPreferences/userPreferences';
import { NavigationMobile } from '../components/fragments/mobile/navigationMobile';
import { useState } from 'react';
import { UserPreferencesMobile } from '../components/fragments/mobile/userPreferencesMobile';

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
      <UserPreferencesMobile
        onClosePreferencesMobile={togglePreferences}
        showPreferencesMobile={showPreferences}
      />
      <NavigationMobile
        onCloseNavigationMobile={toggleMenu}
        showNavigationMobile={showNavigation}
      />
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
