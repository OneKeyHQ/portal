import { FC, ReactNode } from 'react';

import { useColumnSize, useTheme } from '../../../theme';
import { Box } from '../../base/Box';
import { MediaLinkList } from '../MediaLinkList';

import { EmailSubscribe } from './EmailSubscribe';

export interface StayInTouchProps {
  children?: ReactNode;
}

export const StayInTouch: FC<StayInTouchProps> = (props) => {
  const { children } = props;
  const columnSize = useColumnSize(1);
  const theme = useTheme();

  return (
    <Box
      xs={{
        borderRadius: 40,
        backgroundColor: '#92baa3',
        paddingTop: 70,
        paddingBottom: 70,
        paddingLeft: columnSize,
        paddingRight: columnSize,
      }}
    >
      <MediaLinkList color={theme.colors.test500} />

      <EmailSubscribe />

      {children}
    </Box>
  );
};
