import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthHomeScreen } from '../../screens/auth/AuthHomeScreen.tsx';
import { LoginScreen } from '../../screens/auth/LoginScreen.tsx';
import { authStackNavigations } from '../../constants';
import { SignupScreen } from '../../screens/auth/SignupScreen.tsx';

export type AuthStackParams = {
  [authStackNavigations.AUTH_HOME]: undefined;
  [authStackNavigations.LOGIN]: undefined;
  [authStackNavigations.SIGNUP]: undefined;
};

const Stack = createStackNavigator<AuthStackParams>();

export const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: { fontSize: 15 },
        headerTintColor: 'black',
        cardStyle: { backgroundColor: 'white' },
        headerStyle: { backgroundColor: 'white', shadowColor: 'gray' },
      }}
    >
      <Stack.Screen
        name={authStackNavigations.AUTH_HOME}
        component={AuthHomeScreen}
        options={{ headerTitle: '', headerShown: false }}
      />
      <Stack.Screen name={authStackNavigations.LOGIN} component={LoginScreen} options={{ headerTitle: 'Login' }} />
      <Stack.Screen name={authStackNavigations.SIGNUP} component={SignupScreen} options={{ headerTitle: 'Sing up' }} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
