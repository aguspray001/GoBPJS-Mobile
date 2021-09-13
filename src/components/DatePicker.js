import DateTimePicker from '@react-native-community/datetimepicker';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const DatePicker = ({onChange, date}) => {

  return (
    <View>
        <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={'date'}
        is24Hour={true}
        display="default"
        onChange={onChange}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 50,
    position: 'relative',
  },
  title: {
    marginBottom: 40,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 18,
  },
  textInput: {
    height: 40,
    width: 250,
    marginTop: 20,
  },
  register: {alignSelf: 'center', marginTop: 20},
});

export default DatePicker;
