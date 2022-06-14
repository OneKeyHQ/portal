import { FC, createElement } from 'react';

import { Button, ButtonProps, Flex } from '../../../../base';

import { InfoText } from './InfoText';

const iconSize = {
  width: 24,
  height: 24,
};

export interface DownloadButtonProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
  information: string[];
  buttonType?: ButtonProps['variant'];
}

export const DownloadButton: FC<DownloadButtonProps> = (props) => {
  const { information, text, icon, buttonType = 'outlined' } = props;

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
      <Button
        fillWidth
        leftIcon={createElement(icon, iconSize)}
        size="large"
        variant={buttonType}
      >
        {text}
      </Button>

      <Flex xs={{ flexDirection: 'column', paddingTop: 8 }}>
        {information.map((info) => (
          <InfoText key={info}>{info}</InfoText>
        ))}
      </Flex>
    </Flex>
  );
};
