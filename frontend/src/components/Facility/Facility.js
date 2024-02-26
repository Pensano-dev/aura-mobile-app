import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./FacilityStyles";

const Facility = ({ icon, name, onPress, onPressIn, onPressOut }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
    onPressIn();
  };

  const handlePressOut = () => {
    setIsPressed(false);
    onPressOut();
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={({ pressed }) => [
          styles.iconContainer,
          { backgroundColor: isPressed ? "blue" : "grey" },
        ]}
      >
        <Ionicons name={icon} size={75} />
      </Pressable>
      <Text>{name}</Text>
    </View>
  );
};

export default Facility;
