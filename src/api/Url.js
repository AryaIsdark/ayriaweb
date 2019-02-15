import Route from 'route-parser';

const endpoints = {
  getTransactions: new Route('/transactions'),
  getAccount: new Route('/account'),
  getUser: new Route('/user'),
  login: new Route('/login'),
  getMe: new Route('/users/me')
};

export default endpoints;
