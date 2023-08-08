import '@testing-library/jest-dom';
import {jest} from '@jest/globals';
import axios from 'axios';
import {performLogin, fetchUser, fetchProducts, addBalance, refundBalance, buy} from "./api";
import userMock from './mocks/user.json';
import productsMock from './mocks/products.json';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('API', () => {
    it('performLogin returns true when all is ok', async () => {
        process.env.REACT_APP_USE_BACKEND = 'true';
        process.env.BACKEND_URL = 'http://localhost:8000';
        const username = "bertini36";
        mockedAxios.post.mockResolvedValue({"status": 200});

        const allOk = await performLogin(username);

        expect(allOk).toBe(true);
        expect(axios.post).toHaveBeenCalledWith(process.env.BACKEND_URL + '/login', {'user_name': username});
    });

    it('performLogin returns true when backend is not used', async () => {
        process.env.REACT_APP_USE_BACKEND = 'false';

        const allOk = await performLogin("bertini36");

        expect(allOk).toBe(true);
    });

    it('performLogin returns false and shows notification when something went wrong', async () => {
        process.env.REACT_APP_USE_BACKEND = 'true';
        process.env.BACKEND_URL = 'http://localhost:8000';
        const username = "bertini36";
        mockedAxios.post.mockImplementation(() => {throw new Error()});

        const allOk = await performLogin(username);

        expect(allOk).toBe(false);
    });

    it('fetchUser returns user data when all is ok', async () => {
        process.env.REACT_APP_USE_BACKEND = 'true';
        process.env.BACKEND_URL = 'http://localhost:8000';
        const username = "bertini36";
        const expectedUserData = {"username": "bertini36", "first_name": "Alberto"};
        mockedAxios.get.mockResolvedValue({"status": 200, "data": expectedUserData});

        const userData = await fetchUser(username);

        expect(userData).toBe(expectedUserData);
        expect(axios.get).toHaveBeenCalledWith(process.env.BACKEND_URL + '/user/' + username);
    });

    it('fetchUser returns user mock when backend is not used', async () => {
        process.env.REACT_APP_USE_BACKEND = 'false';
        const username = "bertini36";

        const userData = await fetchUser(username);

        expect(userData).toBe(userMock);
    });

    it('fetchUser returns undefined when something went wrong', async () => {
        process.env.REACT_APP_USE_BACKEND = 'true';
        process.env.BACKEND_URL = 'http://localhost:8000';
        const username = "bertini36";
        mockedAxios.get.mockImplementation(() => {throw new Error()});

        const userData = await fetchUser(username);

        expect(userData).toBe(undefined);
    });

    it('fetchProducts returns products data when all is ok', async () => {
        process.env.REACT_APP_USE_BACKEND = 'true';
        process.env.BACKEND_URL = 'http://localhost:8000';
        const expectedProductsData = [{"name": "Estrella Damm"}, {"name": "Rosa Blanca"}];
        mockedAxios.get.mockResolvedValue({"status": 200, "data": {"list": expectedProductsData}});

        const productsData = await fetchProducts();

        expect(productsData).toBe(expectedProductsData);
        expect(axios.get).toHaveBeenCalledWith(process.env.BACKEND_URL + '/products');
    });

    it('fetchProducts returns products mock when backend is not used', async () => {
        process.env.REACT_APP_USE_BACKEND = 'false';

        const userData = await fetchProducts();

        expect(userData).toBe(productsMock["products"]);
    });

    it('fetchProducts returns undefined when something went wrong', async () => {
        process.env.REACT_APP_USE_BACKEND = 'true';
        process.env.BACKEND_URL = 'http://localhost:8000';
        mockedAxios.get.mockImplementation(() => {throw new Error()});

        const productsData = await fetchProducts();

        expect(productsData).toBe(undefined);
    });

    it('addBalance returns new balance when all is ok', async () => {
        process.env.REACT_APP_USE_BACKEND = 'true';
        process.env.BACKEND_URL = 'http://localhost:8000';
        mockedAxios.patch.mockResolvedValue({"status": 200, "data": {"balance": 5}});

        const balance = await addBalance("bertini36", 5, 3);

        expect(balance).toBe(5);
        expect(axios.patch).toHaveBeenCalledWith(process.env.BACKEND_URL + '/user/bertini36/balance', {"amount": 3});
    });

    it('addBalance returns locally computed balance when backend is not used', async () => {
        process.env.REACT_APP_USE_BACKEND = 'false';

        const balance = await addBalance("bertini36", 5, 3);

        expect(balance).toBe(8);
    });

    it('addBalance returns undefined when something went wrong', async () => {
        process.env.REACT_APP_USE_BACKEND = 'true';
        process.env.BACKEND_URL = 'http://localhost:8000';
        mockedAxios.patch.mockImplementation(() => {throw new Error()});

        const balance = await addBalance("bertini36", 5, 3);

        expect(balance).toBe(undefined);
    });

    it('refundBalance returns true if all ok', async () => {
        process.env.REACT_APP_USE_BACKEND = 'true';
        process.env.BACKEND_URL = 'http://localhost:8000';
        mockedAxios.patch.mockResolvedValue({"status": 200});

        const allOk = await refundBalance("bertini36");

        expect(allOk).toBe(true);
        expect(axios.patch).toHaveBeenCalledWith(process.env.BACKEND_URL + '/user/bertini36/refund');
    });

    it('refundBalance returns true when backend is not used', async () => {
        process.env.REACT_APP_USE_BACKEND = 'false';

        const allOk = await refundBalance("bertini36");

        expect(allOk).toBe(true);
    });

    it('refundBalance returns false when something went wrong', async () => {
        process.env.REACT_APP_USE_BACKEND = 'true';
        process.env.BACKEND_URL = 'http://localhost:8000';
        mockedAxios.patch.mockImplementation(() => {throw new Error()});

        const allOk = await refundBalance("bertini36");

        expect(allOk).toBe(false);
    });

    it('buy returns new balance and new stock if all is ok', async () => {
        process.env.REACT_APP_USE_BACKEND = 'true';
        process.env.BACKEND_URL = 'http://localhost:8000';
        const expectedOutput = {"balance": 2, "stock": 1};
        mockedAxios.post.mockResolvedValue({"status": 200, "data": expectedOutput});

        const output = await buy("bertini36", "1", 5, 3, 2);

        expect(output).toBe(expectedOutput);
        expect(axios.post).toHaveBeenCalledWith(process.env.BACKEND_URL + '/buy/1' , {"username": "bertini36"});
    });

    it('buy returns locally computed output when backend is not used', async () => {
        process.env.REACT_APP_USE_BACKEND = 'false';

        const output = await buy("bertini36", "1", 5, 3, 2);

        expect(output["balance"]).toBe(2);
        expect(output["stock"]).toBe(1);
    });
});