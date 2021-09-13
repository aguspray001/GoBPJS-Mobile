import jwtDecode from 'jwt-decode';
import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Avatar, Modal, Portal} from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
import {useDispatch} from 'react-redux';
import {hospital2Bg} from '../assets/images';
import {Button} from '../components';
import Card from '../components/Card';
import {colors} from '../constant/colors';
import {secureGetData} from '../constant/storage';

const Profile = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const [user, setUser] = React.useState('');
  const [statusUser, setStatusUser] = React.useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    secureGetData('token')
      .then(r => {
        const decodedToken = jwtDecode(r);
        setUser(decodedToken.user.name);
        setStatusUser(decodedToken.user.status);
      })
      .catch(e => e);
  }, []);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const modalStyle = {
    backgroundColor: 'white',
    height: 200,
    width: 200,
    alignSelf: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  };

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
        <View style={styles.cardWrapper}>
          <Card width="27%" height="14%" title="Barcode" onPress={showModal} />
        </View>
      </ImageBackground>
      <View style={{alignSelf: 'center', position: 'absolute', bottom: '5%'}}>
        <Button
          title="Sign Out"
          width="45%"
          height="5.8%"
          onPress={() => dispatch({type: 'sign-out', payload: {navigation}})}
        />
      </View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={modalStyle}>
          <Text
            style={{
              marginBottom: 20,
              paddingHorizontal: 20,
              textAlign: 'center',
            }}>
            {statusUser === 1
              ? 'Scan this barcode'
              : 'Barcode tidak dapat digenerate, status anda non-aktif'}
          </Text>
          {statusUser === 1 && (
            <QRCode
              value="Just some string value"
              logoSize={60}
              logoBackgroundColor="transparent"
            />
          )}
        </Modal>
      </Portal>
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
