import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { useTransform } from 'framer-motion';

import {
  useElementInViewportProgress,
  useWindowSize,
} from '../../../../../../hooks';
import { Box, CanvasPlayer, Section } from '../../../../../base';
import { FeatureHeader } from '../FeatureHeader';
import { FeatureItem } from '../FeatureItem';
import { useFeatureData } from '../useFeatureData';

import { HorizontalScrollingView } from './HorizontalScrollingView';

export interface NormalFeatureSectionProps {
  children?: ReactNode;
}

export const NormalFeatureSection: FC<NormalFeatureSectionProps> = () => {
  const theme = useTheme();
  const { ref, elementInViewportProgress } = useElementInViewportProgress(0);
  const motionValue = useTransform(
    elementInViewportProgress,
    [0.6, 1.1],
    [0, 29],
  );
  const data = useFeatureData();
  const { width: windowWidth } = useWindowSize();

  return (
    <Section
      xs={{
        position: 'relative',
        background: theme.background.test100,
        zIndex: 100,
        paddingBottom: 120,
        width: '100%',
      }}
    >
      <div ref={ref} />

      {/* for space */}
      <Box
        xs={{
          height: '100vh',
          width: 100,
        }}
      />

      <Box
        xs={{
          bottom: 0,
          position: 'sticky',
          paddingTop: 120,
          paddingBottom: 60,
          minHeight: 'calc(100vh - 80px)',
        }}
      >
        <Box
          xs={{
            overflow: 'hidden',
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            height: '100vh',
          }}
        >
          <CanvasPlayer
            frame={parseInt(motionValue.get().toFixed(0))}
            width={windowWidth || 0}
            height={(960 / 2880) * (windowWidth || 0)}
            images={new Array(30)
              .fill('')
              .map(
                (_, index) =>
                  `/home-software-header/home-software-header${index}.jpg`,
              )}
          />
        </Box>

        {/* mask */}
        <Box
          xs={{
            position: 'absolute',
            left: 0,
            top: 200,
            right: 0,
            height: (960 / 2880) * (windowWidth || 0) - 200,
            background:
              'linear-gradient(360deg, #F0F1F2 0%, rgba(238, 239, 241, 0) 96.87%)',
          }}
        />

        <Box xs={{ padding: 120 }}>
          <FeatureHeader />
        </Box>

        <HorizontalScrollingView progress={elementInViewportProgress}>
          {data.map((itemData, index) => (
            <FeatureItem
              key={index}
              imageNode={itemData.image}
              title={itemData.title}
              description={itemData.description}
            />
          ))}
        </HorizontalScrollingView>
      </Box>
    </Section>
  );
};
