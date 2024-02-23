import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SectionHeader = ({title, isDash}) => (
  <View style={styles.rowContainer}>
    <Text style={styles.offertxt}>{title}</Text>
    {!isDash && (
      <LinearGradient
        colors={['#00486B', 'rgba(0, 72, 107, 0)']}
        style={styles.gradientBorder}
      />
    )}
  </View>
);

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  offertxt: {
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: '700',
    margin: 10,
    color: 'rgba(0, 72, 107, 1)',
  },
  gradientBorder: {
    height: 1,
    width: 20,
    marginLeft: 10,
    marginTop: 2,
  },
});

export default SectionHeader;
