import { FC, ReactNode } from 'react';

import { Container, Flex } from '../../../../../base';

export interface ContentContainerProps {
  children?: ReactNode;
}

export const ContentContainer: FC<ContentContainerProps> = (props) => {
  const { children } = props;

  return (
    <Container css={{ position: 'relative', zIndex: 20 }}>
      <Flex
        xs={{
          paddingBottom: 50,
          minHeight: 600,
          maxHeight: 800,
          height: '100vh',
          flex: 1,
          gap: 32,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        {children}
      </Flex>
    </Container>
  );
};
