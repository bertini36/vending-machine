import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {Product} from './Product';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';


describe('Product component', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;

    it('shows a notification when no stock', async () => {
        store = mockStore(initialState);
        const {getByText} = render(
            <Provider store={store}>
                <Product id={'1'} name={'Test'} price={1} color={'red'} logo={'logo'} stock={0}/>
            </Provider>
        );
        const product = getByText('1€');

        fireEvent.click(product);

        const notification = screen.getByText(/There is no stock! 😢/i);
        expect(notification).toBeInTheDocument();
    });
});