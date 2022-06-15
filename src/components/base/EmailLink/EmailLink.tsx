import { FC } from 'react';

interface EmailLinkProps {
  email: string;
  subject?: string;
  children?: React.ReactNode;
}

export const EmailLink: FC<EmailLinkProps> = (props) => {
  const { email, subject = '', children, ...others } = props;
  const href = `mailto:${email}?subject=${subject}`;

  return (
    <a target="_blank" rel="noreferrer" href={href} {...others}>
      {children}
    </a>
  );
};
