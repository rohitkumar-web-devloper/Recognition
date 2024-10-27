import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Binding: '',
};

export const BindingSlice = createSlice({
  name: 'Binding',
  initialState,
  reducers: {
    setBinding: (state, { payload }) => {
      state.Binding = payload;
    },
  },
});
export const { setBinding } = BindingSlice.actions;
export default BindingSlice.reducer;
