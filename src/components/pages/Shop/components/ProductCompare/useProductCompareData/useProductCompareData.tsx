import { ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { useOneKeyProduct } from '../../../../../../data/useOneKeyProduct';

import battery from './images/battery.svg';
import bluetooth from './images/bluetooth.svg';
import control from './images/control.svg';
import display144 from './images/display144.svg';
import display31 from './images/display31.svg';
import none from './images/none.svg';
import touch from './images/touch.svg';
import usbc from './images/usbc.svg';

export type ProductCompareDetailItem = {
  name: string;
  icon?: string;
  value?: string;
};

export type ProductCompareItem = {
  image: ReactNode;
  price: string;
  productDetailUrl: string;
  name: string;
  productCompareDetail: ProductCompareDetailItem[];
};

export function useProductCompareData(): {
  items: {
    mini: ProductCompareItem;
    touch: ProductCompareItem;
  };
} {
  const product = useOneKeyProduct();
  const { t } = useTranslation();

  return {
    items: {
      mini: {
        image: <StaticImage src="./images/shop-compare-mini.png" alt="mini" />,
        name: product.mini.name,
        price: product.mini.formattedPrice,
        productDetailUrl: product.mini.path,
        productCompareDetail: [
          {
            name: t('title__ce_rohs_and_csprng'),
            value: t('content__certifications_and_standards'),
          },
          {
            name: t('title__display'),
            icon: display144,
            value: t('content__int_inch_ips_display_color', {
              value: 1.44,
            }),
          },
          {
            name: t('title__control'),
            icon: control,
            value: t('content__control_with_buttons'),
          },
          {
            name: t('title__battery'),
            icon: none,
            value: ' ',
          },
          {
            name: t('title__bluetooth'),
            icon: none,
            value: ' ',
          },
          {
            name: t('title__connector'),
            icon: usbc,
            value: t('content__usb_c_connector'),
          },
        ],
      },
      touch: {
        image: (
          <StaticImage src="./images/shop-compare-touch.png" alt="touch" />
        ),
        name: product.touch.name,
        price: product.touch.formattedPrice,
        productDetailUrl: product.touch.path,
        productCompareDetail: [
          {
            name: t('title__ce_rohs_and_csprng'),
            value: t('content__certifications_and_standards'),
          },
          {
            name: t('title__display'),
            icon: display31,
            value: t('content__int_inch_ips_display_color', {
              value: 3.1,
            }),
          },
          {
            name: t('title__control'),
            icon: touch,
            value: t('content__multi_touch_screen'),
          },
          {
            name: t('title__battery'),
            icon: battery,
            value: t('content__int_mah_battery', {
              value: 800,
            }),
          },
          {
            name: t('title__bluetooth'),
            icon: bluetooth,
            value: t('content__bluetooth'),
          },
          {
            name: t('title__connector'),
            icon: usbc,
            value: t('content__usb_c_connector'),
          },
        ],
      },
    },
  };
}
