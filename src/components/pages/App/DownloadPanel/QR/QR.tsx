import { FC, ReactNode } from 'react';

import { Box, Img, Span } from '../../../../base';

export interface QRProps {
  children?: ReactNode;
  name: string;
  imageURL: string;
}

export const QR: FC<QRProps> = (props) => {
  const { name, imageURL, children } = props;

  return (
    <Box
      xs={{
        boxShadow:
          '0px 16px 32px rgba(0, 0, 0, 0.08), 0px 12px 24px rgba(0, 0, 0, 0.08)',
      }}
    >
      <Img
        xs={{
          width: 134,
          height: 134,
        }}
        src={imageURL}
      />
      <Span>{name}</Span>

      {children}
    </Box>
  );
};
