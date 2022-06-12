import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';

import { ArrowRightIcon, Box, Button, Container, Flex, Span } from '../../base';

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
            paddingTop: 80,
            flexDirection: 'column',
            justifyContent: 'center',
            height: '80vh',
            minHeight: 600,
            gap: 20,
          }}
          m={{ minHeight: 700 }}
          l={{ flexDirection: 'row', justifyContent: 'space-between' }}
          xl={{ minHeight: 800 }}
        >
          <Flex
            xs={{ flexDirection: 'column', gap: 10 }}
            m={{ textAlign: 'center', justifyContent: 'center' }}
            l={{ textAlign: 'left', gap: 20 }}
          >
            <Span
              xs={theme.text.medium700}
              m={theme.text.medium800}
              l={theme.text.medium900}
              xl={theme.text.medium1000}
            >
              Enterprise Solutions
            </Span>
            <Span xs={theme.text.normal300}>
              <Box xs={{ display: 'block' }} m={{ display: 'none' }}>
                DISCOVER OUR CO-BRANDED
                <br />
                OFFERS AND BRING YOUR
                <br />
                MARKETING TO LIFE
              </Box>
              <Span xs={{ display: 'none' }} m={{ display: 'inline' }}>
                DISCOVER OUR CO-BRANDED OFFERS AND BRING YOUR MARKETING TO LIFE
              </Span>
            </Span>

            <Flex
              xs={{ justifyContent: 'flex-start' }}
              m={{ justifyContent: 'center' }}
              l={{ justifyContent: 'flex-start' }}
            >
              <Button variant="outlined" rightIcon={<ArrowRightIcon />}>
                Contact us
              </Button>
            </Flex>
          </Flex>

          <Flex xs={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box xs={{ width: 183 }} m={{ width: 317 }}>
              <StaticImage src="./images/image.png" alt="image" />
            </Box>
          </Flex>
        </Flex>
      </Container>

      {children}
    </Box>
  );
};
