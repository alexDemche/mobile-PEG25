import React from 'react';
import 'react-native-gesture-handler';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import { GRAPHQL_URL } from './src/config';
import Navigation from './src/navigation';
import { useColorTheme } from './src/hooks/useColorTheme';

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export default function App() {
  const theme = useColorTheme();

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </ApolloProvider>
  );
}
