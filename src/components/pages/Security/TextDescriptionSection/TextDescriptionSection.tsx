import { FC, ReactNode } from 'react';

import { Box } from '../../../base';

export interface TextDescriptionSectionProps {
  children?: ReactNode;
}

export const TextDescriptionSection: FC<TextDescriptionSectionProps> = (
  props,
) => {
  const { children } = props;

  return <Box>TextDescriptionSection {children}</Box>;
};
