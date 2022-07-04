import { graphql } from 'gatsby';

export { OneKeyMini as default } from '../../components/pages/products/OneKeyMini';

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["common", "product", "onekey-touch-mini-wallet"] }
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
