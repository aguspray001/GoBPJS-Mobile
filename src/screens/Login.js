import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import {IconSplash} from '../assets/icon';
import {Button} from '../components';
import {colors} from '../constant/colors';
import { secureGetData } from '../constant/storage';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch({type: 'sign-in', payload:{email, password, navigation}})
  }

  return (
    <View style={styles.container}>
      <IconSplash width={90} height={90} />
      <Text style={{fontSize: 16, fontWeight: '500', marginTop: 30}}>
        Login to your Account
      </Text>
      <TextInput
        style={styles.textInput}
        outlineColor={colors.primary}
        mode="outlined"
        theme={{colors: {primary: 'green', underlineColor: 'transparent'}}}
        label="Email"
        onChangeText={(e)=>setEmail(e)}
      />
      <TextInput
        style={styles.textInput}
        outlineColor={colors.primary}
        mode="outlined"
        theme={{colors: {primary: 'green', underlineColor: 'transparent'}}}
        label="Password"
        onChangeText={(e)=>setPassword(e)}
      />
      <View style={{alignSelf: 'center', marginTop: 40}}>
        <Button
          title="Sign In"
          width="45%"
          height="5.8%"
          onPress={() => handleLogin()}
        />
        <TouchableOpacity
          style={styles.register}
          onPress={() => navigation.navigate('Register')}>
          <Text>Create your Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

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
