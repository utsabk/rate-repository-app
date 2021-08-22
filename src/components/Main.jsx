import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route } from 'react-router-native';

import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Route exact path="/" component={RepositoryList} />
      <Route exact path="/signin" component={SignIn} />
    </View>
  );
};

export default Main;
