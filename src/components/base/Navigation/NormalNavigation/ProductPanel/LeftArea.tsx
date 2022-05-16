import { FC, ReactNode, useCallback, useState } from 'react';

import { useTheme } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

import { Box, Li, Ul } from '../../../Box';

export interface LeftAreaProps {
  children?: ReactNode;
}

const items = ['OneKey Mini', 'OneKey Lite'];

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const LeftArea: FC<LeftAreaProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const [backgroundColor] = useState(theme.background.test100);
  const [currentSelected, setCurrentSelected] = useState('OneKey Mini');

  const handleMouseMove = useCallback(
    (type: string) => {
      setCurrentSelected(type);
    },
    [setCurrentSelected],
  );

  return (
    <Box
      xs={{
        display: 'flex',
        width: '100%',
        height: '100%',
        transition: theme.transitions.allEase,
        background: backgroundColor,
      }}
    >
      <Box
        xs={{
          width: '50%',
          paddingLeft: 64,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Ul>
          {items.map((item, index) => (
            <Li
              onMouseMove={() => handleMouseMove(item)}
              xs={{
                ...theme.text.medium400,
                listStyle: 'none',
                lineHeight: '44px',
                height: 44,
                cursor: 'pointer',
                ':hover': {
                  color: theme.background.test300,
                },
              }}
              key={index}
            >
              <motion.div key={index} variants={itemVariants}>
                {item}
              </motion.div>
            </Li>
          ))}
        </Ul>
      </Box>

      <Box
        xs={{
          width: '50%',
          height: '22vw',
        }}
      >
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={currentSelected}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {currentSelected === 'OneKey Mini' && (
              <StaticImage
                css={{
                  width: '100%',
                  height: 'auto',
                  marginBottom: '-20%',
                }}
                src="./images/OneKeyMini.png"
                alt="OneKeyMini"
              />
            )}
            {currentSelected === 'OneKey Lite' && (
              <StaticImage
                css={{
                  width: '90%',
                  height: 'auto',
                  marginTop: '-26%',
                  marginLeft: 'auto',
                }}
                src="./images/OneKeyLite.png"
                alt="OneKeyLite"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </Box>
      {children}
    </Box>
  );
};
