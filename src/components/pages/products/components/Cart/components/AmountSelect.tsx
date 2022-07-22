import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, ChevronDownIcon, Flex } from '../../../../../base';
import { useBuy } from '../../../hooks/useBuy';

export interface AmountSelectProps {
  children?: ReactNode;
  shopProductId: string;
}

export const AmountSelect: FC<AmountSelectProps> = (props) => {
  const { children, shopProductId } = props;
  const theme = useTheme();
  const { currentProductAmount } = useBuy({
    shopProductId,
  });

  return (
    <Box
      css={{
        cursor: 'pointer',
        color: theme.colors.test500,
        border: '1px solid rgba(16, 17, 17, 0.12)',
        borderRadius: 50,
        padding: '8px 12px',
        ':hover': {
          borderColor: theme.colors.test500,
        },
      }}
      xs={theme.text.normal200}
    >
      <Flex
        xs={{
          gap: 4,
          alignItems: 'center',
        }}
      >
        x{currentProductAmount}
        <ChevronDownIcon height={16} width={16} />
        {children}
      </Flex>
    </Box>
  );
};
