import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, P, Span } from '../../../../../base';

export interface ProductSwiperItemProps {
  children?: ReactNode;
  title: string;
  description: string;
  imageNode: ReactNode;
  buttonNode?: ReactNode;
}

export const ProductSwiperItem: FC<ProductSwiperItemProps> = (props) => {
  const { children, title, description, imageNode, buttonNode } = props;
  const theme = useTheme();

  return (
    <Box>
      <Box
        xs={{
          overflow: 'hidden',
          borderRadius: 24,
          // for hack
          transform: 'translateZ(0)',
        }}
      >
        {imageNode}
      </Box>

      <Box xs={{ paddingTop: 24 }}>
        <Span xs={{ ...theme.text.medium600 }} m={{ ...theme.text.medium700 }}>
          {title}
        </Span>
        <P
          xs={{ ...theme.text.normal200, marginTop: 8 }}
          m={{ ...theme.text.normal300 }}
        >
          {description}
        </P>
      </Box>

      <Box xs={{ paddingTop: 24 }}>{buttonNode}</Box>

      {children}
    </Box>
  );
};
