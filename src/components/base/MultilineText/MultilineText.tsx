import { FC, Fragment, ReactNode } from 'react';

import { splitMultiline } from '../../../utils';

export interface MultilineTextProps {
  children?: ReactNode;
  text: string;
}

export const MultilineText: FC<MultilineTextProps> = (props) => {
  const { children, text } = props;
  const multiLineText = splitMultiline(text);

  return (
    <Fragment key={text}>
      {multiLineText.map((line, index) => (
        <Fragment key={line}>
          {line}
          {index !== multiLineText.length - 1 && <br />}
        </Fragment>
      ))}
      {children}
    </Fragment>
  );
};
