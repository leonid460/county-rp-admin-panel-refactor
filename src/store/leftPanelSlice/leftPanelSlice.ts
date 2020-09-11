import { createSlice } from '@reduxjs/toolkit';

export const leftPanelSlice = createSlice({
  name: 'leftPanelIsOpen',
  initialState: false,
  reducers: {
    toggle: (state) => {
      return !state;
    }
  }
});
