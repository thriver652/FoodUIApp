import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const OfferItem = ({text, code}) => (
  <View style={styles.itemContainer}>
    <Image
      source={require('../assets/icons/offerImg.png')}
      style={styles.image}
    />
    <View style={styles.textContainer}>
      <Text style={styles.primaryText}>{text}</Text>
      <Text style={styles.secondaryText}>{code}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    width: 254,
    height: 68,
    marginTop: 5,
    marginLeft: 15,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderColor: 'rgba(210, 210, 240, 1)',
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
    margin: 15,
  },
  textContainer: {
    flexDirection: 'column',
  },
  primaryText: {
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: '600',
    color: 'rgba(0, 72, 107, 1)',
  },
  secondaryText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(126, 134, 140, 1)',
    marginTop: 5,
  },
});

export default OfferItem;
