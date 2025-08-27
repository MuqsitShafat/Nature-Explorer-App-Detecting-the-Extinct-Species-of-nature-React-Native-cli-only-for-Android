import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Identify_nature from '../components/Identify_nature';
import Log_discoveries from '../components/Log_discoveries';
import Connect_and_share from '../components/Connect_and_share';
import Nature_Explorer from './Nature_Explorer';
const Stack = createNativeStackNavigator();
const Components_navigation = () => {
  return (
        <Stack.Navigator>
            <Stack.Screen name="Nature" component={Identify_nature} options={{ headerShown: false }} />
            <Stack.Screen name="Log" component={Log_discoveries} options={{ headerShown: false }} />
            <Stack.Screen name="Connect" component={Connect_and_share} options={{ headerShown: false }} />
            <Stack.Screen name="Nature_Explorer" component={Nature_Explorer} options={{ headerShown: false }} />
        </Stack.Navigator>
    
  )
}

export default Components_navigation