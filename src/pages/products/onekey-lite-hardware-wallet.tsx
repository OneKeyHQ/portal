import { graphql } from 'gatsby';

export { OneKeyLite as default } from '../../components/pages/products/OneKeyLite';

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["common", "product", "onekey-lite-hardware-wallet"] }
        language: { eq: $language }
      }
    ) {
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
