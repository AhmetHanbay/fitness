import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './src/pages/Welcome';
import MemberSign from './src/pages/MemberSign';
import Input from './src/pages/components/Input';
import MemberResult from './src/pages/MemberResult';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name='WelcomeScreen' component={Welcome}
        />
        <Stack.Screen name='MemberSign' component={MemberSign}
        />
        <Stack.Screen name='Input' component={Input}
        />
        <Stack.Screen name='MemberResult' component={MemberResult}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;