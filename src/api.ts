import axios from 'axios';
import productsMock from './utils/mocks/products.json';
import userMock from './utils/mocks/user.json';
import {showErrorNotification} from "./utils/notifications";


export async function performLogin() {
    if (process.env.USE_BACKEND) {
        try {
            await axios.get(process.env.BACKEND_URL + '/login');
            return true;
        } catch (err) {
            showErrorNotification("Login error 😞");
            return false;
        }
    } else {
        return true;
    }
}

export async function fetchProducts() {
    if (process.env.USE_BACKEND) {
        try {
            const response = await axios.get(process.env.BACKEND_URL + '/products');
            return response.data["products"];
        } catch (err) {
            showErrorNotification("Error retrieving products 😞");
        }
    } else {
        return productsMock["products"];
    }
}

export async function fetchUser(username: string) {
    if (process.env.USE_BACKEND) {
        try {
            const response = await axios.get(process.env.BACKEND_URL + '/user/' + username);
            return response.data;
        } catch (err) {
            showErrorNotification("Error retrieving user data 😞");
        }
    } else {
        return userMock;
    }
}
export async function addBalance(username: string, balance: number, amount: number) {
    if (process.env.USE_BACKEND) {
        try {
            const response = await axios.patch(process.env.BACKEND_URL + '/user/' + username + '/add_balance', {
                amount: amount
            });
            return response.data["amount"];
        } catch (err) {
            showErrorNotification("Error increasing balance 😞");
        }
    } else {
        return balance + amount;
    }
}

export async function refundBalance(username: string) {
    if (process.env.USE_BACKEND) {
        try {
            await axios.patch(process.env.BACKEND_URL + '/user/' + username + '/refund/');
        } catch (err) {
            showErrorNotification("Error resetting balance 😞");
        }
    }
}
