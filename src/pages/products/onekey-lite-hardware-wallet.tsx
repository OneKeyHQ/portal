import { graphql } from 'gatsby';

export { OneKeyLite as default } from '../../components/pages/products/OneKeyLite';

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
