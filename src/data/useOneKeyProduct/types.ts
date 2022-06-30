export type ProductStatus = 'normal' | 'comingSoon' | 'soldOut' | 'disabled';

export type Shop = {
  name: string;
  url: string;
};

export type ProductItem = {
  status: ProductStatus;
  name: string;
  price: number;
  formattedPrice: string;
  description: string;
  path: string;
  shops: {
    amazonGlobal?: Shop;
    amazonJapan?: Shop;
    shopify?: Shop;
    youzan?: Shop;
  };
};

export type OneKeyProducts = {
  mini: ProductItem;
  touch: ProductItem;
  lite: ProductItem;
  pro: ProductItem;
};
