import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthHomeScreen } from '../screens/AuthHomeScreen.tsx';
import { LoginScreen } from '../screens/LoginScreen.tsx';
import { authStackNavigations } from '../constants';

export type AuthStackParams = {
  [authStackNavigations.AUTH_HOME]: undefined;
  [authStackNavigations.LOGIN]: undefined;
};

export const AuthStackNavigator = () => {
  const Stack = createStackNavigator<AuthStackParams>();
  return (
    <Stack.Navigator>
      <Stack.Screen name={authStackNavigations.AUTH_HOME} component={AuthHomeScreen} />
      <Stack.Screen name={authStackNavigations.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
