import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  Button,
  ScrollView,
} from "react-native";

export default function LoginForm2({
  passwordDetails,
  nameDetails,
  setnameDetails,
  setpasswordDetails,
}) {
  //   console.log(nameDetails);

  useEffect(() => {
    // console.log(nameDetails);
    // User.setUser(nameDetails);
    setnameDetails(nameDetails);
    setpasswordDetails(passwordDetails);
  });

  // const [NameDetails, setNameDetails] = useState("");
  // const [PasswordDetails, setPasswordDetails] = useState("");

  // function settolocal() {
  //   localStorage.setItem("Name", NameDetails);
  //   localStorage.setItem("Password", PasswordDetails);
  // }

  async function storeData(nameDetails) {
    try {
      await AsyncStorage.setItem("@storage_Key", nameDetails);
    } catch (e) {
      // saving error
    }
  }

  return (
    <>
      {/* <Router> */}
      {/* Old View */}
      <View className="text-white py-16 px-4">
        <View className="col-lg-6">
          <View className="card-body p-md-5 mx-md-4">
            <View className="text-center">
              {/* <Image source="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" /> */}
              {/* <style="width: 185px;" alt="logo"> */}
              <Text className="text-white text-center text-2xl mt-1 mb-5 pb-1">PersonalPass</Text>
            </View>

            <View>
              <Text className="text-white text-center text-xl mb-3">
                Please sign into your account
              </Text>

              <View className="form-outline mb-4">
                <TextInput
                  type="name"
                  id="form2Example11"
                  className="form-control text-white border-2 rounded-lg p-1 border-[#ee7724] "
                  placeholder=" Username"
                  placeholderTextColor="white"
                  onChangeText={setnameDetails}
                />
              </View>

              <View className="form-outline mb-4">
                <TextInput
                  type="password"
                  id="form2Example22"
                  className="form-control text-white border-2 rounded-lg p-1 border-[#ee7724]"
                  placeholder=" Password"
                  placeholderTextColor="white"
                  // onChangeText={(e) => {
                  //   setpasswordDetails(e.target.value);
                  // }}
                  onChangeText={setpasswordDetails}
                />
              </View>

              {/* Error */}
              {/* <View className="hidden">Error</View> */}

              <View className="text-center pt-1 mb-5 pb-1">
                <Text
                  className="block text-white font-bold fa-lg bg-gradient-to-r from-[#ee7724] to-[#b44593] px-4 py-2 rounded-lg mx-auto mb-3"
                  onPress={() => {
                    // login.setLogin("true");
                  }}
                >
                  SIGN IN
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="col-lg-6 d-flex align-items-center rounded-lg bg-gradient-to-r from-[#ee7724] to-[#b44593]">
          <View className="text-white px-3 py-4 p-md-5 mx-md-4">
            <Text className="mb-4 text-2xl">
              Secure, anonymous, stateless password manager
            </Text>
            <Text className="small mb-0">
              We do not use cookies, tracking scripts or any third party in
              browser software.
            </Text>
          </View>
        </View>
      </View>
      {/* </Router> */}
    </>
  );
}
