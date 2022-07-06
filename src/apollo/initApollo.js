import { ApolloClient } from 'apollo-client';

import { setContext } from '@apollo/client/link/context';

import { InMemoryCache } from 'apollo-cache-inmemory';

import { createUploadLink } from 'apollo-upload-client';

import { API } from './config';
import { getTokenWithExpiry } from './helpers/HandleToken';

const httpLink = createUploadLink({ uri: API, credentials: 'include' });

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const GET_AUTH_TOKEN = getTokenWithExpiry();

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: GET_AUTH_TOKEN ? `Bearer ${GET_AUTH_TOKEN}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
