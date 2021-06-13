import React from 'react';
import 'react-native-gesture-handler';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { GRAPHQL_URL } from './src/config';
import Navigation from './src/navigation';

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
}
