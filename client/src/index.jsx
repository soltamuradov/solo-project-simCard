import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';
import { BrowserRouter } from 'react-router-dom';

render(
  <React.StrictMode>
    <BrowserRouter forceRefresh={true}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
