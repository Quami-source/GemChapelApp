import 'react-native-gesture-handler';
import React from 'react';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import { Dimensions,
    StyleSheet, 
    Text, View, 
    Image, 
    TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';



//components
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
import User from './User';

const {width,height} = Dimensions.get('window')

const Welcome = ({navigation})=>{
  return(
    <View style={styles.container}>
        <View style={styles.subContainer}>
            <View style={styles.welcome}>
                <Text style={{fontSize:20}}>Welcome to the Gem Chapel App</Text>
            </View>
            
            <View style={styles.circlesContainer}>
                    <View style={styles.circle1}/>
                    <View style={styles.circle2}  onPress={()=> {navigation.navigate('Second')}}/>
                    <View style={styles.circle3}/>
              </View>

            <View style = {styles.pictureFrame}>
            <Image 
                source={require('../src/img/frame.png')}
                style={{width:500,
                height:500}}
            />
            </View>


            <View style={styles.spanContainer}>
                <Text style={{textAlign:'center',fontSize:20}}>Get live updates of events,
                     pictures and videos from your church...
                </Text>
            </View>
      </View>

        <View style={{flexDirection:'row',marginBottom:10}}>
            <View>
                <TouchableOpacity style={styles.btnContainer} onPress={()=>{navigation.navigate('Welcome')}}>
                    <Text style={{fontSize:20,color:'#fff',textAlign:'center'}} >Skip</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:2,}}>
                <TouchableOpacity>
                    <EvilIcons 
                        name="arrow-right" 
                        size={60} color="#ffcb74" 
                        style={{textAlign:'right'}} 
                        onPress={()=>{navigation.navigate('Second')}}
                    />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const Tab = createMaterialTopTabNavigator();

export default function FirstScreen(){
    
  return(
    <Tab.Navigator initialRouteName="First" tabBarPosition='top' tabBarOptions={{
      style:{
        margin:0,
        height:35,
        padding:0,
        opacity:0,
      }
    }}
    
    >
      <Tab.Screen name="First" component={Welcome}/>
      <Tab.Screen name="Second" component={SecondScreen} />
      <Tab.Screen name="Third" component={ThirdScreen}/>
    </Tab.Navigator>
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    backgroundColor: '#FFF',
    alignItems : 'center',
    justifyContent : 'space-evenly',
  },
  welcome:{
    marginTop:20,
    marginLeft:20,
    paddingBottom:10,
  },
  subContainer:{
    flex:5,
    justifyContent:'center',
    backgroundColor: '#e8e8e8',
    borderRadius : 60,
    flexDirection : 'column',
    margin:20,
    width:width-20,
    marginBottom:50
  },

  circlesContainer:{
    flexDirection : 'row',
    marginLeft : 15,
  },
  circle1:{
    backgroundColor : '#fff',
    height : 15,
    width : 15,
    borderRadius : 10,
    margin : 5
  },

  circle2:{
    backgroundColor : '#cccccc',
    height : 15,
    width : 15,
    borderRadius : 10,
    margin : 5
  },

  circle3:{
    backgroundColor : "#cccccc",
    height : 15,
    width : 15,
    borderRadius : 10,
    margin : 5
  },
  pictureFrame:{
    flex:4,
    justifyContent:'center',
    alignItems:'center'
  },
  spanContainer:{
    flex:1,
    
  },

  btnContainer:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'#59a7d5',
    borderRadius : 60,
    width : width-200,
    marginLeft:10
  }
});