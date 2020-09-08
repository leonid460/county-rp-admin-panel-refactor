import { createSlice } from '@reduxjs/toolkit';

const leftPanelSlice = createSlice({
  name: 'leftPanelIsOpen',
  initialState: false,
  reducers: {
    toggle: (state) => {
      return !state;
    }
  }
});

export const selectIsOpen = (state: { leftPanelIsOpen: boolean }) => state.leftPanelIsOpen;

export const { toggle } = leftPanelSlice.actions;

export default leftPanelSlice.reducer;
