import { FC, ReactNode } from 'react';

import { Box, OnlyDisplay } from '../../../base';
import { Container } from '../../../base/Container';

import { ListContent } from './ListContent';
import { TableContent } from './TableContent';

export interface EIPsTableProps {
  children?: ReactNode;
}

export const EIPsTable: FC<EIPsTableProps> = (props) => {
  const { children } = props;

  return (
    <Box>
      <OnlyDisplay m l xl xxl>
        <Container>
          <TableContent />
        </Container>
      </OnlyDisplay>

      <OnlyDisplay xs s>
        <ListContent />
      </OnlyDisplay>

      {children}
    </Box>
  );
};
