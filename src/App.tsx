/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {Profile} from '@pages/Profile';
import React from 'react';
import 'react-native';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Profile />
    </>
  );
};

export default App;
