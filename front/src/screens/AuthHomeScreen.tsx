import React from 'react';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParams } from '../navigations/AuthStackNavigator.tsx';
import { authStackNavigations } from '../constants';

type AuthHomeScreenProps = StackScreenProps<AuthStackParams, typeof authStackNavigations.AUTH_HOME>;

export const AuthHomeScreen = ({ navigation }: AuthHomeScreenProps) => {
  return (
    <SafeAreaView>
      <View>
        <Button title="Move Login" onPress={() => navigation.navigate(authStackNavigations.LOGIN)} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
