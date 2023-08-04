import axios from 'axios';


const products_payload = [
    {
        'name': 'Rosa Blanca',
        'logo': 'logos/rosa.png',
        'color': '#22d3ee',
        'price': 3,
        'stock': 5,
    },
    {
        'name': 'Estrella Damm',
        'logo': 'logos/damm.png',
        'color': '#dc2626',
        'price': 1,
        'stock': 5,
    },
    {
        'name': 'Estrella Galicia',
        'logo': 'logos/galicia.png',
        'color': '#171717',
        'price': 2,
        'stock': 5,
    },
    {
        'name': '1906',
        'logo': 'logos/1906.jpeg',
        'color': '#d97706',
        'price': 3,
        'stock': 5,
    },
    {
        'name': 'Kilikia',
        'logo': 'logos/kilikia.jpeg',
        'color': '#15803d',
        'price': 2.50,
        'stock': 5,
    },
    {
        'name': 'Moritz',
        'logo': 'logos/moritz.jpeg',
        'color': '#eab308',
        'price': 2,
        'stock': 5,
    }
]

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
    getProducts: async () => {
        if (process.env.USE_BACKEND) {
            try {
                const response = await axios.get(process.env.BACKEND_URL + '/products');
                return response.data;
            } catch (err) {
                throw Error("Error retrieving products");
            }
        } else {
            return products_payload;
        }
    }
}
