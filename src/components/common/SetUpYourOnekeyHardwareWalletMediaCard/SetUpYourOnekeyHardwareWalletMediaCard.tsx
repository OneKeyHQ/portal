import { FC, ReactNode } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { Button } from '../../base';
import { InfoCard } from '../InfoCard';

export interface SetUpYourOnekeyHardwareWalletMediaCardProps {
  children?: ReactNode;
}

export const SetUpYourOnekeyHardwareWalletMediaCard: FC<
  SetUpYourOnekeyHardwareWalletMediaCardProps
> = (props) => {
  const { t } = useTranslation();
  const { children } = props;
  const SetUpYourOnekeyHardwareWalletMediaCardData = {
    mainTitle: t('title__set_up_your_onekey_hardware_wallet'),
    button: t('action__getting_started'),
    link: 'https://help.onekey.so/hc/en-us/articles/4930350875919',
    imageNode: (
      <StaticImage draggable={false} src="./images/1.png" alt="illustration1" />
    ),
  };
  const { mainTitle, button, link, imageNode } =
    SetUpYourOnekeyHardwareWalletMediaCardData;

  return (
    <InfoCard
      link={link}
      mainTitle={mainTitle}
      imageNode={imageNode}
      buttonNode={<Button variant="outlined">{button}</Button>}
    >
      {children}
    </InfoCard>
  );
};
