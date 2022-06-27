import { useNavigationDataObject } from '../../../common/Navigation/useNavigationData';

export function useOnekeyMiniData() {
  const { shop } = useNavigationDataObject();

  const onekeyMiniData = {
    title: 'Onekey Mini',
    shops: shop.subItems,
    product: {
      name: 'Onekey Mini',
      slogan: 'Crypto Hardware Wallet',
      description:
        'Secure, buy, exchange, grow your crypto and manage your NFTs with our new Bluetooth-enabled hardware wallet. All your digital assets secured in one place.',
      price: {
        value: 58,
        formatted: '$58.00',
      },
      shopId: '41169098178722',
    },
  };

  return onekeyMiniData;
}
