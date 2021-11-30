import React from 'react';
import { Provider } from 'react-redux';
import { Store, AnyAction } from 'redux';
import { Persistor } from 'redux-persist';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { LastLocationProvider } from 'react-router-last-location';
import { Routes } from './router/Routes';
import ServerError from '@components/ServerError';
import BonusSuccess from '@components/BonusSuccess';

export default function App({
  store,
  persistor,
  basename
}: {
  store: Store<any, AnyAction>;
  persistor: Persistor;
  basename: string | undefined;
}) {
  return (
    /* Provide Redux store */
    <Provider store={store}>
      {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
      <PersistGate persistor={persistor}>
        {/* Override `basename` (e.g: `homepage` in `package.json`) */}
        <BrowserRouter basename={basename}>
          {/* This library only returns the location that has been active before
            the recent location change in the current window lifetime. */}
          <LastLocationProvider>
            {/* Render routes with provided `Layout`. */}
            <Routes />
            <BonusSuccess />
            <ServerError />
          </LastLocationProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
