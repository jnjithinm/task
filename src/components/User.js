import React from "react";
import {View,Text,StyleSheet,Dimensions} from 'react-native'
import { Avatar } from 'react-native-paper';
const {width,height}=Dimensions.get('window')
export default function User({index,key}){
    return(
    <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:'3%',alignItems:'center',height:height*10/100,width:width*90/100}} key={key} >
                   <Avatar.Image source={{uri:index.avatar}} size={60}/>
                   <View >
                
                   <Text style={styles.texts}>{index.first_name}{'\b'}{index.last_name}</Text>
        
     
                   <Text style={styles.emails}>{index.email}</Text>
                   </View>
                
               </View>

)}
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:'5%',
        justifyContent:'center',
        backgroundColor:'#EEEEEE',
        width:width,
        height:height
    },
    texts:{
        color:'black',
        fontSize:20,
        alignSelf:'flex-start',
        width:width*70/100
    },
    avatar:{
        width:80,
        height:80,

    },
    emails:{
        color:'#DC7633',
        fontSize:18
    }
})