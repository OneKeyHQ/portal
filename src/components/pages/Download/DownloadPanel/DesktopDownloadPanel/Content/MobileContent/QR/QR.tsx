import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Flex, Img, Span } from '../../../../../../../base';

export interface QRProps {
  children?: ReactNode;
  name: string;
  imageURL: string;
}

export const QR: FC<QRProps> = (props) => {
  const { name, imageURL, children } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        background: theme.colors.white,
        borderRadius: 16,
        boxShadow:
          '0px 16px 32px rgba(0, 0, 0, 0.08), 0px 12px 24px rgba(0, 0, 0, 0.08)',
      }}
    >
      <Flex xs={{ padding: 8, flexDirection: 'column', alignItems: 'center' }}>
        <Img
          xs={{
            width: 134,
            height: 134,
          }}
          src={imageURL}
        />
        <Span xs={theme.text.medium100}>{name}</Span>
      </Flex>

      {children}
    </Box>
  );
};
