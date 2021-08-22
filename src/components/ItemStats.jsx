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

const numFormatter = (num) =>{
    if(num > 999 && num < 1000000){
        return Number((num/1000).toFixed(1)) + 'K';
    }else if(num > 1000000){
        return Number((num/1000000).toFixed(1)) + 'M';
    }else if (num <= 999){
        return num;
    }
};

const ItemStats = ({ item }) => {
  return (
    <View style={styles.flexHorizontal}>
      <View style={styles.flexStat}>
        <Text style={{ fontWeight: theme.fontWeights.bold }}>
          {numFormatter(item.stargazersCount)}
        </Text>
        <Text>Stars </Text>
      </View>

      <View style={styles.flexStat}>
        <Text style={{ fontWeight: theme.fontWeights.bold }}>
          {numFormatter(item.forksCount)}
        </Text>
        <Text>Forks </Text>
      </View>

      <View style={styles.flexStat}>
        <Text style={{ fontWeight: theme.fontWeights.bold }}>
          {numFormatter(item.reviewCount)}
        </Text>
        <Text>Reviews </Text>
      </View>

      <View style={styles.flexStat}>
        <Text style={{ fontWeight: theme.fontWeights.bold }}>
          {numFormatter(item.ratingAverage)}
        </Text>
        <Text>Rating </Text>
      </View>
    </View>
  );
};

export default ItemStats;
