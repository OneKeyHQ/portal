import { FC, useState } from 'react';

import { useTheme } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';

import { useMediaQuery } from '../../../../../hooks';
import { Box, Container, Flex, Section } from '../../../../base';

import { Item } from './Item';
import { SecurityHeader } from './SecurityHeader';
import { SecuritySwiper } from './SecuritySwiper';
import { SecurityDataItem, useSecurityData } from './useSecurityData';

export const Security: FC = () => {
  const theme = useTheme();
  const data = useSecurityData();
  const media = useMediaQuery();
  const [currentItem, setCurrentItem] = useState<SecurityDataItem>(data[0]);

  return (
    <Section>
      {/* pc */}
      {media.medium && (
        <Container
          xs={{
            display: 'none',
          }}
          l={{
            display: 'block',
          }}
        >
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
                xs={{
                  flexDirection: 'column',
                  gap: 32,
                }}
              >
                {data.map((item) => (
                  <Item
                    key={item.title}
                    onPointerEnter={() => {
                      setCurrentItem(item);
                    }}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </Flex>
            </Flex>

            {/* right */}
            <Box
              xs={{
                background: theme.background.test100,
                flex: 1,
                borderRadius: 40,
                overflow: 'hidden',
                height: 'fit-content',
              }}
            >
              <AnimatePresence exitBeforeEnter>
                <motion.div
                  key={currentItem.title}
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  {currentItem?.image}
                </motion.div>
              </AnimatePresence>
            </Box>
          </Flex>
        </Container>
      )}

      {!media.medium && (
        <Box
          xs={{
            paddingTop: 16,
            paddingBottom: 16,
            backgroundColor: theme.colors.white,
          }}
        >
          <Box
            xs={{
              paddingLeft: 24,
            }}
          >
            <SecurityHeader />
          </Box>

          <Box
            xs={{
              marginTop: 46,
              width: '100vw',
              overflow: 'hidden',
            }}
            l={{
              display: 'none',
            }}
          >
            <SecuritySwiper />
          </Box>
        </Box>
      )}
    </Section>
  );
};
