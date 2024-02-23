import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const OrderAgain = ({text, code, onPress}) => (
  <View style={styles.itemContainer}>
    <Image source={require('../assets/icons/chai.png')} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.primaryText}>{text}</Text>
      <Text style={styles.secondaryText}>{code}</Text>
    </View>
    <TouchableOpacity
      style={{
        //  position: 'relative',
        // bottom: -10,
        marginLeft: 'auto',
        marginTop: 'auto',
        zIndex: 2,
        overflow: 'visible',
      }}
      onPress={() => {}}>
      <View
        style={{
          backgroundColor: 'white',
          borderWidth: 1.33,
          borderColor: 'rgba(236, 238, 240, 1)',
          borderRadius: 5,
          width: 30,
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'rgba(0, 72, 107, 1)',
            fontSize: 20,
            fontWeight: '600',
          }}>
          +
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    width: 228,
    height: 60,
    marginTop: 5,
    marginLeft: 15,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderColor: 'rgba(236, 238, 240, 1)',
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'visible',
    position: 'relative',
    zIndex: 1,
  },
  image: {
    resizeMode: 'cover',
    marginRight: 10,
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
    fontWeight: '600',
    color: 'rgba(0, 72, 107, 1)',
    marginTop: 5,
  },
  button: {
    position: 'absolute',
    bottom: -15,
    right: -25,
    backgroundColor: 'white',
    borderWidth: 1.33,
    borderColor: 'rgba(236, 238, 240, 1)',
    borderRadius: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  buttonText: {
    color: 'rgba(0, 72, 107, 1)',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default OrderAgain;
