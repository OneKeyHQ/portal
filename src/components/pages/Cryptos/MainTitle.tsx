import { FC, ReactNode } from 'react';

import { Box } from '../../base';
import { NormalCenterPageHeader } from '../../common/NormalCenterPageHeader';

import { useCryptos } from './useCryptos';

export interface MainTitleProps {
  children?: ReactNode;
}

export const MainTitle: FC<MainTitleProps> = (props) => {
  const { children } = props;
  const cryptosPageData = useCryptos();

  return (
    <Box xs={{ textAlign: 'center', paddingTop: '12vh', paddingBottom: '6vh' }}>
      <NormalCenterPageHeader {...cryptosPageData.mainTitle} />

      {children}
    </Box>
  );
};
