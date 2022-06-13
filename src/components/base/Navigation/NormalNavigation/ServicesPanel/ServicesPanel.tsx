import { FC, ReactNode } from 'react';

import { Box } from '../../../Box';

export interface ServicesPanelProps {
  children?: ReactNode;
  isActive?: boolean;
}

export const ServicesPanel: FC<ServicesPanelProps> = (props) => {
  const { children, isActive } = props;

  if (!isActive) return null;

  return <Box> {children}</Box>;
};
