import jwtDecode from 'jwt-decode';
import React, {useEffect} from 'react';
import {ImageBackground, Linking, StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import {hospital2Bg} from '../assets/images';
import {Button} from '../components';
import {colors} from '../constant/colors';
import {secureGetData} from '../constant/storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Profile = ({navigation}) => {
  const [user, setUser] = React.useState('');
  const [statusUser, setStatusUser] = React.useState(null);
  const shareWAContent = `Hey, I need your help!`;

  useEffect(() => {
    secureGetData('token')
      .then(r => {
        const decodedToken = jwtDecode(r);
        setUser(decodedToken.user.name);
        setStatusUser(decodedToken.user.status);
      })
      .catch(e => e);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={hospital2Bg}
        style={styles.hero}
        imageStyle={{
          opacity: 0.5,
          backgroundColor: 'green',
          borderBottomRightRadius: 30,
        }}
        resizeMode="cover">
        <View style={styles.avatarWrapper}>
          <Avatar.Image
            size={90}
            source={require('../assets/images/avatar.png')}
          />
          <Text style={styles.name}>{user}</Text>
          <Text style={styles.status}>
            Status BPJS :
            <Text style={{fontWeight: '700'}}>
              {' '}
              {statusUser === 1 ? 'Aktif' : 'Tidak Aktif'}
            </Text>
          </Text>
        </View>
        <View
          style={{
            alignSelf: 'center',
            position: 'absolute',
            bottom: wp('-5px'),
          }}>
          <Button
            title="Help"
            width="45%"
            height="5.8%"
            onPress={() =>
              Linking.openURL(
                `whatsapp://send?text=${shareWAContent}&phone=+6285961142551`,
              )
            }
          />
        </View>
      </ImageBackground>
      <View style={{alignSelf: 'center', marginTop: wp('15%'), marginHorizontal:wp('10%')}}>
        <Text style={{textAlign:'center', padding:10}}>Note:</Text>
        <Text style={{textAlign:'center', padding:10}}>
          Aplikasi Go-BPJS adalah aplikasi pelayanan kesehatan peserta BPJS yang
          terintegrasi. Jika membutuhka bantuan untuk menggunakan Aplikasi
          Go-BPJS, Anda dapat menekan Button "Help" di atas.
        </Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  hero: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffff',
    marginTop: 10,
  },
  status: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
  },
  avatarWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  cardWrapper: {
    position: 'absolute',
    bottom: -60,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    marginTop: 100,
    flexDirection: 'column',
    backgroundColor: colors.white,
    borderRadius: 20,
  },
});
