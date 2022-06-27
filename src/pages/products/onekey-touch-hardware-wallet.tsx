import { graphql } from 'gatsby';

export { OneKeyTouch as default } from '../../components/pages/products/OneKeyTouch';

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
