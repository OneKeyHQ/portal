import { FC, Fragment, ReactNode } from 'react';

import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';

import { removeTextBreak } from '../../../utils';
import { ResponsiveStyleKeys } from '../Box';
import { MultilineText } from '../MultilineText';
import { OnlyDisplay } from '../OnlyDisplay';

export interface I18nProps {
  children?: ReactNode;
  name?: string;
  text?: string;
  multiLine?: ResponsiveStyleKeys[];
  alwaysMultiLine?: boolean;
  singleLine?: ResponsiveStyleKeys[];
  alwaysSingleLine?: boolean;
}

const defaultValue = {
  xs: true,
  s: true,
  m: true,
  l: true,
  xl: true,
  xxl: true,
};

// ['m', 'l', 'xl', 'xxl'] => { m: true, l: true, xl: true, xxl: true }

const arrayToObject = (acc: Record<string, boolean>, curr: string) => {
  acc[curr] = true;
  return acc;
};

export const I18n: FC<I18nProps> = (props) => {
  const {
    children,
    name,
    multiLine,
    singleLine,
    alwaysMultiLine = false,
    alwaysSingleLine = false,
    text: nativeText = '',
  } = props;
  const { t } = useTranslation();
  const i18n = useI18next();
  const notNeedSpace = ['ja', 'zh_HK', 'zh_CN'].includes(i18n.language);
  const text = name ? t(name) : nativeText;
  const singleLineText = removeTextBreak(text, !notNeedSpace);

  let multiLineProps;
  let singleLineProps;

  if (alwaysMultiLine) {
    multiLineProps = defaultValue;
    singleLineProps = {};
  } else if (alwaysSingleLine) {
    multiLineProps = {};
    singleLineProps = defaultValue;
  } else if (multiLine && singleLine) {
    if (multiLine) {
      multiLineProps = multiLine.reduce(arrayToObject, {});
    }
    if (singleLine) {
      singleLineProps = singleLine.reduce(arrayToObject, {});
    }
  }

  if (!multiLineProps || !singleLineProps) {
    return (
      <Fragment key={text}>
        {singleLineText}
        {children}
      </Fragment>
    );
  }

  return (
    <Fragment key={text || singleLineText || nativeText}>
      <OnlyDisplay display="inline" as="span" {...singleLineProps}>
        {singleLineText}
      </OnlyDisplay>

      <OnlyDisplay display="inline" as="span" {...multiLineProps}>
        <MultilineText text={text} />
      </OnlyDisplay>

      {children}
    </Fragment>
  );
};
