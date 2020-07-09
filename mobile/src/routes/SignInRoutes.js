import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Businesses from '../pages/Businesses';

const SignIn = createStackNavigator();

export default function DashboardRoutes() {
  return (
    <SignIn.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#a9131e' },
      }}
    >
      <SignIn.Screen name="Businesses" component={Businesses} />
    </SignIn.Navigator>
  );
}
