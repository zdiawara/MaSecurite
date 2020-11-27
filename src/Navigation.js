import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import AppMAP from './Map';
import GuideConducteur from './Guide';
import Profile from './Profile';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AppMAP" component={AppMAP} />
      <Stack.Screen name="GuideConducteur" component={GuideConducteur} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default Navigation;
