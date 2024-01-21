import { createSlice } from '@reduxjs/toolkit';

const tabSlice = createSlice({
  name: 'tab',
  initialState: {
    tabIndex: 0,
  },
  reducers: {
    setTabIndex(state, action) {
      state.tabIndex = action.payload;
    },
  },
});

export const { setTabIndex } = tabSlice.actions;
export default tabSlice.reducer;










console.log("input",tabSlice.reducer);
console.log("inputttt",tabSlice.actions);


