import React from "react";
import { Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./FacilityStyles";

export default Facility = ({ facilityName, iconName, onPress, isPressed }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        { backgroundColor: pressed && isPressed ? "lightblue" : "transparent" },
        styles.pressable,
      ]}
    >
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Ionicons
            name={iconName}
            size={65}
            color="black"
            style={styles.icon}
          />
        </View>
        <Text>{facilityName}</Text>
      </View>
    </Pressable>
  );
};
