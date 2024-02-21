import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FacilitySelectorScreen from "./src/screens/FacilitySelectorScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Facilities"
          component={FacilitySelectorScreen}
          options={{ title: "Aura" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
