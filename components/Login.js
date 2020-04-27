import React,{useState} from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import {View,Text,TextInput,Image,StyleSheet,Dimensions, TouchableOpacity} from 'react-native';

const {width,height} = Dimensions.get('window');

const Login = ({navigation})=>{
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleNameChange = (e)=>{
        
        setName(e.target.value)
        
    }

    const handleKeyChange = (e)=>{
        setPassword(e.target.value)
    }

    const hangleOnPress = (e)=>{
        //let debug = true
        //debug(e.target.value)
        navigation.navigate('Land')
    }


    return(
        <View style={{flex:1,justifyContent:'space-around',alignItems:'center',backgroundColor:'#fff'}}>
            <View style={styles.profile}>
                <MaterialIcons name="person-outline" size={150} color='#59a7d5' />
            </View>
            <View style={styles.loginText}>
                <Text style={{fontSize:30}} >Login</Text>
            </View>
            
            <View style={styles.inputContainer}>
                <View style={styles.nameInput}>
                    <View style={{backgroundColor:"#e8e8e8",width:250,borderRadius:10,height:50,justifyContent:'center'}}>
                        <TextInput 
                            value={name}
                            placeholder="Name" 
                            placeholderTextColor="#ccc"
                            onChange={handleNameChange}
                            textContentType="name"
                            style={{fontSize:20,paddingLeft:10,color:'#ccc'}}
                        />
                    </View>
                </View>
                <View style={styles.nameInput}>
                    <View style={{backgroundColor:"#e8e8e8",width:250,borderRadius:10,height:50,justifyContent:'center'}}>
                        <TextInput 
                            value = {password}
                            placeholder="Password" 
                            placeholderTextColor="#ccc" 
                            textContentType="password"
                            secureTextEntry={true}
                            onChange={handleKeyChange
                            }
                            style={{fontSize:20,paddingLeft:10,color:'#ccc'}}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.signBtn} onPress={hangleOnPress}>
                    <View  >
                        <Text style={{color:'#fff',fontWeight:'900',fontSize:25,textAlign:'center'}}>LOGIN</Text>
                    </View>
                </TouchableOpacity>
            </View>

            

            
        </View>
    )
}


const styles = StyleSheet.create({
    profile:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:200,
        borderRadius:140,
        marginTop:50
    },
    loginText:{
        flex:0.6,
        paddingTop:20
    },
    inputContainer:{
        flex:1.5,
        margin:10,
        alignItems:'center'
    },

    nameInput:{
        flex:0.3,
    },

    signBtn:{
        flex:0.2,
        justifyContent:"center",
        width:width/2,
        borderRadius:60,
        backgroundColor:'#59a7d5'
    }
})






export default Login;