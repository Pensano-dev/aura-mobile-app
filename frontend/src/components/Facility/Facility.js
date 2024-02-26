import React from "react";
import { Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./FacilityStyles";

export const Facility = ({ facilityName, iconName, onPress, isPressed }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.pressable,
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

