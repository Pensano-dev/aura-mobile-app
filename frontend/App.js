import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FacilitySelectorScreen from "./src/screens/FacilitySelectorScreen/FacilitySelectorScreen";
import MenuBar from "./src/components/MenuBar/MenuBar";

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
      <MenuBar></MenuBar>
    </NavigationContainer>
  );
}
