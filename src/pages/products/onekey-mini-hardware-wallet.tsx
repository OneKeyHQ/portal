import { graphql } from 'gatsby';

export { OneKeyMini as default } from '../../components/pages/products/OneKeyMini';

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
