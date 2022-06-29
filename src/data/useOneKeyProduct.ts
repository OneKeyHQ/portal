export function useOneKeyProduct() {
  return {
    mini: {
      name: 'OneKey Mini',
      price: 58,
      formattedPrice: '$58.00',
      description: 'Mini sized, safety without compromise.',
      path: '/products/onekey-lite-hardware-wallet/',
      shopLink:
        'https://shop.onekey.so/products/onekey-mini-hardware-wallet?variant=41169098178722',
    },
    touch: {
      name: 'OneKey Touch',
      price: 135,
      formattedPrice: '$135.00',
      description:
        'All-new design, secure chip supercharged, beautiful and true color display.',
      path: '/products/onekey-touch-hardware-wallet/',
      shopLink: '',
    },
    lite: {
      name: 'OneKey Lite',
      price: 19.99,
      formattedPrice: '$19.99',
      description: 'A higher definition of private key cold storage.',
      path: '/products/onekey-lite-hardware-wallet/',
      shopLink: '',
    },
    pro: {
      name: 'OneKey Pro',
      price: 195,
      formattedPrice: '$195.00',
      description:
        'Biometric tech, optical encryption, so many reasons to go Pro.',
      path: '/products/onekey-pro-hardware-wallet/',
      shopLink: '',
    },
  };
}
