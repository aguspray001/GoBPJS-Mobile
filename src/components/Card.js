import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {IconClaim, IconHistory, IconProfile, IconQrCode} from '../assets/icon';

const Card = ({title, width, height, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(width, height)} onPress={onPress}>
      {title === 'Barcode' ? (
        <IconQrCode width={wp('10%')} height={hp('7%')} />
      ) : title === 'Profile' ? (
        <IconProfile width={wp('10%')} height={hp('7%')} />
      ) : (
        <IconHistory width={wp('10%')} height={hp('7%')} />
      )}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: (width, height) => ({
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(width),
    height: hp(height),
    backgroundColor: '#ffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 12,
    },
    shadowOpacity: 0.8,
    shadowRadius: 16.0,

    elevation: 5,
  }),
  title: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '400',
  },
});
