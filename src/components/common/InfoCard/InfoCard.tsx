import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, BoxProps, Span } from '../../base/Box';

export interface InfoCardProps extends BoxProps {
  children?: ReactNode;
  imageNode?: ReactNode;
  buttonNode?: ReactNode;
  mainTitle?: string | ReactNode;
}

export const InfoCard: FC<InfoCardProps> = (props) => {
  const { children, imageNode, mainTitle, buttonNode, ...otherProps } = props;
  const theme = useTheme();

  return (
    <Box
      xs={{
        borderRadius: 40,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: theme.colors.test100,
        padding: 40,
        height: 400,
      }}
      m={{ height: 400, padding: 40, flex: 1 }}
      l={{ height: 548, padding: 64 }}
      externalProps={otherProps}
    >
      {mainTitle && (
        <Span
          xs={{
            position: 'relative',
            color: theme.colors.test500,
            zIndex: 1,
            ...theme.text.medium600,
          }}
          m={{ ...theme.text.medium700 }}
          l={{ ...theme.text.medium800 }}
        >
          {mainTitle}
        </Span>
      )}

      <Box
        xs={{
          position: 'relative',
          marginTop: 40,
          zIndex: 1,
        }}
      >
        {buttonNode}
      </Box>

      {children}

      <Box
        css={{
          width: 420,
          height: 420,
          position: 'absolute',
          zIndex: 0,
        }}
        xs={{ right: -210, bottom: -40 }}
        l={{ right: -80, bottom: -10 }}
        xl={{ right: 0, bottom: 0 }}
      >
        {imageNode}
      </Box>
    </Box>
  );
};
