import React from 'react';
import theme from '../theme';
import { View, Image, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    avatar: {
      width: 50,
      height: 50,
    },
    flexHorizontal: {
      flexDirection: 'row',
  
    },
    flexVertical: {
      flexDirection: 'column',
      paddingHorizontal:10,

    },
    name: {
      fontSize: theme.fontSizes.subheading,
      fontWeight: theme.fontWeights.bold,
    },
    tag: {
      color: theme.colors.textSecondary,
      backgroundColor: theme.colors.primary,
      padding: theme.paddings.mid,
      alignSelf: 'flex-start',
      borderRadius:5
    },
  });

const ItemHeader = ({ item }) => {
    return (
  
        <View style={styles.flexHorizontal}>
          <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
          <View style={styles.flexVertical}>
            <Text style={styles.name}>{item.fullName}</Text>
            <Text>{item.description}</Text>
            <Text style={styles.tag}>{item.language}</Text>
          </View>
        </View> 
    );
  };

  export default ItemHeader;
  