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
