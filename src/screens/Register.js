import moment from 'moment';
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
import {Button, DatePicker} from '../components';
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
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

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
    } else {
      showMessage('Kesalahan pada pengisian data registrasi', 'error');
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setBirthDate(moment(currentDate).format('YYYY-MM-DD').toString());
  };
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
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
          theme={{colors: {primary: 'green', underlineColor: 'transparent', text:'#000', background:'#fff', placeholder:colors.primary}}}
          label="Nama Lengkap"
          onChangeText={e => setName(e)}
        />
        <TextInput
          style={styles.textInput}
          outlineColor={colors.primary}
          mode="outlined"
          theme={{colors: {primary: 'green', underlineColor: 'transparent', text:'#000', background:'#fff', placeholder:colors.primary}}}
          label="NIK"
          onChangeText={e => setNoNIK(e)}
        />
        <TouchableOpacity onPress={() => showDatepicker()}>
          <TextInput
            style={styles.textInput}
            outlineColor={colors.primary}
            mode="outlined"
            theme={{colors: {primary: 'green', underlineColor: 'transparent', text:'#000', background:'#fff', placeholder:colors.primary}}}
            label="Tanggal Lahir"
            value={birthDate}
            onFocus={() => showDatepicker()}
            onChangeText={e => setBirthDate(e)}
          />
        </TouchableOpacity>
        {show && <DatePicker onChange={onChange} date={date} />}
        <TextInput
          style={styles.textInput}
          outlineColor={colors.primary}
          mode="outlined"
          theme={{colors: {primary: 'green', underlineColor: 'transparent', text:'#000', background:'#fff', placeholder:colors.primary}}}
          label="Nomor BPJS"
          onChangeText={e => setNoBPJS(e)}
        />
        <TextInput
          style={styles.textInput}
          outlineColor={colors.primary}
          mode="outlined"
          theme={{colors: {primary: 'green', underlineColor: 'transparent', text:'#000', background:'#fff', placeholder:colors.primary}}}
          label="Email"
          onChangeText={e => setEmail(e)}
        />
        <TextInput
          style={styles.textInput}
          outlineColor={colors.primary}
          mode="outlined"
          theme={{colors: {primary: 'green', underlineColor: 'transparent', text:'#000', background:'#fff', placeholder:colors.primary}}}
          label="Password"
          secureTextEntry={true}
          onChangeText={e => setPassword(e)}
        />
        <TextInput
          style={styles.textInput}
          outlineColor={colors.primary}
          mode="outlined"
          theme={{colors: {primary: 'green', underlineColor: 'transparent', text:'#000', background:'#fff', placeholder:colors.primary}}}
          label="Re-Password"
          secureTextEntry={true}
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
