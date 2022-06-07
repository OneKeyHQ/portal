import { FC, createElement } from 'react';

import { Box, Button, Flex } from '../../../../base';

import { InfoText } from './InfoText';

const iconSize = {
  width: 24,
  height: 24,
};

export interface DownloadButtonProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
  information: string[];
}

export const DownloadButton: FC<DownloadButtonProps> = (props) => {
  const { information, text, icon } = props;

  return (
    <Flex
      xs={{
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box xs={{ paddingBottom: 8 }}>
        <Button
          leftIcon={createElement(icon, iconSize)}
          size="large"
          variant="outlined"
          xs={{ minWidth: 220 }}
        >
          {text}
        </Button>
      </Box>
      {information.map((info) => (
        <InfoText key={info}>{info}</InfoText>
      ))}
    </Flex>
  );
};
