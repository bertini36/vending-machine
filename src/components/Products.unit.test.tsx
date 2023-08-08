import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Products} from "./Products";


describe('Products component', () => {
    const mockStore = configureStore();
    let store;

    it('products are rendered', async () => {
        let products = new Map([]);
        products.set(
            "1",
            {
                "id": "1",
                "name": "Estrella Damm",
                "price": 1,
                "color": "yellow",
                "logo": "estrella-damm",
                "stock": 1
            }
        );
        products.set(
            "2",
            {
                "id": "2",
                "name": "Rosa Blanca",
                "price": 1,
                "color": "pink",
                "logo": "rosa-blanca",
                "stock": 1
            }
        );
        store = mockStore({"products": products});

        const {getByText} = render(
            <Provider store={store}>
                <Products/>
            </Provider>
        );

        const damm = getByText('Estrella Damm');
        const rosa = getByText('Rosa Blanca');
        expect(damm).toBeInTheDocument();
        expect(rosa).toBeInTheDocument();
    });
});