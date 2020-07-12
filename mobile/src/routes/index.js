import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DashboardRoutes from './DashboardRoutes';
import SignInRoutes from './SignInRoutes';

const Stack = createStackNavigator();

export default (signedIn = false) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    {signedIn ? (
      <Stack.Screen name="Dashboard" component={DashboardRoutes} />
    ) : (
      <Stack.Screen name="SignIn" component={SignInRoutes} />
    )}
  </Stack.Navigator>
);
