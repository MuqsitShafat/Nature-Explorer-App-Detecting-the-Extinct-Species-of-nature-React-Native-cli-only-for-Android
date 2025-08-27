
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileSettingsScreen from '../TabBarSubScreens/ProfileSettingsScreen';
import ProfileFeedbackScreen from '../TabBarSubScreens/ProfileFeedbackScreen';
import ProfileHelpandFaqsScreen from '../TabBarSubScreens/ProfileHelpandFaqsScreen';
import ProfileInfoScreen from '../TabBarSubScreens/ProfileInfoScreen';
const Stack = createNativeStackNavigator();
const Profile = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Settings" component={ProfileSettingsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileFeedbackScreen" component={ProfileFeedbackScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileHelpandFaqsScreen" component={ProfileHelpandFaqsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileInfoScreen" component={ProfileInfoScreen} options={{ headerShown: false }} />

    </Stack.Navigator>
  )
}

export default Profile