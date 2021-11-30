import React from 'react';
import ReactDOM from 'react-dom';
import { persistor, store } from './store/store';
import '@styles/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const { PUBLIC_URL } = process.env;

ReactDOM.render(
  // <React.StrictMode>
    <App
      store={store}
      persistor={persistor}
      basename={PUBLIC_URL}
    />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
