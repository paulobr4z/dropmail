import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  // uri: 'https://dropmail.me/api/graphql/cde31e7c-2daf-449b-9e3c-451081aa01f9',
  uri: 'https://dropmail.me/api/graphql/web-test-20230611ORGg6',
  cache: new InMemoryCache(),
})
