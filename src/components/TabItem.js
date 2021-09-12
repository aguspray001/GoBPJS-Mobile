import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  IconDoctor,
  IconHelp,
  IconHelpActive,
  IconHome,
  IconHomeActive,
  IconIuran,
  IconIuranActive,
} from '../assets/icon';
import {colors} from '../constant/colors';
import {fonts} from '../constant/fonts';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? (
        <IconHomeActive width={wp('5%')} height={hp('5%')} />
      ) : (
        <IconHome width={wp('5%')} height={hp('5%')} />
      );
    }
    if (title === 'Help') {
      return active ? (
        <IconHelpActive width={wp('5%')} height={hp('5%')} />
      ) : (
        <IconHelp width={wp('5%')} height={hp('5%')} />
      );
    }
    if (title === 'Iuran') {
      return active ? (
        <IconIuranActive width={wp('5%')} height={hp('5%')} />
      ) : (
        <IconIuran width={wp('5%')} height={hp('5%')} />
      );
    }
    return <IconDoctor />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
