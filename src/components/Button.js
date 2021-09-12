import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../constant/colors';

const Button = ({title, width, height, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container(width, height)}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (width, height) => ({
    width: wp(width),
    height: hp(height),
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  title: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
  },
});
