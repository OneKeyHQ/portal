import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';

import { Box, Container, Flex, Span } from '../../base';

export interface HeroProps {
  children?: ReactNode;
}

export const Hero: FC<HeroProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        background: theme.colors.test100,
      }}
    >
      <Container>
        <Flex
          xs={{
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100vh',
            gap: 20,
          }}
        >
          <Flex xs={{ flexDirection: 'column', gap: 10 }}>
            <Span xs={theme.text.medium700}>Enterprise Solutions</Span>
            <Span xs={theme.text.normal300}>
              DISCOVER OUR CO-BRANDED <br />
              OFFERS AND BRING YOUR <br />
              MARKETING TO LIFE
            </Span>
          </Flex>

          <Flex xs={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box xs={{ width: 183 }}>
              <StaticImage src="./images/image.png" alt="image" />
            </Box>
          </Flex>
        </Flex>
      </Container>

      {children}
    </Box>
  );
};
