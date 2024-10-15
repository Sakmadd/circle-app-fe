import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TabIndicator,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { tabStyle } from '../../../styles/style';

interface BrandTabsProps {
  leftTitle: string;
  leftContent: ReactNode;
  rightTitle: string;
  rightContent: ReactNode;
}

function BrandTabs({
  leftTitle,
  leftContent,
  rightTitle,
  rightContent,
}: BrandTabsProps) {
  return (
    <Tabs isLazy>
      <TabList display={'flex'} justifyContent={'center'}>
        <Tab
          flex={1}
          _selected={tabStyle}
          _hover={tabStyle}
          _active={tabStyle}
          pt={0}
        >
          {leftTitle}
        </Tab>
        <Tab
          flex={1}
          _selected={tabStyle}
          _hover={tabStyle}
          _active={tabStyle}
          pt={0}
        >
          {rightTitle}
        </Tab>
      </TabList>
      <TabIndicator
        mt={'-1.5px'}
        height={'1.5px'}
        bg={'accent.base'}
        borderRadius={'2px'}
      />
      <TabPanels>
        <TabPanel padding={0}>{leftContent}</TabPanel>
        <TabPanel padding={0}>{rightContent}</TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default BrandTabs;
