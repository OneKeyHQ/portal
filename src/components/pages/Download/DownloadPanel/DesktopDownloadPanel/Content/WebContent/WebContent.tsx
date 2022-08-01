import { FC, ReactNode } from 'react';

import { Flex } from '../../../../../../base';
import { LaunchAppButton } from '../../../../../../common/LaunchAppButton';
import { Title } from '../../../Title';

export interface WebContentProps {
  children?: ReactNode;
}

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
      <Title name="title__instant_launch_incredibly_simple" />
      <LaunchAppButton />
      {children}
    </Flex>
  );
};
