import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthHomeScreen } from '../screens/AuthHomeScreen.tsx';
import { LoginScreen } from '../screens/LoginScreen.tsx';

export const AuthStackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="AuthHome" component={AuthHomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
