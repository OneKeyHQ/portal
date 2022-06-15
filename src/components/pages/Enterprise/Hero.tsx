import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { useContactUs } from '../../../data';
import {
  ArrowRightIcon,
  Box,
  Button,
  Container,
  Flex,
  Link,
  Span,
} from '../../base';

import enterpriseBackground from './images/enterprise-background.jpg';

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
        backgroundImage: `url(${enterpriseBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box xs={{ background: `rgba(255, 255, 255, 0.5)` }}>
        <Container>
          <Flex
            xs={{
              paddingTop: 80,
              flexDirection: 'column',
              justifyContent: 'center',
              height: '80vh',
              minHeight: 600,
              gap: 20,
              marginBottom: -100,
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
                Explore the world of co-branding with us, and see your campaign
                come to life.
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
          </Flex>
        </Container>
      </Box>

      {children}
    </Box>
  );
};
