import { graphql } from 'gatsby';

export { Cryptos as default } from '../../components/pages/Cryptos';

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
