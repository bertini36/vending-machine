import {screen, render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Controller} from './Controller';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {jest} from '@jest/globals';
import {refundBalance} from '../app/api';

jest.mock('../app/api');

describe('Controller component', () => {
    const mockStore = configureStore();
    let store;

    it('refundBalance shows error notification when no balance', async () => {
        store = mockStore({'user': {'balance': 0}});
        const {getByText} = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Controller/>
                </Provider>
            </BrowserRouter>
        );

        const refundButton = getByText('Refund');
        fireEvent.click(refundButton);

        const notification = screen.getByText('You have no money to refund! 🤷‍♂️');
        expect(notification).toBeInTheDocument();
    });

    it('refundBalance call to apiRefundBalance when balance > 0', async () => {
        store = mockStore({'user': {'username': 'bertini36', 'balance': 1}});
        const {getByText} = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Controller/>
                </Provider>
            </BrowserRouter>
        );

        const refundButton = getByText('Refund');
        fireEvent.click(refundButton);

        expect(refundBalance).toHaveBeenCalledWith('bertini36');
    });

    it('logout removes username from localStorage', async () => {
        localStorage.username = 'bertini36';
        store = mockStore({'user': {'username': 'bertini36'}});
        const {getByText} = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Controller/>
                </Provider>
            </BrowserRouter>
        );

        const logoutButton = getByText('Logout');
        fireEvent.click(logoutButton);

        expect(localStorage.username).toBeUndefined();
    });
});