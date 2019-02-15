import { create } from 'apisauce';
import  { setupCache }  from 'axios-cache-adapter';
// import Auth from '../utility/auth/Auth';

import { getExpiration, isTokenNotExpired, getAccessToken } from '../utility/auth/TokenTools';
import { Endpoints, fn } from './';

// const auth = new Auth();
const cache = setupCache({
    // setup cache for 1min clientside
    maxAge: 1 * 60 * 1000,
    limit: 15
});

// define the api
const api = create({
    baseURL: 'http://localhost:8080/api',
    timeout:30000,
    headers: [{ Accept: 'application/json' }, { 'X-Client-WebUi': '1.0.1' }],
    adapter: cache.adapter
});


api.addRequestTransform((request) => {
    const accessToken = getAccessToken();
    // const isTokenStillValid = isTokenNotExpired();
    // TODO: IF tokenIsExpired and RequestNewToken
    // expiry grace time is still valid (need implementation)
    // THEN request new Token from AUTH Module - store it and proceed.

    if (accessToken) {
        request.headers.Authorization = `Bearer ${accessToken}`;
    } else if (accessToken) {
        // TODO: need to AWAIT current response until renewToken return succesfully
        // or cancel with Error if it return with a problem/failure
        // auth.renewToken();
    } else {
        request.headers.Authorization = null;
        request.headers['X-Secure'] = false;
    }
});

api.route = Endpoints;
api.fn = fn;

export default api;
