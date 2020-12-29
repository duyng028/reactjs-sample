/*
 * @Author: DuyNg (duynv.ktmt50@gmail.com)
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import configStore from './store';

// import registerServiceWorker from './registerServiceWorker';

const { store, persistor } = configStore();

const renderApp = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

ReactDOM.render(renderApp(), document.getElementById('root'));
// registerServiceWorker();
