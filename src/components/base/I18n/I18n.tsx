import { FC, Fragment, ReactNode } from 'react';

import { useTranslation } from 'gatsby-plugin-react-i18next';

import { removeTextBreak } from '../../../utils';
import { ResponsiveStyleKeys } from '../Box';
import { MultilineText } from '../MultilineText';
import { OnlyDisplay } from '../OnlyDisplay';

export interface I18nProps {
  children?: ReactNode;
  name?: string;
  text?: string;
  multiLine?: ResponsiveStyleKeys[];
  singleLine?: ResponsiveStyleKeys[];
}

export const I18n: FC<I18nProps> = (props) => {
  const {
    children,
    name,
    multiLine,
    singleLine,
    text: nativeText = '',
  } = props;
  const { t } = useTranslation();

  const text = name ? t(name) : nativeText;
  const singleLineText = removeTextBreak(text);

  if (!multiLine || !singleLine) {
    return (
      <Fragment key={text}>
        {singleLineText}
        {children}
      </Fragment>
    );
  }

  // ['m', 'l', 'xl', 'xxl'] => { m: true, l: true, xl: true, xxl: true }

  const arrayToObject = (acc: Record<string, boolean>, curr: string) => {
    acc[curr] = true;
    return acc;
  };

  const multiLineProps = multiLine.reduce<Record<string, boolean>>(
    arrayToObject,
    {},
  );

  const singleLineProps = singleLine.reduce<Record<string, boolean>>(
    arrayToObject,
    {},
  );

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
