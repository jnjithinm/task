import React,{useMemo} from 'react'
import { NavigationContainer } from "@react-navigation/native";
import Homestack from './src/navigation/homestack';
import { AuthContext } from './src/context';
import axios from 'axios';
const App=()=>{
  
  return(
    // <AuthContext.Provider value={{loginState,...authContext}}>
    <NavigationContainer>
    <Homestack />
    </NavigationContainer>
    // </AuthContext.Provider>
  )
}
export default App;