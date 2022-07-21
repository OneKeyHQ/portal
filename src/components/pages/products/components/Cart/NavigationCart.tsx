import { FC, ReactNode } from 'react';

import { Box, Container, Flex, OnlyDisplay } from '../../../../base';
import { useIntroductionSectionCenterPosition } from '../../atoms';

import { AddToCartButton } from './components/AddToCartButton';
import { ProductName } from './components/ProductName';
import { ProductPrice } from './components/ProductPrice';

export interface NavigationCartProps {
  children?: ReactNode;
}

export const NavigationCart: FC<NavigationCartProps> = (props) => {
  const { children } = props;
  const [centerPosition] = useIntroductionSectionCenterPosition();

  if (!centerPosition) {
    return null;
  }

  return (
    <OnlyDisplay m l xl xxl>
      <Box
        xs={{
          background: `rgba(240, 241, 242, .9)`,
          paddingTop: 16,
          paddingBottom: 16,
          paddingLeft: 24,
          paddingRight: 24,
          backdropFilter: `blur(10px)`,
          WebkitBackdropFilter: `blur(10px)`,
        }}
      >
        <Container>
          <Flex
            xs={{
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box xs={{ flex: 1 }}>
              <ProductName>OneKey Mini</ProductName>
            </Box>

            <Flex xs={{ alignItems: 'center', gap: 8 }}>
              <ProductPrice>$200</ProductPrice>

              <AddToCartButton />
            </Flex>
          </Flex>
        </Container>
        {children}
      </Box>
    </OnlyDisplay>
  );
};
