import { FC, ReactNode } from 'react';

import { graphql } from 'gatsby';

export interface NotFindProps {
  children?: ReactNode;
}

const NotFind: FC<NotFindProps> = (props) => {
  const { children } = props;

  return <div>404 {children}</div>;
};

export default NotFind;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
