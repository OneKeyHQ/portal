import { FC, ReactNode, useCallback } from 'react';

import { useTheme } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import ReactDOM from 'react-dom';

import { useOneKeyProduct } from '../../../../../data/useOneKeyProduct';
import { isBrowser } from '../../../../../utils';
import { Divider } from '../../../../base';
import { Box, Li, Ul } from '../../../../base/Box';
import { Link } from '../../../../base/Link';

import { useProductPanel } from './useProductPanel';

export interface LeftAreaProps {
  children?: ReactNode;
}

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const LeftArea: FC<LeftAreaProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const {
    items,
    currentSelected,
    setCurrentSelected,
    currentProductBackgroundColor,
    currentProductFontColor,
  } = useProductPanel();
  const oneKeyProduct = useOneKeyProduct();

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
        background: currentProductBackgroundColor,
      }}
    >
      <Box xs={{ width: '50%', display: 'flex', alignItems: 'center' }}>
        <Ul xs={{ margin: 0, padding: 0 }}>
          {items.map((item, index) => (
            <Link key={item.name} to={item.link}>
              <Li
                onMouseMove={() => handleMouseMove(item.key)}
                xs={{
                  ...theme.text.medium400,
                  listStyle: 'none',
                  lineHeight: '44px',
                  height: 44,
                  cursor: 'pointer',
                  color: currentProductFontColor,
                  ':hover': {
                    color: theme.background.test300,
                  },
                }}
              >
                {index === items.length - 1 && (
                  <Box xs={{ opacity: 0.2, paddingTop: 8, paddingBottom: 8 }}>
                    <Divider color={currentProductFontColor} />
                  </Box>
                )}
                <motion.div variants={itemVariants}>{item.name}</motion.div>
              </Li>
            </Link>
          ))}
        </Ul>
      </Box>

      <Box
        xs={{ width: '50%', height: '100%', position: 'relative' }}
        xxl={{ height: '340px' }}
      >
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={currentSelected}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 6 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            style={{ width: '100%', height: '100%' }}
          >
            {currentSelected === oneKeyProduct.mini.name && (
              <StaticImage
                loading="eager"
                draggable={false}
                css={{ width: '100%', height: '100%' }}
                src="./images/OneKeyMini.png"
                alt="OneKeyMini"
              />
            )}
            {currentSelected === oneKeyProduct.lite.name && (
              <StaticImage
                loading="eager"
                draggable={false}
                css={{ width: '90%', height: 'auto', marginTop: '-30%' }}
                src="./images/OneKeyLite.png"
                alt="OneKeyLite"
              />
            )}
            {currentSelected === oneKeyProduct.touch.name && (
              <StaticImage
                loading="eager"
                draggable={false}
                css={{ width: '100%', height: '100%' }}
                src="./images/OneKeyTouch.png"
                alt="OneKeyTouch"
              />
            )}
            {currentSelected === 'shop' && (
              <StaticImage
                loading="eager"
                draggable={false}
                css={{ width: '100%', height: '100%' }}
                src="./images/Shop.png"
                alt="Shop"
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
            <StaticImage src="./images/OneKeyTouch.png" alt="OneKeyTouch" />
            <StaticImage src="./images/Shop.png" alt="Shop" />
          </Box>,
          document.body,
        )}
    </Box>
  );
};
