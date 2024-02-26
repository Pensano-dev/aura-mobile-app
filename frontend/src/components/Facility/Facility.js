import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./FacilityStyles";

const Facility = ({ icon, name, onPress, isPressed }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.iconContainer,
          { backgroundColor: pressed || isPressed ? "lightblue" : "lightgrey" },
        ]}
      >
        <Ionicons name={icon} size={75} />
      </Pressable>
      <Text>{name}</Text>
    </View>
  );
};

export default Facility;
