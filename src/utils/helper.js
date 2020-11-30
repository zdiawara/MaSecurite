import {AsyncStorage} from 'react-native';
import {DISTANCE_INFRA_KEY, DISTANCE_KEY, NAME_KEY} from './constants';

const incrementDistance = async (key, distance) => {
  const distanceStocked = await buildDistance(key);
  const distanceTotale = parseInt(distance, 10) + parseInt(distanceStocked, 10);
  AsyncStorage.setItem(key, `${distanceTotale}`);
};

export const setDistance = async (distance) => {
  incrementDistance(DISTANCE_KEY, distance);
};

export const setDistanceInfra = async (distanceInfra) => {
  incrementDistance(DISTANCE_INFRA_KEY, distanceInfra);
};

export const setName = async (name) => {
  return await AsyncStorage.setItem(NAME_KEY, name);
};

export const getName = async () => {
  return await AsyncStorage.getItem(NAME_KEY);
};

const buildDistance = async (key) => {
  const distance = await AsyncStorage.getItem(key);

  if (!distance) {
    return 0;
  }

  try {
    return parseInt(distance, 10);
  } catch (e) {
    console.error(e);
    return 0;
  }
};

export async function getDistanceInfra() {
  return await buildDistance(DISTANCE_INFRA_KEY);
}

export function getDistance() {
  return buildDistance(DISTANCE_KEY);
}
