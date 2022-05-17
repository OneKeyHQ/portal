import { FC } from 'react';

import { Box } from '../../../../base';

export interface StartItemProps {
  name: string;
  description: string;
  image: string;
}

export const StartItem: FC<StartItemProps> = (props) => {
  const { name, description, image } = props;

  return (
    <Box
      xs={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        flexGrow: 1,
        transition: 'all 0.3s ease-in-out',
        ':hover': {
          opacity: 0.6,
        },
      }}
    >
      <Box css={{ height: 1, width: '100%', backgroundColor: '#101111' }} />
      <Box css={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        <img alt="icon-png" src={image} css={{ width: 88, height: 88 }} />
        <Box css={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span
            css={{
              fontWeight: 600,
              fontSize: 30,
              lineHeight: '36px',
            }}
          >
            {name}
          </span>
          <span
            css={{
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '20px',
            }}
          >
            {description}
          </span>
        </Box>
      </Box>
    </Box>
  );
};
