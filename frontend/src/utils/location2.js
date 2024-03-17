import { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';

import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMeg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {


      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return
      }

      let location = await Location.getCurrentPositionAsync({});
    })
  })
}