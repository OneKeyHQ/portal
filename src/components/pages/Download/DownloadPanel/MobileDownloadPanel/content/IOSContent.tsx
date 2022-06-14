import { FC, ReactNode } from 'react';

import { Container, Flex } from '../../../../../base';
import { Title } from '../../Title';

export interface IOSContentProps {
  children?: ReactNode;
}

export const IOSContent: FC<IOSContentProps> = (props) => {
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
        <Title text={['Bring your crypto assets to mobile, too.']} />
      </Flex>
      {children}
    </Container>
  );
};
