import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Flex, LaunchAppButton } from '../../../../../base';
import { Span } from '../../../../../base/Box';

export interface WebContentProps {
  children?: ReactNode;
}

const title = ['Instant launch.', 'Incredibly simple.'];

export const WebContent: FC<WebContentProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Flex
      xs={{
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 32,
      }}
    >
      <Flex xs={{ flexDirection: 'column' }}>
        {title.map((item) => (
          <Span
            key={item}
            xs={{
              ...theme.text.medium900,
            }}
          >
            {item}
          </Span>
        ))}
      </Flex>
      <LaunchAppButton />
      {children}
    </Flex>
  );
};
