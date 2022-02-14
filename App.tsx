import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import RootStack from './src/nav/RootStack/RootStack';

export default function App() {
  return (
    <NavigationContainer>
        <RootStack/>
    </NavigationContainer>
   
  );
}

