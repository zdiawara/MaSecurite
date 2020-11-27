import {AsyncStorage} from 'react-native';
import {DISTANCE_INFRA_KEY, DISTANCE_KEY} from './constants';

export const setDistance = (distance) => {
  return AsyncStorage.setItem(DISTANCE_KEY, distance);
};

export const setDistanceInfra = (distanceInfra) => {
  return AsyncStorage.setItem(DISTANCE_INFRA_KEY, distanceInfra);
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
