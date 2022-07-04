import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { I18n } from '../../../../base';
import { Box, BoxProps, Span } from '../../../../base/Box';
import { MenuListArrowIcon } from '../../../../base/Icon';
import { Link } from '../../../../base/Link';

import { QuestionIcon } from './QuestionIcon';

export interface RightAreaProps extends BoxProps {
  children?: ReactNode;
}

export const RightArea: FC<RightAreaProps> = (props) => {
  const { children, ...otherProps } = props;
  const theme = useTheme();

  return (
    <Link to="https://help.onekey.so/hc/categories/360000170236-User-s-Guide">
      <Box
        xs={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 24,
          paddingBottom: 24,
          paddingLeft: 40,
        }}
        l={{
          padding: 38,
        }}
        xl={{
          padding: 64,
        }}
        externalProps={otherProps}
      >
        <Box
          xs={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
          l={{
            gap: 16,
          }}
        >
          <QuestionIcon />
          <Box xs={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <Span
              xs={{
                display: 'flex',
                alignItems: 'center',
                ...theme.text.medium600,
                color: theme.colors.test500,
              }}
            >
              <I18n name="menu__getting_started" />
              <MenuListArrowIcon />
            </Span>
          </Box>
          <Span
            xs={{
              ...theme.text.normal300,
              color: theme.colors.test300,
            }}
          >
            <I18n name="menu__getting_started_desc" />
          </Span>
        </Box>

        {children}
      </Box>
    </Link>
  );
};
