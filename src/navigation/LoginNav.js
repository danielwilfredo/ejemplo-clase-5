import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

export default function LoginNav({ logueado, setLogueado }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='LoginScreen'
        options={{ headerShown: false }}
      >
        {props => <LoginScreen {...props} setLogueado={setLogueado} logueado={logueado} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
