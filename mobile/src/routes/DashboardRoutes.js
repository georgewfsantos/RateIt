import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Businesses from '../pages/Businesses';
import Comment from '../pages/Comment';
import Profile from '../pages/Profile';

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

      <Dashboard.Screen name="Comment" component={Comment} />

      <Dashboard.Screen name="Profile" component={Profile} />
    </Dashboard.Navigator>
  );
}
