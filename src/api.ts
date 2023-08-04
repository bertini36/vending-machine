import axios from 'axios';
import productsMock from './utils/mocks/products.json';
import userMock from './utils/mocks/user.json';
import {showErrorNotification} from "./utils/notifications";


export const api = {
    performLogin: async () => {
        if (process.env.USE_BACKEND) {
            try {
                await axios.get(process.env.BACKEND_URL + '/login');
                return true;
            } catch (err) {
                // TODO: Manage error and just return false when forbidden
                return false;
            }
        } else {
            return true;
        }
    },
    fetchProducts: async () => {
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
    },
    fetchUser: async (username: string) => {
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
    },
    addBalance: async (username: string, balance: number, amount: number) => {
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
    },
    refundBalance: async (username: string) => {
        if (process.env.USE_BACKEND) {
            try {
                await axios.patch(process.env.BACKEND_URL + '/user/' + username + '/refund/');
            } catch (err) {
                showErrorNotification("Error resetting balance 😞");
            }
        }
    }
}
