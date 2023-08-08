import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {UserProps} from '../interfaces';

const initialState: UserProps = {
    username: '',
    first_name: '',
    last_name: '',
    balance: 0,
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
        updateBalance: (state, action: PayloadAction<number>) => {
            state.balance = action.payload;
        },
    }
});


export const {setUser, updateBalance} = userSlice.actions;
export default userSlice.reducer;