import React from "react";
import { View, Alert } from "react-native";
import MyButton from "./MyButton";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus
} from "expo-location";

const Location = () => {
  const [locationPermissionInfo, requestPermission] =
    useForegroundPermissions();
  // console.log(locationPermissionInfo);

  async function verifyPermissions() {
    if (locationPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      console.log(locationPermissionInfo.status);
      return permissionResponse.granted;
    }

    if (locationPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant location permissions to use this app.",
        [
          {
            text: "Okay"
            // onPress: async () => {
            //   const permissionResponse = await requestPermission();
            //   return permissionResponse.granted;
            // }
          }
        ]
      );
      return false;
    }

    return true;
  }

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      console.log("No permission");
      return;
    }

    console.log("Getting location...");
    const location = await getCurrentPositionAsync();
    console.log(location);
  };

  return (
    <View>
      <MyButton icon="location" onPress={getLocationHandler}>
        Get Location
      </MyButton>
    </View>
  );
};

export default Location;
