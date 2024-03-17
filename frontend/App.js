import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FacilitySelectorScreen from "./src/screens/FacilitySelectorScreen/FacilitySelectorScreen";
import MenuBar from "./src/components/MenuBar/MenuBar";
import { useState, useEffect } from 'react';

import * as Location from 'expo-location';

const Stack = createNativeStackNavigator();

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
    console.log('text', text);
  } else if (location) {
    console.log('location', location)
    console.log('stringified', JSON.stringify(location));
  }

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
