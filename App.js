import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';

import { BASE_URL } from './src/config';

import { MainStackNavigator } from './src/navigators/MainStackNavigator';

const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});

const RootStack = createStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
            animationEnabled: false,
          }}>
          <RootStack.Screen name={'MainStack'} component={MainStackNavigator} />
        </RootStack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
