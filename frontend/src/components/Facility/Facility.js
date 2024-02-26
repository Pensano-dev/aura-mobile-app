import React from "react";
import { Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./FacilityStyles";

export default Facility = ({ facilityName, iconName, onPress, isPressed }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          { backgroundColor: pressed && isPressed ? "lightblue" : "transparent" },
        ]}
      >
        <View style={[styles.iconContainer, { backgroundColor: isPressed ? "lightgrey" : "transparent" }]}>
          <Ionicons name={iconName} size={65} color="black" style={styles.icon} />
        </View>
        <Text>{facilityName}</Text>
      </Pressable>
    </View>
  );
};
