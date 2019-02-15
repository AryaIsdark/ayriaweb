
export const getIdToken = () => localStorage.getItem('id_token');

export const getAccessToken = () => localStorage.getItem('access_token');

export const getExpiration = () => JSON.parse(localStorage.getItem('expires_at'));

export const clearIdToken = () => localStorage.removeItem('id_token');

export const clearAccessToken = () => localStorage.removeItem('access_token');

export const redirectToPrivate = () => {
  // history.replace('/accounts');
};

export const redirectToPublic = (uri) => {
  // history.replace(uri);
};

export const logout = (uri = '/') => {
  // Clear access token and ID token from local storage
  clearIdToken();
  clearAccessToken();
  localStorage.removeItem('expires_at');
  // navigate to the home route
  redirectToPublic(uri);
};

export const isTokenNotExpired = () => {
  // Check whether the current time is past the
  // access token's expiry time
  const expiresAt = getExpiration();
  return new Date().getTime() < expiresAt;
};

export const isAuthenticated = () => {
  const isExpired = !isTokenNotExpired();
  // returns FALSE to isExpired (flipping it below)
  return !isExpired;
};
