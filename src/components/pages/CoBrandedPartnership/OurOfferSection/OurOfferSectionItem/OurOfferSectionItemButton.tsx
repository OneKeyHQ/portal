import { FC, ReactNode } from 'react';

import { ArrowRightIcon, Box, Button, Link } from '../../../../base';

export interface OurOfferSectionItemButtonProps {
  children?: ReactNode;
  link: string;
}

export const OurOfferSectionItemButton: FC<OurOfferSectionItemButtonProps> = (
  props,
) => {
  const { link, children } = props;

  return (
    <Box xs={{ display: 'flex', marginLeft: -16 }}>
      <Link to={link}>
        <Button
          variant="text"
          rightIcon={<ArrowRightIcon width={24} height={24} />}
        >
          {children}
        </Button>
      </Link>
    </Box>
  );
};
