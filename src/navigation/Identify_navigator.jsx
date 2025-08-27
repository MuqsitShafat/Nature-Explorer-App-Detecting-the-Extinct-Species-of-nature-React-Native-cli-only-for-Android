// IdentifyStack.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Identify from '../TabBarScreens/Identify';
import IdentifyByImageScreen from '../TabBarSubScreens/IdentifyByImageScreen';
import IdentifyBySoundScreen from '../TabBarSubScreens/IdentifyBySoundScreen';
import IdentifyTracksScreen from '../TabBarSubScreens/IdentifyTracksScreen';
import IdentifyWithSearchBarandHistory from '../TabBarSubScreens/IdentifyWithSearchBarandHistory';

const Stack = createNativeStackNavigator();

export default function IdentifyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Identify"
        component={Identify}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IdentifyWithSearchBarandHistory"
        component={IdentifyWithSearchBarandHistory}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IdentifyByImage"
        component={IdentifyByImageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IdentifyBySound"
        component={IdentifyBySoundScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IdentifyTracksScreen"
        component={IdentifyTracksScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
