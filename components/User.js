import React,{useState} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
//import RadioForm,{RadioButtonLabel} from 'react-native-simple-radio-button';
import {RadioButton,} from 'react-native-paper';





export default function User({navigation}){
    //state
    const [checked, setChecked] = useState('Member');
    const [isDisabled, setDisabled] = useState(false);


    //radio props

    const radio_values = [
        {label: 'Member', value:0},
        {label: 'Admin', value:1},
    ]


    function getInitialValue({label,value}){
        return (
            {
                value:0
            }
        )
    }





    return(
        <View style={styles.container}>
            <View
                style={{flex:3, justifyContent:"center",alignItems:'center'}} 
            
            >
                <Text style={{textAlign:'center',fontSize:25}}>Choose your user preference</Text>
            </View>


            <View>
                <RadioButton
                    value='Member'
                    status = {checked === 'Member' ? 'checked' : 'unchecked'}
                    onPress = {()=>{
                        setChecked('Member')
                }}
                    color="#59a7d5"
                    style={{margin:50}}
                />
                <Text>Member</Text>

                <RadioButton
                    value='Admin'
                    status = {checked === 'Admin' ? 'checked' : 'unchecked'}
                    onPress = {()=>{
                        setChecked('Admin')
                        
                    }}
                    color="#59a7d5"
                />
                <Text>Admin</Text>
            </View>


            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.userBtn}
                    onPress={
                        ()=>{
                            if(checked === 'Member' && !isDisabled){
                                navigation.navigate('Login')
                            }
                        }
                    }
                
                >
                    <View >
                        <Text style={{textAlign:'center',color:'#fff',fontSize:19}}>Sign In</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.adminBtn}>
                    <View >
                        <Text style={{textAlign:'center',color:'#59a7d5',fontSize:19}}>Create Account</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{flex:1,justifyContent:'center',
                        alignItems:'center',}}>
                <Text style={{fontSize:15}}>
                    Have any questions?
                </Text>
                <Text>
                    Contact our support team
                </Text>
                <TouchableOpacity>
                    <Text style={{color:'#59a7d5'}}>contactsupport@customer.com</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor: '#FFF',
        alignItems : 'center',
        
    },

    btnContainer:{
        flex:2,
        flexDirection:'row'
    },
    userBtn:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#59a7d5',
        borderRadius:40,
        width:100,
        height:40,
        margin:10,
    },
    adminBtn:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:40,
        width:100,
        height:40,
        margin:10,
        borderWidth:3,
        borderColor:'#59a7d5'
    },
    statebg:{
        backgroundColor:'#fff'
    }
})
