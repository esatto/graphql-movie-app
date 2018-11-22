import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: 'http://localhost:5000/graphql'
});

export const client = new ApolloClient({
  cache,
  link
});
