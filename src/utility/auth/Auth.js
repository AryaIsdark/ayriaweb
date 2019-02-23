import {
    getIdToken,
    getAccessToken,
    logout,
    isAuthenticated,
    redirectToPrivate,
    redirectToPublic
} from './TokenTools';

import axios from 'axios';

export default class Auth {
    constructor() {
        console.log('hello from auth');
    }

    async login(username, password, rememberMe = false){
        try {
            const response = await axios.post('http://ayria-dev.dati.io/api/authenticate', {username, password, rememberMe});
            localStorage.setItem('id_token', response.data.id_token);
            localStorage.setItem('access_token', response.data.id_token);
            console.log(response);
            return true;
        }
        catch (err){
            console.log(err);
        }
    }

    logout(){
        localStorage.removeItem('id_token');
        localStorage.removeItem('access_token');
    }

    setLoggedInUser(data) {
        if(data){
            localStorage.setItem('LOGGED_IN_USER', JSON.stringify(data));
        }
    }

    getLoggedInUser() {
        return JSON.parse(localStorage.getItem('LOGGED_IN_USER'));
    }
}
