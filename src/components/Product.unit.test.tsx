import {screen, render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Product} from './Product';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';


describe('Product component', () => {
    const mockStore = configureStore();
    let store;

    it('shows error notification when no stock', async () => {
        store = mockStore({});
        const {getByText} = render(
            <Provider store={store}>
                <Product id={'1'} name={'Test'} price={1} color={'red'}
                         logo={'logo'} stock={0}/>
            </Provider>
        );

        const product = getByText('1€');
        fireEvent.click(product);

        const notification = screen.getByText('There is no stock! 😢');
        expect(notification).toBeInTheDocument();
    });

    it('shows error notification when not enough balance', async () => {
        store = mockStore({'user': {'balance': 0}});
        const {getByText} = render(
            <Provider store={store}>
                <Product id={'1'} name={'Test'} price={1} color={'red'}
                         logo={'logo'} stock={1}/>
            </Provider>
        );

        const product = getByText('1€');
        fireEvent.click(product);

        const notification = screen.getByText('You don\'t have enough balance! 😢');
        expect(notification).toBeInTheDocument();
    });

    it('shows a success notification after buy', async () => {
        store = mockStore({'user': {'balance': 10}});
        const {getByText} = render(
            <Provider store={store}>
                <Product id={'1'} name={'Test'} price={1} color={'red'}
                         logo={'logo'} stock={1}/>
            </Provider>
        );

        const product = getByText('1€');
        fireEvent.click(product);

        const notification = screen.getByText('Enjoy your drink! 🍻');
        expect(notification).toBeInTheDocument();
    });

    it('product has \'sould-out\' class when has not stock', async () => {
        store = mockStore({});
        const {getByText} = render(
            <Provider store={store}>
                <Product id={'1'} name={'Test'} price={1} color={'red'}
                         logo={'logo'} stock={0}/>
            </Provider>
        );

        const product = getByText('1€');
        expect(product?.parentElement?.parentElement).toHaveClass('sold-out');
    });
});