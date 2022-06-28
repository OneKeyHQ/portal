import { FC, Fragment, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Flex, H2, Span } from '../../../../../base';

export interface IntroductionTextProps {
  children?: ReactNode;
  name: string | string[];
  description: string;
}

export const IntroductionText: FC<IntroductionTextProps> = (props) => {
  const { children, name, description } = props;
  const theme = useTheme();

  return (
    <Flex
      xs={{
        flexDirection: 'column',
        transform: 'translateZ(0)',
        color: theme.colors.white,
        mixBlendMode: 'difference',
      }}
    >
      <H2
        xs={theme.text.medium700}
        m={theme.text.medium900}
        xl={theme.text.medium1000}
        xxl={theme.text.medium1200}
      >
        {typeof name === 'string' && name}
        {Array.isArray(name) &&
          name.map((item) => (
            <Fragment key={item}>
              <Span key={item}>{item}</Span>
              <br />
            </Fragment>
          ))}
      </H2>

      <Span
        css={{ paddingTop: 8 }}
        xs={theme.text.normal400}
        s={{ maxWidth: 360 }}
        l={{ maxWidth: 420 }}
        xl={theme.text.normal500}
        xxl={theme.text.normal600}
      >
        {description}
      </Span>

      {children}
    </Flex>
  );
};
