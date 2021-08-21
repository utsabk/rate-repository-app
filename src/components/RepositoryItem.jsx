import React from 'react';
import ItemHeader from './ItemHeader';
import ItemStats from './ItemStats';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
  },
});

const Item = ({ item }) => {
  return (
    <View style={styles.flexContainer}>
      <ItemHeader item={item} />
      <ItemStats item={item} />
    </View>
  );
};

export default Item;
