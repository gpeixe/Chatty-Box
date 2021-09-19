import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../pages/Login';
import {Profile} from '../pages/Profile';

const Stack = createStackNavigator();

export const pages = {
  login: 'Login',
  profile: 'Profile',
};

export function SignInStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={pages.login}
        screenOptions={{headerMode: 'screen', headerShown: false}}>
        <Stack.Screen name={pages.login} component={Login} />
        <Stack.Screen name={pages.profile} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
