import React from "react";
import { StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { styleVariables } from "../../styles/globalStyleVariables";
import Button from "../Button/Button";

export default function MenuBar() {
  // const navigation = useNavigation();
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
    backgroundColor: styleVariables.menuBarBackground
  }
});
