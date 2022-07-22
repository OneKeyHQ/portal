import { FC, ReactNode } from 'react';

import { Box, Container, Flex, OnlyDisplay } from '../../../../base';
import { useIntroductionSectionCenterPosition } from '../../atoms';
import { useBuy } from '../../hooks/useBuy';
import { ProductInformationProps } from '../ProductInformation';

import { AddToCartButton } from './components/AddToCartButton';
import { ProductName } from './components/ProductName';
import { ProductPrice } from './components/ProductPrice';

export interface NavigationCartProps extends ProductInformationProps {
  children?: ReactNode;
}

export const NavigationCart: FC<NavigationCartProps> = (props) => {
  const { children, name, price, shopProductId } = props;
  const [centerPosition] = useIntroductionSectionCenterPosition();
  const { buyButtonProps } = useBuy({ shopProductId });

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
          position: 'relative',
          zIndex: 1,
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
              <ProductName>{name}</ProductName>
            </Box>

            <Flex xs={{ alignItems: 'center', gap: 8 }}>
              <ProductPrice>{price.formatted}</ProductPrice>

              <AddToCartButton buttonProps={buyButtonProps} />
            </Flex>
          </Flex>
        </Container>
        {children}
      </Box>
    </OnlyDisplay>
  );
};
