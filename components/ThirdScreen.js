import React from 'react'
import { Platform,
    StyleSheet, 
    Text, View, 
    Image, 
    TouchableOpacity,
    Dimensions
   } from 'react-native';
//import { EvilIcons } from '@expo/vector-icons';


    //import ThirdScreen from './ThirdScreen';
const {width,height} = Dimensions.get('window');

export default function ThirdScreen({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.welcome}>
                    <Text style={{fontSize:20,}}>Press start when ready</Text>
                </View>
                
                <View style={styles.circlesContainer}>
                    <View style={styles.circle1} />
                    <View style={styles.circle2}/>
                    <View style={styles.circle3}/>
                </View>

                <View style = {styles.pictureFrame}>
                <Image 
                    source={require('../src/img/notification1.png')}
                    style={{width:500,
                    height:500}}
                />
                </View>


                <View style={styles.spanContainer}>
                    <Text style={{textAlign:'center',fontSize:20,}}>Get notified about 
                      all your churchs' events
                    </Text>
                </View>
            </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Welcome')}}>
                    <Text style={{fontSize:20,color:'#fff',textAlign:'center'}} >Start</Text>
                </TouchableOpacity>
            </View>
                
        </View>
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
      flex:4,
      justifyContent:'center',
      backgroundColor: '#e8e8e8',
      borderRadius : 60,
      flexDirection : 'column',
      margin:20,
      width:width-20

    },
  
    circlesContainer:{
      flexDirection : 'row',
      marginLeft : 15,
    },
    circle1:{
      backgroundColor : '#cccccc',
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
      backgroundColor : "#fff",
      height : 15,
      width : 15,
      borderRadius : 10,
      margin : 5
    },
    pictureFrame:{
      flex:2,
      justifyContent:'center',
      alignItems:'center'
    },
    spanContainer:{
      flex:0.5,
      
    },
  
    btnContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#59a7d5',
      borderRadius : 60,
      width : width-150,
      maxHeight:50,
      marginBottom:10
    }
  });