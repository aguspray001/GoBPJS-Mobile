import moment from 'moment';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button} from '.';

const CardHistory = ({
  title,
  navigation,
  date,
  currentStatus,
  desc,
  width,
  height,
}) => {
  const dateFix = moment(date).format('MM/DD/YYYY (dddd)');
  return (
    <View style={styles.container(width, height)}>
      <Text style={{fontSize: 16, fontWeight: '500', marginBottom: 10}}>
        {title}
      </Text>
      <View style={styles.textWrapper}>
        <Text>Tanggal</Text>
        <View style={styles.valueWrapper}>
          <Text> :</Text>
          <Text> {dateFix}</Text>
        </View>
      </View>
      <View style={styles.textWrapper}>
        <Text>Deskripsi</Text>
        <View style={styles.valueWrapper}>
          <Text> :</Text>
          <Text> {desc}</Text>
        </View>
      </View>
      <View style={{position: 'absolute', right: 10, top: 15}}>
        <Button
          title="Check"
          width="25%"
          height="4.8%"
          onPress={() => navigation.replace('DetailHistory',{currentStatus: currentStatus})}
        />
      </View>
    </View>
  );
};

export default CardHistory;

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
    position: 'relative',
  }),
  textWrapper: {
    width: wp('67%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  valueWrapper: {width: wp('50%'), flexDirection: 'row'},
});
