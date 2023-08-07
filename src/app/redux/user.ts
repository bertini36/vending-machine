import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {UserProps} from "../interfaces";

const initialState: UserProps = {
    username: null,
    first_name: null,
    last_name: null,
    balance: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateBalance: (state, action: PayloadAction<number | null>) => {
      state.balance = action.payload;
    },
  }
});


export const { updateBalance } = userSlice.actions;

export default userSlice.reducer;