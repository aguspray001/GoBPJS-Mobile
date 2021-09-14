import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {VerticalStepIndicator} from '../components';
import {colors} from '../constant/colors';

const DetailHistory = ({route}) => {
  const { data } = route.params;
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '500',
          textAlign: 'center',
          marginTop: 30,
          marginBottom: 20,
        }}>
        Proses claim peserta BPJS:{' '}
      </Text>

      <VerticalStepIndicator currentStep={data.status} data={data} stepCount={4} />
    </View>
  );
};

export default DetailHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
