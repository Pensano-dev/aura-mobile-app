import React from "react";
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FacilityComponent = ({ facilityName, iconName }) => {
  return (
    <View>
      <Ionicons name={iconName} size={24} color="black" />
      <Text>{facilityName}</Text>
    </View>
  );
}

export default FacilityComponent;
