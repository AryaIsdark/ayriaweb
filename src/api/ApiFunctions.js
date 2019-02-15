import { api } from './';

const getAccount = () => api.get(api.route.getAccount.spec).then(response => response);


const apiFunctions = {
    getAccount,
};

export default apiFunctions;
