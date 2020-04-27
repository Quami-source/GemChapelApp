import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    View,Text
} from 'react-native';
import {
    AntDesign,
    SimpleLineIcons,
    FontAwesome
} from '@expo/vector-icons'

//screens
import SettingsScreen from './screens/SettingsScreen';
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';



const Tab = createBottomTabNavigator()
const Land = ()=>{
    return(
        <Tab.Navigator
            initialRouteName='Home'
            activeColor="#59a7d5"
            inactiveColor="#ccc"
            barStyle={{backgroundColor:'#fff',
        
            }}
            tabBarOptions={{
                showLabel:false
            }}
        >
            <Tab.Screen 
                name="Home" 
                component ={HomeScreen} 
                options={
                    {
                        tabBarIcon: ({color,size}) => (
                            <SimpleLineIcons name="home" color={color} size={size}/>
                        ),
                        tabBarLabel:'Home',
                        
                    }
                }
                
            />

            <Tab.Screen 
                name="Explore" 
                component ={ExploreScreen} 
                options={
                    {
                        tabBarIcon: ({color,size}) => (
                            <FontAwesome name="wpexplorer" color={color} size={size}/>
                        ),
                        
                    }
                }
                
            />

            <Tab.Screen 
                name="Settings" 
                component ={SettingsScreen} 
                options={
                    {
                        tabBarIcon: ({color,size}) => (
                            <AntDesign name="setting" color={color} size={size}/>
                        ),
                       
                        
                    }
                }
                
            />
        </Tab.Navigator>
    )
}

export default Land;