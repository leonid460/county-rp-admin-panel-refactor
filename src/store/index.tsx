import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import leftPanelSlice from './leftPanelSlice';
import useSlice from './userSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    leftPanelIsOpen: leftPanelSlice,
    user: useSlice
  }
});

export const storeWrapper = (WrappedComponent: React.ComponentType): React.FC => () => (
  <Provider store={store}>
    <WrappedComponent />
  </Provider>
);

export default store;
