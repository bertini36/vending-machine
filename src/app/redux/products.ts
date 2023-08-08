import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {ProductProps} from '../interfaces';
import {enableMapSet} from 'immer';

enableMapSet();
const initialState: Map<string, ProductProps> = new Map([]);


export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state: Map<string, ProductProps>, action: PayloadAction<Array<ProductProps>>) => {
            for (let product of action.payload) {
                state.set(product.id, product);
            }
        },
        decreaseStock: (state: Map<string, ProductProps>, action: PayloadAction<string>) => {
            const product = state.get(action.payload);
            if (product) {
                product.stock -= 1;
            }
        },
    }
});


export const {setProducts, decreaseStock} = productsSlice.actions;
export default productsSlice.reducer;
