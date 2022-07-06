import { FC } from 'react';

import { useOneKeyVersion } from '../../../data';
import { I18n } from '../../base';
import { Button, ButtonProps } from '../../base/Button';
import { Logo } from '../../base/Logo';

export interface LaunchAppButtonProps {
  override?: {
    button: ButtonProps;
  };
}

export const LaunchAppButton: FC<LaunchAppButtonProps> = (props) => {
  const {
    override = {
      button: {},
    },
  } = props;
  const { button = {} } = override;
  const { formattedData } = useOneKeyVersion();

  return (
    <a href={formattedData.web.url} target="_blank" rel="noreferrer">
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
        <I18n name="action__launch_app" />
      </Button>
    </a>
  );
};
