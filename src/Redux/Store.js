import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {tokenSlice} from './Slices/Token';
import {permissionSlice} from './Slices/UserPermissions';
import {BindingSlice} from './Slices/BindingKey';

const rootReducer = combineReducers({
  token: tokenSlice.reducer,
  permission: permissionSlice.reducer,
  Binding: BindingSlice.reducer,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: ['Chats'],
  // whitelist: [],
};
const persistReducers = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
