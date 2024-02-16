import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlaceholderScreen from './src/screens/PlaceholderScreen';
import AttributeSelectorScreen from './src/screens/AttributeSelectorScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={AttributeSelectorScreen}
          options={{title: 'Welcome to Aura'}}
        />
        <Stack.Screen
          name="Placeholder"
          component={PlaceholderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
