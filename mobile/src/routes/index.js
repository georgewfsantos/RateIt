import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DashboardRoutes from './DashboardRoutes';
import AuthRoutes from './AuthRoutes';

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
      <Stack.Screen name="AuthRoutes" component={AuthRoutes} />
    )}
  </Stack.Navigator>
);
