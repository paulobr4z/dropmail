import { ApolloClient, InMemoryCache } from '@apollo/client'

const cors = 'https://cors-anywhere.herokuapp.com/'
const token = 'web-test-20230611vPMTP'
const endpoint = 'https://dropmail.me/api/graphql/'

const client = new ApolloClient({
  uri: `${cors}${endpoint}${token}`,
  cache: new InMemoryCache(),
})

export { client }
