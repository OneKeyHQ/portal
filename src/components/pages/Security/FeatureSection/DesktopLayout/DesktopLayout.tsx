import { FC, ReactNode } from 'react';

import { useTransform } from 'framer-motion';

import {
  useElementInViewportProgress,
  useWindowSize,
} from '../../../../../hooks';
import { Box, Container, Flex } from '../../../../base';
import { ImageSwitcher } from '../ImageSwitcher';
import { TextBlock } from '../TextBlock';
import { useFeatureSectionData } from '../useFeatureSectionData';

import { Progress } from './Progress';

export interface DesktopLayoutProps {
  children?: ReactNode;
}

export const DesktopLayout: FC<DesktopLayoutProps> = (props) => {
  const { children } = props;
  const featureSectionData = useFeatureSectionData();
  const { height: windowHeight = 0 } = useWindowSize();
  const { ref, elementInViewportProgress } = useElementInViewportProgress(0);
  const motionValue = useTransform(
    elementInViewportProgress,
    [0.6, 1.5],
    [0, 2],
  );

  const currentIndex = useTransform(motionValue, (value) => {
    const index = parseInt(value.toFixed(0));

    return index;
  });

  const stickyPosition =
    windowHeight > 600 ? { top: `calc(50% - ${600 / 2}px)` } : { top: 100 };

  return (
    <Box>
      <Container>
        <Flex xs={{ justifyContent: 'space-between', paddingTop: 80 }}>
          <Box>
            <Progress />
          </Box>

          <Flex
            xs={{
              width: 420,
              flexDirection: 'column',
              gap: 300,
            }}
            xl={{ width: 500 }}
            xxl={{ width: 600 }}
          >
            {featureSectionData.items.map((item, index) => (
              <Box
                xs={{
                  willChange: 'opacity',
                  transition: 'opacity 0.5s',
                  opacity: index === currentIndex.get() ? 1 : 0.3,
                }}
                key={item.name}
              >
                <TextBlock {...item} />
              </Box>
            ))}
          </Flex>

          <Box
            xs={{
              width: 600,
              position: 'relative',
            }}
            xl={{ width: 700 }}
            xxl={{ width: 800 }}
          >
            <div ref={ref} />

            <Box
              css={{
                ...stickyPosition,
                position: 'sticky',
                overflow: 'hidden',
                padding: '0 64px',
              }}
            >
              <ImageSwitcher
                active={currentIndex.get()}
                featureSectionDataItems={featureSectionData.items}
              />
            </Box>
          </Box>
        </Flex>
      </Container>

      {children}
    </Box>
  );
};
