import React,{useEffect, useState} from "react";
import {View,Text,StyleSheet,Dimensions,TouchableOpacity} from 'react-native'
import axios from "axios";

import User from "../components/User";
const {width,height}=Dimensions.get('window')
const Home=({navigation})=>{

    const [arr,setArr]=useState([])
    useEffect(()=>{
        axios.get(' https://reqres.in/api/users?page=2')
            .then(res=>{
                console.log("ressssss",res.data)
                setArr(res.data.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[])
    return(

        <View style={styles.container}>
           {arr.map((index,i)=>(
              <User index={index} key={i} />
           ))}
        <TouchableOpacity style={styles.logout} onPress={()=>{navigation.navigate('Login')}}>
            <Text>logout</Text>
        </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#EEEEEE',
        paddingHorizontal:'7%',
        width:width,
        height:height
    },
    logout:{
        width:width*20/100,
        height:height*6/100,
        backgroundColor:'#AAB7B8',
        alignSelf:'flex-start',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20

    }
})
export default Home;