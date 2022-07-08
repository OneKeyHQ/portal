import { FC, ReactNode } from 'react';

import { Container, Flex } from '../../base';

export interface HeroContentProps {
  children?: ReactNode;
  justifyContent?: 'flex-start' | 'flex-end' | 'center';
}

export const HeroContent: FC<HeroContentProps> = (props) => {
  const { children, justifyContent = 'center' } = props;

  return (
    <Container>
      <Flex
        xs={{
          position: 'relative',
          paddingTop: 80,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          height: '80vh',
          minHeight: 660,
          maxHeight: 744,
          gap: 20,
          paddingBottom: 50,
          zIndex: 10,
        }}
        m={{ minHeight: 700 }}
        l={{ paddingBottom: 64, justifyContent, width: '40%' }}
        xl={{ minHeight: 800 }}
      >
        <Flex
          xs={{ flexDirection: 'column', gap: 10 }}
          l={{ textAlign: 'left', gap: 20 }}
        >
          {children}
        </Flex>
      </Flex>
    </Container>
  );
};
