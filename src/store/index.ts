import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([thunkMiddleware, loggerMiddleware]),
});
export default store;

export type AppDispatch = typeof store.dispatch;
