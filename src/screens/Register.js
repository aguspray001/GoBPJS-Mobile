import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {IconSplash} from '../assets/icon';
import {Button} from '../components';
import {showMessage} from '../constant/alert';
import {colors} from '../constant/colors';
import {secureGetData} from '../constant/storage';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [noNIK, setNoNIK] = useState('');
  const [noBPJS, setNoBPJS] = useState('');

  const dispatch = useDispatch();

  const handleRegis = () => {
    const payload = {
      email: email,
      name: name,
      ttl: birthDate,
      nik: noNIK,
      no_bpjs: noBPJS,
      password: password,
    };
    if (
      email !== '' ||
      name !== '' ||
      birthDate !== '' ||
      noNIK !== '' ||
      noBPJS !== '' ||
      password !== '' ||
      rePassword !== ''
    ) {
      if (password === rePassword) {
        dispatch({type: 'sign-up', payload: {...payload, navigation}});
      } else {
        showMessage('Konfirmasi password tidak cocok', 'error');
      }
    }else{
      showMessage('Kesalahan pada pengisian data registrasi', 'error');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <IconSplash width={90} height={90} />
        <Text style={{fontSize: 16, fontWeight: '500', marginTop: 30}}>
          Create your Account
        </Text>
        <TextInput
          style={styles.textInput}
          outlineColor={colors.primary}
          mode="outlined"
          theme={{colors: {primary: 'green', underlineColor: 'transparent'}}}
          label="Nama Lengkap"
          onChangeText={e => setName(e)}
        />
        <TextInput
          style={styles.textInput}
          outlineColor={colors.primary}
          mode="outlined"
          theme={{colors: {primary: 'green', underlineColor: 'transparent'}}}
          label="Tanggal"
          onChangeText={e => setBirthDate(e)}
        />
        <TextInput
          style={styles.textInput}
          outlineColor={colors.primary}
          mode="outlined"
          theme={{colors: {primary: 'green', underlineColor: 'transparent'}}}
          label="NIK"
          onChangeText={e => setNoNIK(e)}
        />
        <TextInput
          style={styles.textInput}
          outlineColor={colors.primary}
          mode="outlined"
          theme={{colors: {primary: 'green', underlineColor: 'transparent'}}}
          label="Nomor BPJS"
          onChangeText={e => setNoBPJS(e)}
        />
        <TextInput
          style={styles.textInput}
          outlineColor={colors.primary}
          mode="outlined"
          theme={{colors: {primary: 'green', underlineColor: 'transparent'}}}
          label="Email"
          onChangeText={e => setEmail(e)}
        />
        <TextInput
          style={styles.textInput}
          outlineColor={colors.primary}
          mode="outlined"
          theme={{colors: {primary: 'green', underlineColor: 'transparent'}}}
          label="Password"
          onChangeText={e => setPassword(e)}
        />
        <TextInput
          style={styles.textInput}
          outlineColor={colors.primary}
          mode="outlined"
          theme={{colors: {primary: 'green', underlineColor: 'transparent'}}}
          label="Re-Password"
          onChangeText={e => setRePassword(e)}
        />
        <View style={{alignSelf: 'center', marginTop: 40}}>
          <Button
            title="Sign Up"
            width="45%"
            height="5.8%"
            onPress={() => handleRegis()}
          />
          <TouchableOpacity
            style={styles.register}
            onPress={() => navigation.navigate('Login')}>
            <Text>Back to Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingHorizontal: 30,
    position: 'relative',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
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
