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
  TouchableOpacity,
} from "react-native";
import deleteicon from "./assets/delete.png";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Loggedin() {
  //Date
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  // New Data
  const [eventData, seteventData] = useState([
    // { notice: "Trip-1", date: "15th Oct" },
  ]);

  const [notice2, setnotice2] = useState("");
  const [date2, setdate2] = useState("");

  function setData() {
    if (notice2 == "" || date2 == "") {
      return;
    }
    seteventData([...eventData, { notice: notice2, date: date2 }]);
    storeData(eventData);
  }

  async function storeData(eventData) {
    try {
      const jsonValue = JSON.stringify(eventData);
      await AsyncStorage.setItem("@storage_Key", jsonValue);
    } catch (e) {
      // saving error
    }
  }
  //
  //
  async function getData() {
    try {
      const jsonValue = await AsyncStorage.getItem("@storage_Key");
      jsonValue != null
        ? seteventData(JSON.parse(jsonValue))
        : seteventData(null);
    } catch (e) {
      // error reading value
    }
  }
  //

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    storeData(eventData);
  }, [eventData]);

  // Password generator visibility
  const [generator_visibility, setgenerator_visibility] = useState("hidden");

  // Premium
  const [premium, setpremium] = useState("GET PREMIUM");
  // useEffect(() => {
  //   if (
  //     username == "Rishab" ||
  //     username == "Krish" ||
  //     username == "Vivaan" ||
  //     username == "Arnav"
  //   ) {
  //     setpremium("PREMIUM");
  //   }
  // }, []);

  // Delete passwords
  const removeTodo = (index) => {
    const newTodos = [...eventData];
    newTodos.splice(index, 1);
    seteventData(newTodos);
  };

  return (
    <ScrollView>
      <View className="bg-gray-800 px-4 py-4">
        {/* <Text className="text-white">Welcome back, Rishab</Text> */}
        <Text className="text-4xl mt-14 text-center font-semibold text-white">
          Welcome back, Rishab
        </Text>
        <Text className="text-md mt-2 mb-8 text-center text-gray-400">
          View and Manage your passwords
        </Text>
        <View className="">
          <View className="flex items-center bg-purple-600 hover:bg-purple-700 rounded-xl justify-between px-4 py-6">
            <View className="flex items-center rounded-xl">
              <Text className="text-xl text-white font-semibold">
                Generate new password
              </Text>
            </View>
          </View>
          <View className="flex-row my-4 mx-auto space-x-4">
            <View className="flex items-center w-2/5 bg-orange-600 hover:bg-purple-700 rounded-xl justify-between px-2 py-6">
              <View className="flex items-center rounded-xl">
                <Text className="flex-col text-xl text-white text-center font-semibold">
                  All
                </Text>
                <Text className="text-xs text-gray-300 text-center font-semibold">
                  Safe
                </Text>
              </View>
            </View>
            <View className="flex items-center w-1/2 bg-orange-600 hover:bg-purple-700 rounded-xl justify-between px-2 py-6">
              <View className="flex items-center rounded-xl">
                <Text className="flex-col text-xl text-white text-center font-semibold">
                  0
                </Text>
                <Text className="text-xs text-gray-300 text-center font-semibold">
                  Compromised
                </Text>
              </View>
            </View>
          </View>
          <Text className="text-gray-300 mx-auto mb-4">Today's date : {date}</Text>
        </View>
        <ScrollView>
          <ScrollView>
            {eventData.map((eventData1, index) => {
              return (
                <>
                  <View key={index} className="mb-4">
                    <View className="bg-gray-700 rounded-xl p-[25px]">
                      <View className="flex-row">
                        <Text
                          // onPress={() => removeTodo(index)}
                          className="text-xl w-max text-white font-semibold border-b border-gray-200"
                        >
                          {eventData1.notice}
                        </Text>
                        <TouchableOpacity onPress={() => removeTodo(index)}>
                          <Image
                            // whileHover={{ rotate: 180 }}
                            source={deleteicon}
                            className="w-[35px] h-[35px] mx-2"
                            alt=""
                          />
                        </TouchableOpacity>
                      </View>
                      <View className="flex space-x-2 my-6">
                        <Text className="text-3xl text-white font-bold">
                          {eventData1.date}
                        </Text>
                      </View>
                      <PasswordStrengthMeter password1={eventData1.date} />
                    </View>
                  </View>
                </>
              );
            })}
          </ScrollView>
          <View className="">
            {/* <View className="rounded-xl px-4 py-6 w-full bg-gray-700 relative"> */}
          </View>
          <View>
            <View className="bg-gray-700 rounded-xl p-[25px]">
              <TextInput
                className="bg-gray-200 rounded-lg p-2"
                placeholder="Account identifier"
                keyboardType="text"
                onChangeText={setnotice2}
              />
              <TextInput
                className="bg-gray-200 mt-2 rounded-lg p-2"
                placeholder="Password"
                keyboardType="text"
                onChangeText={setdate2}
              />
              <Text
                onPress={setData}
                className="bg-orange-600 mx-auto mt-4 w-16 text-center font-bold rounded-lg px-3 py-3 text-white"
              >
                Add
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}
