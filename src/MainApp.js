import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogBox} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {Provider as PaperProvider} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {secureGetData} from './constant/storage';
import {RootStack} from './navigation';
import {Loading} from './screens';
// Ignore all log notifications:
LogBox.ignoreAllLogs();

const MainApp = () => {
  const [signed, setSigned] = React.useState('1');
  const {loader} = useSelector(state => state.globalReducer);

  React.useEffect(async () => {
    const token = await secureGetData('token');
    if (token==="" || token === null || token === undefined) {
        setSigned(false)
    }else{
        setSigned(true)
    }
  },[]);

  return (
    <PaperProvider>
      <NavigationContainer>
        {signed!=="1"&&<RootStack isLogin={signed&&true} />}
        <FlashMessage position="top" duration={3000} hideStatusBar={false} />
      </NavigationContainer>
      {loader && <Loading />}
    </PaperProvider>
  );
};

export default MainApp;
