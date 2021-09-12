import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Button} from '../components';
import {showMessage} from '../constant/alert';
import {colors} from '../constant/colors';

const Register = ({navigation}) => {
  // const [kirim, setKirim] = useState(false);

  // useEffect(() => {
  //   if (kirim) {
  //     showMessage('lalalala', 'success');
  //   } else {
  //     showMessage('lalalala', 'danger');
  //   }
  // }, [kirim]);

  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Form Klaim BPJS</Text>
        <TextInput
          style={styles.textInput}
          outlineColor={colors.primary}
          mode="outlined"
          theme={{colors: {primary: 'green', underlineColor: 'transparent'}}}
          label="Nama Lengkap"
          //   onChangeText={e => setNamaLengkap(e)}
        />
        <TextInput
          style={styles.textInput}
          outlineColor={colors.primary}
          mode="outlined"
          theme={{colors: {primary: 'green', underlineColor: 'transparent'}}}
          label="Nomor BPJS"
          //   onChangeText={e => setNamaLengkap(e)}
        />
        <TextInput
          style={styles.textInput}
          outlineColor={colors.primary}
          mode="outlined"
          theme={{colors: {primary: 'green', underlineColor: 'transparent'}}}
          label="Keluhan"
          //   onChangeText={e => setNoBPJS(e)}
        />
        <TextInput
          style={styles.textInput}
          outlineColor={colors.primary}
          mode="outlined"
          theme={{colors: {primary: 'green', underlineColor: 'transparent'}}}
          label="Tujuan Berobat"
          //   onChangeText={e => setNoNIK(e)}
        />
        <View style={{alignSelf: 'center', marginTop: 40}}>
          <Button
            title="Kirim"
            width="40%"
            height="5.8%"
            // onPress={() => setKirim(e => !e)}
          />
        </View>
        <Text style={{marginBottom: 40, marginTop: 20}}>
          Note: Form di atas digunakan untuk keperluan pendaftaran klaim BPJS ke
          fakses peserta yang tercatat dalam Mobile JKN
        </Text>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    marginTop: 20,
  },
});
