import { FC } from 'react';

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
        Free Download
      </Button>
    </Link>
  );
};
