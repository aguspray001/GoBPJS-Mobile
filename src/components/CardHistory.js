import moment from 'moment';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button} from '.';
import {colors} from '../constant/colors';

const CardHistory = ({
  title,
  navigation,
  date,
  currentStatus,
  desc,
  bp,
  width,
  height,
  mb
}) => {
  const dateFix = moment(date).format('MM/DD/YYYY (dddd)');
  return (
    <View style={styles.container(width, height, mb)}>
      <View style={styles.header}>
        <Text style={{fontSize: 16, color: 'white', fontWeight: '500'}}>
          No. saat ini: 50
        </Text>
        <Text style={{fontSize: 16, color: 'white', fontWeight: '500'}}>
          No. Anda: 8
        </Text>
      </View>
      <View styles={styles.content}>
        <Text style={{fontSize: 16, fontWeight: '500', marginBottom: 10, marginLeft:10, marginTop:10}}>
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
        <View style={styles.textWrapper}>
          <Text>Blood Pressure</Text>
          <View style={styles.valueWrapper}>
            <Text> :</Text>
            <Text> {bp}</Text>
          </View>
        </View>
      </View>
      <View style={{position: 'absolute', right: 10, bottom: wp('3%')}}>
        <Button
          title="Check"
          width="25%"
          height="4.8%"
          onPress={() =>
            navigation.replace('DetailHistory', {
              currentStatus: currentStatus,
            })
          }
        />
      </View>
    </View>
  );
};

export default CardHistory;

const styles = StyleSheet.create({
  container: (width, height, mb) => ({
    flex: 1,
    padding: 5,
    marginBottom:mb,
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
    width: wp('80%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft:10
  },
  valueWrapper: {width: wp('50%'), flexDirection: 'row'},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.secondary,
    width: '100%',
    borderRadius: 10,
    padding: 15,
  },
});
