import { FC, ReactNode } from 'react';

import { Box } from '../../../../base';
import { FeatureSectionDataItem } from '../useFeatureSectionData';

export interface ImageSwitcherProps {
  children?: ReactNode;
  featureSectionDataItems: FeatureSectionDataItem[];
  active: number;
}

export const ImageSwitcher: FC<ImageSwitcherProps> = (props) => {
  const { featureSectionDataItems, active = 0, children } = props;

  return (
    <Box xs={{ position: 'relative', maxWidth: 1064 }}>
      {featureSectionDataItems.map((item, index) => (
        <Box
          key={item.name}
          xs={{
            opacity: index <= active ? 1 : 0,
            willChange: 'opacity',
            transition: 'opacity 0.5s ease',
            top: 0,
            position: index === 0 ? 'relative' : 'absolute',
          }}
        >
          {item.imageNode}
        </Box>
      ))}
      {children}
    </Box>
  );
};
