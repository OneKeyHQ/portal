import { AnchorHTMLAttributes, FC, ReactNode } from 'react';

import { useTranslation } from 'gatsby-plugin-react-i18next';

import { Button, ButtonProps } from '../Button';
import { ShopIcon } from '../Icon';
import { Link } from '../Link';

export interface GoToShopButtonProps {
  children?: ReactNode;
  overrides?: {
    link?: AnchorHTMLAttributes<HTMLAnchorElement>;
    button?: ButtonProps;
  };
}

export const GoToShopButton: FC<GoToShopButtonProps> = (props) => {
  const { t } = useTranslation();

  const {
    children,
    overrides = {
      button: {},
      link: {},
    },
  } = props;

  const { button: buttonOverrides = {} } = overrides;

  return (
    <Link to="/shop">
      <Button
        rightIcon={<ShopIcon width={24} height={24} />}
        variant="outlined"
        {...buttonOverrides}
      >
        {t('action__go_to_shop')}
        {children}
      </Button>
    </Link>
  );
};
