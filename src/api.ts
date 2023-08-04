import axios from 'axios';

export const api = {
	login: async () => {
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
    }
}
