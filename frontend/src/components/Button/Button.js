import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./ButtonStyles";

const Button = ({ onPress, title, isPrimary }) => {
  const { container, text } = styles(isPrimary);

  return (
    <TouchableOpacity onPress={onPress} style={container}>
      <Text style={text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

