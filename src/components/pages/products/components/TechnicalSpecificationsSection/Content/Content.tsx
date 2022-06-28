import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Flex } from '../../../../../base';

import { DynamicContent, DynamicContentItems } from './DynamicContent';

export interface ContentProps {
  content: {
    left: DynamicContentItems;
    right: DynamicContentItems;
  };
}

export const Content: FC<ContentProps> = (props) => {
  const { content } = props;
  const theme = useTheme();

  return (
    <Flex
      xs={{
        justifyContent: 'center',
        flexDirection: 'column',
        color: theme.colors.white,
        gap: 64,
      }}
      m={{ paddingTop: 36, flexDirection: 'row' }}
      l={{ gap: 100 }}
      xl={{ gap: 120 }}
    >
      <DynamicContent items={content.left} />
      <DynamicContent items={content.right} />
    </Flex>
  );
};
