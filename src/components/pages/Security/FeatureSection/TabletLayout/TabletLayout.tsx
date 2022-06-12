import { FC, ReactNode, useState } from 'react';

import { theme } from '../../../../../theme';
import { Box, Container, Flex } from '../../../../base';
import { ImageSwitcher } from '../ImageSwitcher';
import { TextBlock } from '../TextBlock';
import { useFeatureSectionData } from '../useFeatureSectionData';

export interface TabletLayoutProps {
  children?: ReactNode;
}

export const TabletLayout: FC<TabletLayoutProps> = (props) => {
  const { children } = props;

  const featureSectionData = useFeatureSectionData();
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Container>
      <Box xs={{ width: 400, marginLeft: 'auto', marginRight: 'auto' }}>
        <ImageSwitcher
          active={currentIndex}
          featureSectionDataItems={featureSectionData.items}
        />
      </Box>

      <Box
        xs={{
          height: 1,
          background: 'rgba(255, 255, 255, 0.16)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Box
          xs={{
            willChange: 'width',
            transition: 'width 0.5s',
            width: `${((currentIndex + 1) / 3) * 100}%`,
            height: 1,
            background: theme.colors.white,
          }}
        />
      </Box>

      <Flex xs={{ paddingTop: 40, gap: theme.size.m.gutter }}>
        {featureSectionData.items.map((item, index) => (
          <Box
            xs={{
              flex: 1,
              willChange: 'opacity',
              transition: 'opacity 0.5s',
              opacity: index === currentIndex ? 1 : 0.6,
            }}
            onMouseEnter={() => setCurrentIndex(index)}
            onClick={() => setCurrentIndex(index)}
            key={item.name}
          >
            <TextBlock {...item} />
          </Box>
        ))}
      </Flex>

      {children}
    </Container>
  );
};
