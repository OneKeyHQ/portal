import { FC, ReactNode } from 'react';

import { Box } from '../../../../../base';

export interface ProgressProps {
  children?: ReactNode;
  height: number;
}

export const Progress: FC<ProgressProps> = (props) => {
  const { children, height } = props;

  return (
    <Box
      xs={{
        width: 1,
        height: '100%',
        backgroundColor: '#EEEEEE',
      }}
    >
      <Box
        xs={{
          width: '100%',
          height,
          position: 'sticky',
          background: 'black',
          top: `calc(50% - ${502 / 2}px)`,
        }}
      />
      {children}
    </Box>
  );
};
