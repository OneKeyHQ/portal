import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { navigate } from 'gatsby';
import { SetStateAction } from 'jotai';

import { DownloadTypes, useDownloadData } from '../../../../../../data';
import { Box, Container, Flex } from '../../../../../base';
import { TabTypes, useCurrentTabAtom } from '../../atom';

import { TabItem } from './TabItem';

export interface TabsProps {
  children?: ReactNode;
}

export const Tabs: FC<TabsProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const downloadData = useDownloadData();
  const tabs = [
    downloadData.desktop,
    downloadData.mobile,
    downloadData.browserExtension,
    downloadData.bridge,
  ];
  const [currentTabAtom, setCurrentTabAtom] = useCurrentTabAtom();

  return (
    <Box
      css={{
        color: theme.colors.white,
        backgroundColor: theme.colors.test400,
      }}
    >
      <Container>
        <Flex>
          {tabs.map((item) => {
            const iconType = item.image as DownloadTypes;

            return (
              <Box
                xs={{ width: '25%' }}
                key={item.name}
                onClick={() => {
                  setCurrentTabAtom(iconType as SetStateAction<TabTypes>);
                  navigate(`?client=${iconType}`);
                }}
              >
                <TabItem
                  active={currentTabAtom === iconType}
                  iconType={iconType}
                  name={item.name}
                  description={item.description}
                />
              </Box>
            );
          })}
        </Flex>
      </Container>
      {children}
    </Box>
  );
};
