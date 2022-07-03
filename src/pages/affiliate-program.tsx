import { graphql } from 'gatsby';

export { AffiliateProgram as default } from '../components/pages/AffiliateProgram';

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["common", "affiliate-program"] }
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
