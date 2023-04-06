import * as React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from './routes';
import TestScreen from '../screens/TestScreen';
import TestScreen2 from '../screens/TestScreen2';
import MainScreen from '../screens/MainScreeen';

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();
const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ScreenNames.HOME} component={MainScreen} />
        <Stack.Screen name={ScreenNames.TEST} component={TestScreen} />
        <Stack.Screen name={ScreenNames.TEST2} component={TestScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
export {default as ScreenNames} from './routes';
