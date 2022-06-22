import React from 'react';

import { Span } from '../../base';

export interface MultilineTextProps {
  children?: React.ReactNode;
  text: string | string[];
}

export const MultilineText: React.FC<MultilineTextProps> = (props) => {
  const { children, text } = props;

  if (Array.isArray(text)) {
    return (
      <>
        {text.map((line, index) => (
          <>
            <Span key={line}>{line}</Span>
            {index !== text.length - 1 && <br key={`${line}-br`} />}
          </>
        ))}
      </>
    );
  }

  return (
    <Span>
      {text}
      {children}
    </Span>
  );
};
