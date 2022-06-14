import { FC, ReactNode } from 'react';

import { Flex, LaunchAppButton } from '../../../../../base';
import { Title } from '../../Title';

export interface WebContentProps {
  children?: ReactNode;
}

const title = ['Instant launch.', 'Incredibly simple.'];

export const WebContent: FC<WebContentProps> = (props) => {
  const { children } = props;

  return (
    <Flex
      xs={{
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 32,
      }}
    >
      <Title text={title} />
      <LaunchAppButton />
      {children}
    </Flex>
  );
};
