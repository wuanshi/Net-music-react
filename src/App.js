import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import router from './router'
import store from './store';

import Header from './components/header';
import Footer from './components/footer'

const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header />
        {
          renderRoutes(router)
        }
        <Footer />
      </HashRouter>
    </Provider>
  );
});

export default App;