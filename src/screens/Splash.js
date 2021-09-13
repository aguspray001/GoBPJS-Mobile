import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconSplash} from '../assets/icon';
import {colors} from '../constant/colors';
import {fonts} from '../constant/fonts';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.page}>
      <IconSplash width={120} heigth={120} />
      <Text style={styles.title}>Go BPJS</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: colors.white,
    fontFamily: fonts.primary[600],
  },
});
