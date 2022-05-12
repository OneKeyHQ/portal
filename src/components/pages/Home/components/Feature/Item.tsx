import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Box } from '../../../../base';

export interface ItemProps {
  image: string;
  title: string;
  description: string;
}

export const Item: FC<ItemProps> = (props) => {
  const { image, title, description } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        maxWidth: 754,
      }}
    >
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          textAlign: 'center',
          maxWidth: 581,
          margin: '0 auto',
        }}
      >
        <span
          css={{
            ...theme.text.medium900,
            color: '#101111',
          }}
        >
          {title}
        </span>
        <span
          css={{
            ...theme.text.normal500,
            color: '#101111',
          }}
        >
          {description}
        </span>
      </Box>

      <img
        style={{
          width: '100%',
        }}
        src={image}
        alt=""
        srcSet=""
      />
    </Box>
  );
};
