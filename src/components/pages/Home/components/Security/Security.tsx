import { FC, useState } from 'react';

import { useTheme } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';

import { useInterval, useMediaQuery } from '../../../../../hooks';
import { Box, Container, Flex, Section } from '../../../../base';

import { Item } from './Item';
import { SecurityHeader } from './SecurityHeader';
import { SecuritySwiper } from './SecuritySwiper';
import { SecurityDataItem, useSecurityData } from './useSecurityData';

export const Security: FC = () => {
  const theme = useTheme();
  const data = useSecurityData();
  const media = useMediaQuery();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItem, setCurrentItem] = useState<SecurityDataItem>(data[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  useInterval(() => {
    if (isAnimating) {
      return;
    }

    const newIndex = (currentIndex + 1) % data.length;

    setCurrentIndex(newIndex);

    const nextItem = data[newIndex];

    if (nextItem) {
      setCurrentItem(nextItem);
    }
  }, 3000);

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
            </Flex>

            {/* right */}
            <Box
              xs={{
                background: theme.background.test100,
                flex: 1,
                borderRadius: 40,
                overflow: 'hidden',
                height: 'fit-content',
                maxHeight: 929,
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
