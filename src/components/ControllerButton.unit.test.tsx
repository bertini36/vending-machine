import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {jest} from '@jest/globals';
import {ControllerButton} from "./ControllerButton";
import {addBalance} from "../app/api";

jest.mock('../app/api')

describe('ControllerButton component', () => {
    const mockStore = configureStore();
    let store;

    it('add balance api call is triggered when click', async () => {
        store = mockStore({"user": {"username": "bertini36", "balance": 10}});
        const {getByText} = render(
            <Provider store={store}>
                <ControllerButton value={1}/>
            </Provider>
        );

        const button = getByText('1€');
        fireEvent.click(button);

        expect(addBalance).toHaveBeenCalledWith("bertini36", 10, 1);
    });
});
