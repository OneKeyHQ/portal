import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, P, Span } from '../../../../../base';

export interface SecuritySwiperItemProps {
  children?: ReactNode;
  title: string;
  description: string;
  imageNode: ReactNode;
}

export const SecuritySwiperItem: FC<SecuritySwiperItemProps> = (props) => {
  const { children, title, description, imageNode } = props;
  const theme = useTheme();

  return (
    <Box>
      <Box
        xs={{
          overflow: 'hidden',
          borderRadius: 40,
          // for hack
          transform: 'translateZ(0)',
        }}
      >
        {imageNode}
      </Box>

      <Box xs={{ paddingTop: 24 }}>
        <Span xs={{ ...theme.text.medium600 }}>{title}</Span>
        <P xs={{ ...theme.text.normal200, marginTop: 8 }}>{description}</P>
      </Box>

      {children}
    </Box>
  );
};
