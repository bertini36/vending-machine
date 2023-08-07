import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
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
        setUser: (state, action: PayloadAction<UserProps>) => {
            state.username = action.payload.username;
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
            state.balance = action.payload.balance;
        },
    }
});


export const {setUser} = userSlice.actions;
export default userSlice.reducer;