import { FC, ReactNode } from 'react';

import {
  UseMediaQueryMapValuesValue,
  useMediaQueryMapValues,
} from '../../../hooks';
import { Box } from '../Box';

export interface GridProps {
  children?: ReactNode;
  columns: UseMediaQueryMapValuesValue<number>;
}

export const Grid: FC<GridProps> = (props) => {
  const { children, columns } = props;

  const columnsValue = useMediaQueryMapValues(columns);

  return (
    <Box
      xs={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columnsValue}, 1fr)`,
      }}
    >
      Grid {children}
    </Box>
  );
};
