import { FC, ReactNode } from 'react';

import { Box } from '../../../../base';

export interface ImageSwitcherProps {
  children?: ReactNode;
  imageNodes: ReactNode[];
}

export const ImageSwitcher: FC<ImageSwitcherProps> = (props) => {
  const { imageNodes, children } = props;

  return (
    <Box xs={{ position: 'relative' }}>
      {imageNodes.map((node, index) => (
        <Box
          xs={{
            top: 0,
            position: index === 0 ? 'relative' : 'absolute',
          }}
        >
          {node}
        </Box>
      ))}
      {children}
    </Box>
  );
};
