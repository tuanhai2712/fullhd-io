import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  applyMiddleware, createStore, combineReducers, AnyAction, Store, CombinedState
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from '../sagas/index';
import rootReducer from '../reducers/index';

import middleware, { sagaMiddleware } from './middleware';

declare global {
  namespace NodeJS {
    interface Global {
      document: Document;
      window: Window;
      navigator: Navigator;
      store: Store<any, AnyAction>
    }
  }
}

const allReducers = combineReducers<globalState>({ ...rootReducer });

const rootReducers = (state: CombinedState<any>, action: AnyAction) => {
  if (action.type === 'LOGOUT') state = {};
  return allReducers(state, action);
};

const reducer = persistReducer<any>(
  {
    key: 'root',
    storage,
    whitelist: ["user", "profile", "tfa"]
  },
  rootReducers
);

const configStore = (initialState = {}) => {
  const store = createStore<any, AnyAction, unknown, unknown>(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('../reducers/index', () => {
      store.replaceReducer(require('../reducers/index').default);
    });
  }

  return {
    persistor: persistStore(store),
    store
  };
};

const { store, persistor } = configStore();
global.store = store;

export { store, persistor };
