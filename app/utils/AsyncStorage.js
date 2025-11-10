import AsyncStorage from '@react-native-async-storage/async-storage';

export const getItem = async key => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error getting item:', err);
  }
  return null;
};

export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error('Error setting data', err);
  }
};

export const removeItem = async (key) => {
    try{
      await AsyncStorage.removeItem(key);
    }catch(err){
        console.err("Error removing Item", err);
    }
}
