export const END_POINT = {
  auth: {
    login: 'auth/login',
    register: 'auth/register',
    logout: 'auth/logout',
  },
  user: {
    listUser: 'users',
    user: id => `users/${id}`,
  },
};
