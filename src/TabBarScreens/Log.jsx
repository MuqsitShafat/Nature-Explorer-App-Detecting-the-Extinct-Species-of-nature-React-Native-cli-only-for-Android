import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogNewObservationScreen from '../TabBarSubScreens/LogNewObservationScreen';
import NotesObservationDetailsScreen from '../TabBarSubScreens/LogObservationDetailsScreen';
import LogObservationScreen from '../TabBarSubScreens/LogObservationScreen';
const Stack = createNativeStackNavigator();
const Log = () => {
  return (
        <Stack.Navigator>
            <Stack.Screen name="LogObservationScreen" component={LogObservationScreen} options={{ headerShown: false }} />
            <Stack.Screen name="LogNewObservationScreen" component={LogNewObservationScreen} options={{ headerShown: false }} />
            <Stack.Screen name="NotesObservationDetailsScreen" component={NotesObservationDetailsScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
  )
}

export default Log