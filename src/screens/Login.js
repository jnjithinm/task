import React, { useEffect, useState } from "react";
import {View,Text,StyleSheet, TouchableOpacity, TextInput,Dimensions,Image,ToastAndroid} from 'react-native'
import axios from "axios";
const {width,height}=Dimensions.get('window')
const Login=({navigation})=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [toastflag,setToastFlag]=useState(false)
    const [token,setToken]=useState(null)
   
    const homelogin=()=>{
        if(email.length>3 && password.length>5)
        {
            axios.post('https://reqres.in/api/login',{ email, password  })
        .then(res=>{
            console.log("respooonse",res.data)
            setToken(res.data)
            if(token)navigation.navigate('Home');
        }
        )
        .catch(err=>console.log(err))
          
        }
        else{
            setToastFlag(true);
        }
        
    }

    
    return(
        <View style={styles.container}>
            <View style={styles.contents}>
            <Image source={require('../assets/vowerp.png')} style={{width:127,height:76,marginVertical:'4%'}}/>
                <TextInput style={[styles.input]} placeholder="Username" onChangeText={(text)=>setEmail(text)} placeholderTextColor={'#34495E'}/>
                              <TextInput style={[styles.input]} placeholder="Password" onChangeText={(text)=>setPassword(text)} placeholderTextColor={'#34495E'} />
                    <TouchableOpacity onPress={()=>homelogin()} style={styles.login}>
                    <Text style={[styles.text]}>Login</Text>
                    </TouchableOpacity>
                    {toastflag && (ToastAndroid.showWithGravity("check the input fields",ToastAndroid.SHORT,ToastAndroid.CENTER) )}
                
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#EEEEEE',
        width:width,
        height:height
    },
    text:{
        fontSize:22,
        color:'black'
    },
    input:{
        height:height*6/100,
        width:width*60/100,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:'2%',
        backgroundColor:'#ABB2B9',
        borderRadius:10,
        paddingHorizontal:'4%',
        
    },
    login:{
        height:height*6/100,
        width:width*60/100,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:'2%',
        backgroundColor:'#5499C7',
        borderRadius:20,
        
    },
    contents:{
        marginVertical:'50%',
        alignItems:'center'
    }

})
export default Login;