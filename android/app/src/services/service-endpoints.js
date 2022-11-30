export const END_POINT = {
  auth: {
    login: 'auth/login',
    register: 'auth/register',
    logout: 'auth/logout',
  },
  user: {
    listUser: 'users',
    user: id => `users/${id}`,
    updateUser: id => `users/${id}`,
    changePassword: id => `users/updatepass/${id}`,
  },
  device: {
    devices: 'devices',
    listDeviceByUserId: 'devices/user',
    getDeviceById: id => `devices/${id}`,
    updateDevice: id => `devices/${id}`,
    deleteDevice: id => `devices/${id}`,
  },
  sensor: {
    getSensorByDeviceId: 'sensors/device',
  },
};
