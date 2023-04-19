import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import HomeScreen from '@/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const AppStackMobile = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default AppStackMobile;
