import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { GRAPHQL_URL } from './src/config';

import { ThemeProvider } from 'styled-components';

import Navigation from './src/navigation';
import { useColorTheme } from './src/hooks/useColorTheme';

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export default function App() {
  const currentTheme = useColorTheme();
  const statusBarColor = currentTheme.name === 'dark' ? 'light' : 'dark';

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={currentTheme}>
        <Navigation />
        <StatusBar style={statusBarColor} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
