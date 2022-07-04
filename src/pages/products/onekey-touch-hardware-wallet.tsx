import { graphql } from 'gatsby';

export { OneKeyTouch as default } from '../../components/pages/products/OneKeyTouch';

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["common", "product", "onekey-touch-hardware-wallet"] }
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
