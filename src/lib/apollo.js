import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'

const API_URL = import.meta.env.VITE_API_URL || 'https://api.bponi.com/x'

const httpLink = new HttpLink({
  uri: API_URL,
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

export default apolloClient
