import { FC, ReactNode } from 'react';

import { useContactUs } from '../../../data/useContactUs';
import { Button, ButtonProps } from '../../base/Button';
import { ArrowRightIcon } from '../../base/Icon';
import { Link } from '../../base/Link';

export interface ContactUsButtonProps {
  children?: ReactNode;
  buttonOverride?: ButtonProps;
}

export const ContactUsButton: FC<ContactUsButtonProps> = (props) => {
  const { children, buttonOverride = {} } = props;
  const contactUs = useContactUs();

  return (
    <Link to={contactUs.url}>
      <Button
        variant="outlined"
        rightIcon={<ArrowRightIcon width={24} height={24} />}
        {...buttonOverride}
      >
        Contact us
      </Button>

      {children}
    </Link>
  );
};
