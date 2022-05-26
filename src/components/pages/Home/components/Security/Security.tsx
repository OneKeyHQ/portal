import { FC } from 'react';

import { useTheme } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';

import { useMediaQuery } from '../../../../../hooks';
import { Box, Container, Flex, Section } from '../../../../base';

import { Item } from './Item';
import { SecurityHeader } from './SecurityHeader';
import { SecuritySwiper } from './SecuritySwiper';
import { useSecurityAutoSwitch } from './useSecurityAutoSwitch';
import { useSecurityData } from './useSecurityData';

export const Security: FC = () => {
  const theme = useTheme();
  const data = useSecurityData();
  const media = useMediaQuery();
  const {
    currentItem,
    currentIndex,
    setIsAnimating,
    setCurrentIndex,
    setCurrentItem,
  } = useSecurityAutoSwitch();

  return (
    <Section>
      {/* pc */}
      {media.large && (
        <Container>
          <Flex
            xs={{
              paddingTop: 80,
              paddingBottom: 80,
              backgroundColor: theme.colors.white,
              gap: 46,
            }}
            m={{
              paddingTop: 120,
              paddingBottom: 120,
              flexDirection: 'row',
            }}
          >
            {/* left */}
            <Box xs={{ flex: 1 }}>
              <SecurityHeader />

              <Flex
                xs={{
                  marginTop: 50,
                  flexDirection: 'column',
                  gap: 32,
                }}
                xxl={{
                  marginTop: 100,
                }}
                onMouseEnter={() => setIsAnimating(true)}
                onMouseLeave={() => setIsAnimating(false)}
              >
                {data.map((item, index) => (
                  <Item
                    active={index === currentIndex}
                    key={item.title}
                    onPointerEnter={() => {
                      setCurrentItem(item);
                      setCurrentIndex(index);
                    }}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </Flex>
            </Box>

            {/* right */}
            <Box
              xs={{
                background: theme.background.test100,
                borderRadius: 40,
                overflow: 'hidden',
                flex: 1,
              }}
            >
              <AnimatePresence exitBeforeEnter>
                <motion.div
                  key={currentItem.title}
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {currentItem?.image}
                </motion.div>
              </AnimatePresence>
            </Box>
          </Flex>
        </Container>
      )}

      {/* for mobile */}
      {!media.large && (
        <Box
          xs={{
            paddingTop: 16,
            paddingBottom: 80,
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
