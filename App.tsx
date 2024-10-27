import React from 'react';
import Routes from './src/Navigation/Routes.jsx';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/Redux/Store.js';

const App = () => {
  // LogBox.ignoreAllLogs()
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};
export default App;
