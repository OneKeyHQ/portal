import { FC, ReactNode } from 'react';

import { Box, OnlyDisplay } from '../../../base';
import { Container } from '../../../base/Container';

import { TableContent } from './TableContent';

export interface CryptosTableProps {
  children?: ReactNode;
}

export const CryptosTable: FC<CryptosTableProps> = (props) => {
  const { children } = props;

  return (
    <Box>
      <OnlyDisplay m l xl xxl>
        <Container>
          <TableContent />
        </Container>
      </OnlyDisplay>

      <OnlyDisplay xs s>
        <Box xs={{ overflow: 'auto' }}>
          <Box xs={{ minWidth: 600 }}>
            <TableContent />
          </Box>
        </Box>
      </OnlyDisplay>

      {children}
    </Box>
  );
};
