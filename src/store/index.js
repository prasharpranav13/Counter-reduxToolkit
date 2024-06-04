import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    INC: (state, action) => {
      state.counterVal++;
    },
    DEC: (state, action) => {
      state.counterVal--;
    },
    ADD: (state, action) => {
      state.counterVal += Number(action.payload.num);
    },
    SUB: (state, action) => {
      state.counterVal -= Number(action.payload.num);
    },
    RESET: (state, action) => {
      state.counterVal = 0;
    },
  },
});
const privacySlice = createSlice({
  name: "privacy",
  initialState: { privacy: false },
  reducers: {
    TOGGLE: (state, action) => {
      state.privacy = !state.privacy;
    },
  },
});
const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const privacyActions = privacySlice.actions;
export default counterStore;
