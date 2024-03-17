import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FacilitySelectorScreen from "./src/screens/FacilitySelectorScreen/FacilitySelectorScreen";
import MenuBar from "./src/components/MenuBar/MenuBar";
import { useState, useEffect } from 'react';
import { Alert } from 'react-native';

import * as Location from 'expo-location';

const Stack = createNativeStackNavigator();

export default function App() {
  const [location, setLocation] = useState({
    "coords": {
      "accuracy": 0,
      "altitude": null,
      "altitudeAccuracy": -1,
      "heading": null,
      "latitude": 51.5076,
      "longitude": -0.0994,
      "speed": 0
    },
    "timestamp": 0
  });

  useEffect(() => {
    const getLocation = async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Location permissions denied',
          'Aura uses the Tate Modern as the default location. You may grant Aura location permissions in your device settings.',
          [{ 
            text: 'Okay',
          }]
        );
        console.log('location', location);
        return;
      }

      let userLocation = await Location.getCurrentPositionAsync({});
      setLocation(userLocation);
    };

    getLocation();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Facilities"
          component={FacilitySelectorScreen}
          options={{ title: "Aura" }}
        />
      </Stack.Navigator>
      <MenuBar></MenuBar>
    </NavigationContainer>
  );
}
