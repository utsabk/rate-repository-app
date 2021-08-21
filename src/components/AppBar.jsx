import React from 'react';
import { View,Text,Pressable,StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor:theme.colors.primary
  },
  text:{
      color: theme.colors.textPrimary,
      fontSize:theme.fontSizes.subheading,
      fontWeight: theme.fontWeights.bold,
      margin:5
  }
});

const AppBar = () => {
  return <View style={styles.container}><Pressable><Text style={styles.text}>Repositories</Text></Pressable></View>;
};

export default AppBar;
