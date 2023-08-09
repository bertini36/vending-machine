import axios from 'axios';
import productsMock from './mocks/products.json';
import userMock from './mocks/user.json';
import {showErrorNotification} from './notifications';

export async function performLogin(username: string) {
    if (process.env.REACT_APP_USE_BACKEND === 'true') {
        try {
            const response = await axios.post(process.env.REACT_APP_BACKEND_URL + '/login/', {'username': username});
            return response.status === 200;
        } catch (err) {
            showErrorNotification('Login error 😞');
            return false;
        }
    } else {
        return true;
    }
}

export async function fetchUser(username: string) {
    if (process.env.REACT_APP_USE_BACKEND === 'true') {
        try {

            const response = await axios.get(process.env.REACT_APP_BACKEND_URL + '/user/' + username);
            return response.data;
        } catch (err) {
            showErrorNotification('Error retrieving user data 😞');
        }
    } else {
        return userMock;
    }
}

export async function fetchProducts() {
    if (process.env.REACT_APP_USE_BACKEND === 'true') {
        try {
            const response = await axios.get(process.env.REACT_APP_BACKEND_URL + '/products');
            return response.data;
        } catch (err) {
            showErrorNotification('Error retrieving products 😞');
        }
    } else {
        return productsMock['products'];
    }
}

export async function addBalance(username: string, balance: number, amount: number) {
    if (process.env.REACT_APP_USE_BACKEND === 'true') {
        try {
            const url = process.env.REACT_APP_BACKEND_URL + '/user/' + username + '/balance/';
            const response = await axios.patch(url, {amount: amount});
            return response.data['balance'];
        } catch (err) {
            showErrorNotification('Error increasing balance 😞');
        }
    } else {
        return balance + amount;
    }
}

export async function refundBalance(username: string) {
    if (process.env.REACT_APP_USE_BACKEND === 'true') {
        try {
            await axios.patch(process.env.REACT_APP_BACKEND_URL + '/user/' + username + '/refund/');
            return true;
        } catch (err) {
            showErrorNotification('Error resetting balance 😞');
            return false;
        }
    } else {
        return true;
    }
}

export async function buy(username: string, productId: string, balance: number, amount: number, currentStock: number) {
    if (process.env.REACT_APP_USE_BACKEND === 'true') {
        try {
            const url = process.env.REACT_APP_BACKEND_URL + '/products/buy/' + productId + '/';
            const response = await axios.post(url, {username: username});
            return response.data;
        } catch (err) {
            showErrorNotification('Error subtracting balance 😞');
        }
    } else {
        return {"balance": balance - amount, "stock": currentStock - 1};
    }
}
