import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { verifyAuth } from './auth/auth.actions'

import rootReducer from './root-reducer';

//const middlewares = [logger, thunk];
const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
store.dispatch(verifyAuth());

const persistor = persistStore(store);

export { store, persistor };