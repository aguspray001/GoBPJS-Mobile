import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Banner = ({title, saldo, claim, rent, width, height}) => {
  return (
    <View style={styles.container(width, height)}>
      <Text style={{fontSize: 16, fontWeight: '500', marginBottom: 10}}>
        {title}
      </Text>
      <View style={styles.textWrapper}>
        <Text>Claim</Text>
        <View style={styles.valueWrapper}>
          <Text> :</Text>
          <Text> {claim}</Text>
        </View>
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: (width, height) => ({
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
    width: wp(width),
    height: hp(height),
    backgroundColor: '#ffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 12,
    },
    shadowOpacity: 0.28,
    shadowRadius: 16.0,

    elevation: 5,
  }),
  textWrapper: {
    width: wp('84%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  valueWrapper: {width: wp('70%'), flexDirection: 'row'},
});
