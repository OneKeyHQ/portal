import { FC } from 'react';

import { useOneKeyVersion } from '../../../data';
import { Button, ButtonProps } from '../Button';
import { Logo } from '../Logo';

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
        Launch App
      </Button>
    </a>
  );
};
