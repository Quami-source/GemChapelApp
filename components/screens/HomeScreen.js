import React from 'react';
import {Image,View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import Home from './others/Home'
const Stack = createStackNavigator();
const HomeScreen = ()=>{
    return(
        <Stack.Navigator initialRouteName = "Home" >
            <Stack.Screen name = "Home" component={Home} options={
                {
                    headerLeft:()=>(
                        <View style={{borderWidth:1,borderColor:'#ccc',width:50,height:50,borderRadius:40,marginLeft:5,alignItems:'center',justifyContent:'center',backgroundColor:"#fff"}}>
                            <Image source={require('../../src/img/Gem02.png')} style={{width:100,height:80,alignSelf:'center'}}/>
                        </View>
                    ),
                    headerTitle:'Gem Diaspora',
                  
                    
                }
            }/>
        </Stack.Navigator>
    )
}

export default HomeScreen;