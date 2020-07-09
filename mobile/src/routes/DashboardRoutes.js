import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Businesses from '../pages/Businesses';

const Dashboard = createStackNavigator();

export default function DashboardRoutes() {
  return (
    <Dashboard.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#a9131e' },
      }}
    >
      <Dashboard.Screen name="Businesses" component={Businesses} />
    </Dashboard.Navigator>
  );
}
