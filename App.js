import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
// import Loggedin from './Loggedin'
import LoggedinContent from './LoggedinContent';
import Loggedin from './components/Loggedin';
import * as LocalAuthentication from 'expo-local-authentication';
import LoginForm2 from './components/LoginForm2';

export default function App() {

  const [isAuthenticated, setisAuthenticated] = useState("hidden");

  useEffect(() => {
    async function authenticate(){
      const result= await LocalAuthentication.authenticateAsync();
      setisAuthenticated("");
    }
    authenticate();
  }, []);


  // For login form
  const [username, setnameDetails] = useState("Name");
  const [passwordDetails, setpasswordDetails] = useState("");
  

  return (
    <View style={styles.container} className={`${isAuthenticated} bg-gray-800`}>
      <StatusBar style="auto" />
      <LoginForm2 nameDetails={username} setnameDetails={setnameDetails} passwordDetails={passwordDetails} setpasswordDetails={setpasswordDetails}/>
      <Loggedin username={username}/>
      {/* <LoggedinContent/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
