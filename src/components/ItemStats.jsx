import React from 'react';
import theme from '../theme';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  flexHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  flexStat: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const ItemStats = ({ item }) => {
  return (
    <View style={styles.flexHorizontal}>
      <View style={styles.flexStat}>
        <Text style={{ fontWeight: theme.fontWeights.bold }}>
          {item.stargazersCount}
        </Text>
        <Text>Stars </Text>
      </View>

      <View style={styles.flexStat}>
        <Text style={{ fontWeight: theme.fontWeights.bold }}>
          {item.forksCount}
        </Text>
        <Text>Forks </Text>
      </View>

      <View style={styles.flexStat}>
        <Text style={{ fontWeight: theme.fontWeights.bold }}>
          {item.reviewCount}
        </Text>
        <Text>Reviews </Text>
      </View>

      <View style={styles.flexStat}>
        <Text style={{ fontWeight: theme.fontWeights.bold }}>
          {item.ratingAverage}
        </Text>
        <Text>Rating </Text>
      </View>
    </View>
  );
};

export default ItemStats;
