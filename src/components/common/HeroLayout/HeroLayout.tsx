import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Span } from '../../base/Box';
import { Container } from '../../base/Container';
import { Flex } from '../../base/Flex';
import { ContactUsButton } from '../ContactUsButton';

export interface HeroLayoutProps {
  children?: ReactNode;
  title?: string | ReactNode;
  description?: string | ReactNode;
}

export const HeroLayout: FC<HeroLayoutProps> = (props) => {
  const { children, title, description } = props;
  const theme = useTheme();

  return (
    <Container>
      <Flex
        xs={{
          position: 'relative',
          paddingTop: 80,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          height: '80vh',
          minHeight: 600,
          maxHeight: 1000,
          gap: 20,
          paddingBottom: 30,
          zIndex: 10,
        }}
        m={{ minHeight: 700 }}
        l={{ paddingBottom: 64 }}
        xl={{ minHeight: 800 }}
      >
        <Flex
          xs={{ flexDirection: 'column', gap: 10 }}
          l={{ textAlign: 'left', gap: 20 }}
        >
          <Span
            xs={theme.text.medium700}
            m={theme.text.medium800}
            l={theme.text.medium900}
            xl={theme.text.medium1000}
          >
            {title}
          </Span>
          <Span xs={theme.text.normal300}>{description}</Span>

          <Flex
            xs={{ justifyContent: 'flex-start' }}
            l={{ justifyContent: 'flex-start' }}
          >
            <ContactUsButton />
          </Flex>
        </Flex>
      </Flex>

      {children}
    </Container>
  );
};
