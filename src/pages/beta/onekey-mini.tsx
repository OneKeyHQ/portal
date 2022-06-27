import { graphql } from 'gatsby';

export { OnekeyMini as default } from '../../components/pages/OnekeyMini';

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
