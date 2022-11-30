import AsyncStorage from '@react-native-async-storage/async-storage';

export const setUserInfo = async info => {
  await AsyncStorage.setItem('@info', info);
};

export const getUserInfo = async () => {
  const info = await AsyncStorage.getItem('@info');
  return JSON.parse(info || '{}');
};

export const clear = async () => {
  return await AsyncStorage.clear();
};

export const setActiveDevice = async device => {
  await AsyncStorage.setItem('@active_device', JSON.stringify(device));
};

export const getActiveDevice = async () => {
  const device = await AsyncStorage.getItem('@active_device');
  return JSON.parse(device || '{}');
};
