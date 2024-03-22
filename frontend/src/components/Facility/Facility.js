import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./FacilityStyles";
import { globalColours } from "../../styles/globalColourVariables";

const Facility = ({
  icon,
  name,
  onPress,
  onLongPress,
  isSelected,
  isDoubleSelected
}) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        style={({ pressed }) => [
          styles.iconContainer,
          {
            backgroundColor: isDoubleSelected
              ? globalColours.doubleSelectedIcon
              : pressed || isSelected
                ? globalColours.singleSelectedIcon
                : globalColours.unselectedIcon
          }
        ]}
      >
        <Ionicons name={icon} size={75} />
      </Pressable>
      <Text>{name}</Text>
    </View>
  );
};

export default Facility;
