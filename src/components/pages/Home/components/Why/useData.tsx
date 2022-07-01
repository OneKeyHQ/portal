import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

export function useData() {
  const { t } = useTranslation();

  const title1 = t('title__beginner_friendly');
  const title2 = t('title__software_and_hardware_better_together');
  const title3 = t('title__the_hub_for_your_cryptos');
  const title4 = t('title__ultra_fast_customer_service_response');

  return [
    {
      image: <StaticImage src="./images/Home1.jpg" alt={title1} />,
      title: title1,
      description: t('title__beginner_friendly_desc'),
      link: 'https://help.onekey.so/hc/sections/360001102996',
    },
    {
      image: <StaticImage src="./images/Home2.jpg" alt={title2} />,
      title: title2,
      description: t('title__software_and_hardware_better_together_desc'),
      link: 'https://help.onekey.so/hc/articles/360002184256-Why-Use-Hardware-Wallets-to-Manage-Private-Keys-',
    },
    {
      image: <StaticImage src="./images/Home3.jpg" alt={title3} />,
      title: title3,
      description: t('title__the_hub_for_your_cryptos_desc'),
      link: 'https://onekey.so/cryptos',
    },
    {
      image: <StaticImage src="./images/Home4.jpg" alt={title4} />,
      title: title4,
      description: t('title__ultra_fast_customer_service_response_desc'),
      link: 'https://help.onekey.so',
    },
  ];
}
