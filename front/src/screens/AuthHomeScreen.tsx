import React from 'react';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';

export const AuthHomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Button title="Move Login" onPress={() => navigation.navigate('Login')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
