import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./ButtonStyles";

const Button = ({ onPress, title }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Button;

