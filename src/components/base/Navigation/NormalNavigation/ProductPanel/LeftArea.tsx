import { FC, ReactNode, useCallback, useState } from 'react';

import { useTheme } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import ReactDOM from 'react-dom';

import { isBrowser } from '../../../../../utils';
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
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Ul
          xs={{
            margin: 0,
            padding: 0,
          }}
        >
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
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        xl={{
          height: '450px',
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
                loading="eager"
                draggable={false}
                css={{
                  width: '90%',
                  height: 'auto',
                  marginBottom: '-33%',
                }}
                src="./images/OneKeyMini.png"
                alt="OneKeyMini"
              />
            )}
            {currentSelected === 'OneKey Lite' && (
              <StaticImage
                loading="eager"
                draggable={false}
                css={{
                  width: '90%',
                  height: 'auto',
                  marginTop: '-33%',
                }}
                src="./images/OneKeyLite.png"
                alt="OneKeyLite"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </Box>
      {children}

      {isBrowser() &&
        ReactDOM.createPortal(
          <Box
            css={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: 1,
              height: 1,
              opacity: 0.1,
              overflow: 'hidden',
            }}
          >
            <StaticImage src="./images/OneKeyLite.png" alt="OneKeyLite" />
            <StaticImage src="./images/OneKeyMini.png" alt="OneKeyMini" />
          </Box>,
          document.body,
        )}
    </Box>
  );
};
