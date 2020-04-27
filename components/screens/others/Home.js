import React from 'react';
import {ScrollView,
        View,
        Text,
        Dimensions,
        Image, 
        FlatList, 
        SafeAreaView} from 'react-native';
import {
    MaterialIcons,
    AntDesign
}from "@expo/vector-icons";
const {width,height} = Dimensions.get('window')
const Home = ()=>{
    return(
       <ScrollView scrollEventThrottle={16}>
           <View style={{backgroundColor:'#fff',flex:1}}>
                <Text style={{fontSize:24,fontWeight:'400',paddingHorizontal:20,paddingTop:20,textAlign:'center'}}>
                    Some quote here, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                </Text>

                <View style={{paddingHorizontal:10,backgroundColor:'#fff',flexDirection:'row',paddingTop:20,}}>
                    <View style={{flex:1,backgroundColor:'#eecb67',marginRight:10,height:150,borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                        <Image 
                            source={require('../../../src/img/photos.png')}
                            style={{
                                flex:2,
                                paddingVertical:30,
                                width:100,
                                height:100,
                                resizeMode:'cover'}}/>
                        <Text style={{flex:1,fontSize:17,fontWeight:'300'}}>Photo gallery</Text>
                    </View>

                    <View style={{flex:1,backgroundColor:'#3f4a68',height:150,borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                        <Image 
                            source={require('../../../src/img/payments.png')}
                            style={{
                                flex:2,
                                paddingVertical:30,
                                width:100,
                                height:100,
                                resizeMode:'cover'}}/>
                        <Text style={{flex:1,fontSize:17,fontWeight:'300',color:'#fff'}}>Make payments</Text>
                    </View>
                    
                </View>

                <View style={{paddingHorizontal:10,backgroundColor:'#fff',flexDirection:'row',paddingTop:10,}}>
                    <View style={{flex:1,marginRight:10,backgroundColor:'#54c2d1',height:150,borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                        <Image 
                            source={require('../../../src/img/events.png')}
                            style={{
                                flex:2,
                                paddingVertical:30,
                                width:100,
                                height:100,
                                resizeMode:'cover'}}/>
                        <Text style={{flex:1,fontSize:17,fontWeight:'300',color:'#fff'}}>Events</Text>
                    </View>

                    <View style={{flex:1,backgroundColor:'#f7916b',height:150,borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                        <Image 
                            source={require('../../../src/img/audio.png')}
                            style={{
                                flex:2,
                                paddingVertical:30,
                                width:100,
                                height:20,
                                resizeMode:'cover'}}/>
                        <Text style={{flex:1,fontSize:17,fontWeight:'300'}}>Audio recordings</Text>
                    </View>
                    
                </View>
            </View>

            <View style={{backgroundColor:'#fff',paddingVertical:40}}>
                <View style={{flexDirection:'row',paddingHorizontal:20,}}>
                    <MaterialIcons name ='queue-music' 
                                    color='#fb82ab'  
                                    style={{flex:1,}}
                                    size={30}
                                    />
                    <Text style={{flex:3.5, borderBottomColor:'#ccc', borderBottomWidth:0.3,paddingBottom:20,fontSize:17}}>Church Songs lyrics</Text>
                
                </View>
                <View style={{flexDirection:'row',paddingHorizontal:20,}}>
                    <MaterialIcons name ='library-books' 
                                    color='#00bde5'  
                                    style={{flex:1,}}
                                    size={30}
                                    />
                    <Text style={{flex:3.5, borderBottomColor:'#ccc', borderBottomWidth:0.3,paddingBottom:20,fontSize:17}}>Spiritual books</Text>
                
                </View>

                <View style={{flexDirection:'row',paddingHorizontal:20,}}>
                    <AntDesign name ='bulb1' 
                                    color='#f09a33'  
                                    style={{flex:1,}}
                                    size={30}
                                    />
                    <Text style={{flex:3.5, borderBottomColor:'#ccc', borderBottomWidth:0.3,paddingBottom:20,fontSize:17}}>Lorem ipsum dolor</Text>
                
                </View>

                <View style={{flexDirection:'row',paddingHorizontal:20,}}>
                    <AntDesign name ='warning' 
                                    color='#fb82ab'  
                                    style={{flex:1,}}
                                    size={30}
                                    />
                    <Text style={{flex:3.5, borderBottomColor:'#ccc', borderBottomWidth:0.3,paddingBottom:20,fontSize:17}}>Ut enim ad minima</Text>
                
                </View>
            </View>
       </ScrollView> 
    )
}

export default Home;