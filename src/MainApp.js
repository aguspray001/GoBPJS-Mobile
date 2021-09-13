import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogBox} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {Provider as PaperProvider} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {secureGetData} from './constant/storage';
import {RootStack} from './navigation';
import {Loading, Splash} from './screens';
// import {Loading} from './screens';

// Ignore all log notifications:
LogBox.ignoreAllLogs();

const MainApp = () => {
  const [signed, setSigned] = React.useState(null);
  const [show, setShow] = React.useState(false);
  const {loader} = useSelector(state => state.globalReducer);

  React.useEffect(async () => {
    await secureGetData('token')
      .then(r => {
        setShow(true)
        setSigned(r);
      })
      .catch(e => e);
  }, []);

  return (
    <PaperProvider>
      <NavigationContainer>
        <RootStack isLogin={signed!==null||signed!==''?true:false} />
        <FlashMessage position="top" duration={3000} hideStatusBar={false} />
      </NavigationContainer>
      {loader||show===false&&<Loading/>}
    </PaperProvider>
  );
};

export default MainApp;
