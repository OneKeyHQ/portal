import { FC, createElement } from 'react';

import { Button, ButtonProps, Flex, Link } from '../../../../base';

import { InfoText } from './InfoText';

const iconSize = {
  width: 24,
  height: 24,
};

export interface DownloadButtonProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
  information: string[] | string;
  buttonType?: ButtonProps['variant'];
  buttonSize?: ButtonProps['size'];
  url?: string;
}

export const DownloadButton: FC<DownloadButtonProps> = (props) => {
  const {
    information,
    text,
    icon,
    url = '',
    buttonSize = 'large',
    buttonType = 'outlined',
  } = props;

  return (
    <Flex
      xs={{
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        flex: 1,
        maxWidth: 220,
      }}
    >
      <Link css={{ width: '100%' }} to={url}>
        <Button
          fillWidth
          leftIcon={createElement(icon, iconSize)}
          size={buttonSize}
          variant={buttonType}
        >
          {text}
        </Button>
      </Link>

      <Flex xs={{ flexDirection: 'column', paddingTop: 8 }}>
        {Array.isArray(information) ? (
          information.map((info) => <InfoText key={info}>{info}</InfoText>)
        ) : (
          <InfoText>{information}</InfoText>
        )}
      </Flex>
    </Flex>
  );
};
