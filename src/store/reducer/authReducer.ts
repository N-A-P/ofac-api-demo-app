import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initState = {
  token: '',
  refreshToken: '',
};
const authSlice = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {
    clear(state) {
      state = initState;
    },
    setTokens(state, {payload}: PayloadAction<typeof initState>) {
      state.refreshToken = payload.refreshToken;
      state.token = payload.token;
    },
  },
});

export const {reducer: authReducer, actions: appActions} = authSlice;
