import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './home';
import AppMAP from './Map';
import GuideConducteur from './Guide';
import Profile from './Profile';
import CGU from './CGU';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AppMAP" component={AppMAP} />
      <Stack.Screen name="GuideConducteur" component={GuideConducteur} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="CGU" component={CGU} />
    </Stack.Navigator>
  );
};

export default Navigation;
