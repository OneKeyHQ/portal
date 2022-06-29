import { FC } from 'react';

import { useTranslation } from 'gatsby-plugin-react-i18next';

import { Button, ButtonProps, Link, Logo } from '../../base';

export interface DownloadButtonProps {
  override?: {
    button: ButtonProps;
  };
}

export const DownloadButton: FC<DownloadButtonProps> = (props) => {
  const {
    override = {
      button: {},
    },
  } = props;
  const { button = {} } = override;
  const { t } = useTranslation();

  return (
    <Link to="/download">
      <Button
        {...button}
        rightIcon={
          <Logo
            css={{
              width: 26,
              height: 26,
            }}
          />
        }
      >
        {t('action__free_download')}
      </Button>
    </Link>
  );
};
