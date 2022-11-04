import React, { useState } from "react";
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
import zxcvbn from "zxcvbn";

const PasswordStrengthMeter = ({ password1 }) => {
  const testResult = zxcvbn(password1);
  // console.log(testResult);
  const num = testResult.score;

  const createPassLabel = () => {
    switch (testResult.score) {
      case 0:
        return "Very weak";
      case 1:
        return "Weak";
      case 2:
        return "Average";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      default:
        return "";
    }
  };

  const funcProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return "red";
      case 1:
        return "red";
      case 2:
        return "orange";
      case 3:
        return "green";
      case 4:
        return "green";
      default:
        return "none";
    }
  };

  return (
    <>
      <View className="text-white">
        <View className="mb-2">
          <View className="w-full h-2 bg-gray-400 rounded-full mt-1">
            <View
              className={`w-${
                num == 0 ? 1 : num
              }/4 h-full text-center text-xs text-white bg-${funcProgressColor()}-600 rounded-full`}
            ></View>
          </View>
        </View>
        <View className={` text-${funcProgressColor()}-600 `}>
          <Text className={`text-center text-${funcProgressColor()}-600`}>
            {createPassLabel()}
          </Text>
        </View>
      </View>
    </>
  );
};

export default PasswordStrengthMeter;
