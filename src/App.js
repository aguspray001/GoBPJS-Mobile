import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './navigation';
import {LogBox} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import store from './redux/store';
// import {Loading} from './screens';

// Ignore all log notifications:
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <RootStack />
          <FlashMessage position="top" duration={3000} hideStatusBar={false} />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
