import { graphql } from 'gatsby';

export { CoBrandedPartnership as default } from '../components/pages/CoBrandedPartnership';

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
