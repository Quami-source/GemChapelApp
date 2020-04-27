import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';



//components
import FirstScreen from './components/FirstScreen';
import SecondScreen from './components/SecondScreen';
import ThirdScreen from './components/ThirdScreen';
import User from './components/User';
import Login from './components/Login'
import Land from './components/Land';


const Stack = createStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="First" headerMode="none">
        <Stack.Screen name ='First' component={FirstScreen}/>
        <Stack.Screen name ='Second' component={SecondScreen}/>
        <Stack.Screen name = 'Third' component={ThirdScreen}/>
        <Stack.Screen name = 'Welcome' component = {User}/>
        <Stack.Screen name='Login' component ={Login}/>
        <Stack.Screen name='Land' component ={Land}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


