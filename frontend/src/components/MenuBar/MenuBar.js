import React from "react";
import { StyleSheet } from "react-native";
//import { TouchableOpacity, Text } from "react-native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { NavigationContainer } from "@react-navigation/native";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableHighlight } from "react-native";
import { styleVariables } from "../../styles/globalStyleVariables";
import Button from "../Button/Button";

export default function MenuBar() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button title="Clear all" />
      <Button title="Next" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    columnGap: 80,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#A9A9A9" // I cannot set this color as globalStyleVariable.js background
  }
});
