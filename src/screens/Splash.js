import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconSplash2} from '../assets/icon';
import {colors} from '../constant/colors';
import {fonts} from '../constant/fonts';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MainApp');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.page}>
      <IconSplash2 width={120} heigth={120} />
      <Text style={styles.title}>Go BPJS</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: colors.white,
    fontFamily: fonts.primary[600],
  },
});
