import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Container, Flex, Section } from '../../../../base';

import { Item } from './Item';
import { SecurityHeader } from './SecurityHeader';
import { useSecurityData } from './useSecurityData';

export const Security: FC = () => {
  const theme = useTheme();
  const data = useSecurityData();

  return (
    <Section>
      <Container>
        <Flex
          xs={{
            flexDirection: 'column',
            paddingTop: 16,
            paddingBottom: 16,
            backgroundColor: theme.colors.white,
            gap: 46,
            label: 'Security',
          }}
          m={{
            flexDirection: 'row',
          }}
        >
          {/* left */}
          <Flex
            xs={{
              flex: 1,
              flexDirection: 'column',
              gap: 68,
            }}
          >
            <SecurityHeader />

            <Flex
              css={{
                flexDirection: 'column',
                gap: 32,
                flexGrow: 1,
              }}
            >
              {data.map((item) => (
                <Item {...item} />
              ))}
            </Flex>
          </Flex>

          {/* right */}
          <Box
            css={{
              flex: 1,
              borderRadius: 40,
              overflow: 'hidden',
              height: 'fit-content',
            }}
          >
            {data[0]?.image}
            {/* <Img
              alt="sideImage.png"
              src={placeholderImage}
              css={{ display: 'block', width: '100%' }}
            /> */}
          </Box>
        </Flex>
      </Container>
    </Section>
  );
};
