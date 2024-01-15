import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://api-ap-south-1.graphcms.com/v2/cl3rp79jw9fat01xi34b798k9/master",
  cache: new InMemoryCache(),
});

export const QUERY = gql`
  {
    
  }
`;
