import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
  },
  text: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    margin: 5,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
          <Link to="/" underlayColor="#f0f4f7">
            <Text style={styles.text}>Repositories</Text>
          </Link>

          <Link to="/signin" underlayColor="#f0f4f7">
            <Text style={styles.text}>SignIn</Text>
          </Link>
        </ScrollView>
    </View>
  );
};

export default AppBar;
