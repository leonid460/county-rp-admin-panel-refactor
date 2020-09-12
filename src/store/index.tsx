import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import leftPanelSlice from './leftPanelSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    leftPanelIsOpen: leftPanelSlice
  }
});

export const storeWrapper = (WrappedComponent: React.ComponentType): React.FC => () => (
  <Provider store={store}>
    <WrappedComponent />
  </Provider>
);

export default store;
