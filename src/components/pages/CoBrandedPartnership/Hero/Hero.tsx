import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';

import { useContactUs } from '../../../../data';
import {
  ArrowRightIcon,
  Box,
  Button,
  Container,
  Flex,
  Link,
  Span,
} from '../../../base';

export interface HeroProps {
  children?: ReactNode;
}

export const Hero: FC<HeroProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const contactUs = useContactUs();

  return (
    <Box
      xs={{
        background: theme.colors.test200,
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
            maxHeight: 1000,
            gap: 20,
          }}
          m={{ minHeight: 700 }}
          l={{ flexDirection: 'row', justifyContent: 'space-between' }}
          xl={{ minHeight: 800 }}
        >
          <Flex
            xs={{ flexDirection: 'column', gap: 10, zIndex: 1 }}
            m={{ textAlign: 'center', justifyContent: 'center' }}
            l={{ textAlign: 'left', gap: 20 }}
          >
            <Span
              xs={theme.text.medium700}
              m={theme.text.medium800}
              l={theme.text.medium900}
              xl={theme.text.medium1000}
            >
              Co-Branded Partnership
            </Span>
            <Span xs={theme.text.normal300}>
              DISCOVER OUR CO-BRANDED OFFERS AND BRING YOUR MARKETING TO LIFE
            </Span>

            <Flex
              xs={{ justifyContent: 'flex-start' }}
              m={{ justifyContent: 'center' }}
              l={{ justifyContent: 'flex-start' }}
            >
              <Link to={contactUs.url}>
                <Button
                  variant="outlined"
                  rightIcon={<ArrowRightIcon width={24} height={24} />}
                >
                  Contact us
                </Button>
              </Link>
            </Flex>
          </Flex>

          <Flex
            xs={{ justifyContent: 'flex-end', marginTop: -50 }}
            m={{ alignItems: 'center', justifyContent: 'center', marginTop: 0 }}
          >
            <Box xs={{ width: 220 }} m={{ width: 460 }} xl={{ width: 600 }}>
              <StaticImage src="./images/image.png" alt="image" />
            </Box>
          </Flex>
        </Flex>
      </Container>

      {children}
    </Box>
  );
};
