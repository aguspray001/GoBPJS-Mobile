import React from 'react';
import { LogBox } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import MainApp from './MainApp';
import store from './redux/store';

// Ignore all log notifications:
LogBox.ignoreAllLogs();

const App = () => {

  return (
    <StoreProvider store={store}>
      <MainApp/>
    </StoreProvider>
  );
};

export default App;
