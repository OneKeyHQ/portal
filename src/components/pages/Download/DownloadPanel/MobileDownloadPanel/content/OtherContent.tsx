import { FC, ReactNode } from 'react';

import { Box, Container, Divider, Flex } from '../../../../../base';
import { Title } from '../../Title';

export interface OtherContentProps {
  children?: ReactNode;
}

export const OtherContent: FC<OtherContentProps> = (props) => {
  const { children } = props;

  return (
    <Container>
      <Flex
        xs={{
          height: 656,
          position: 'relative',
          zIndex: 100,
          alignItems: 'flex-end',
        }}
      >
        <Box xs={{ paddingBottom: 40 }}>
          <Title text={['Bring your crypto assets to mobile, too.']} />
          <Divider />
        </Box>
      </Flex>
      {children}
    </Container>
  );
};
