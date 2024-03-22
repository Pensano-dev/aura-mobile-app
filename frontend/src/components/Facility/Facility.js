import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./FacilityStyles";
import { styleVariables } from "../../styles/globalStyleVariables";
const Facility = ({ icon, name, onPress, onLongPress, isSelected, isDoubleSelected }) => {

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        style={({ pressed }) => [
          styles.iconContainer,
          {
            backgroundColor: isDoubleSelected
              ? styleVariables.doubleSelected
              : pressed || isSelected
                ? styleVariables.singleSelected
                : styleVariables.unselected
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
