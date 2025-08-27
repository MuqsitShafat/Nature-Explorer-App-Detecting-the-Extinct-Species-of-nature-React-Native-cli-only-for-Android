import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Register from '../stats/Register'; // your Register screen
import Login from '../stats/Login'; // your Login screen
import HomeNatureAppScreen from '../TabBarSubScreens/HomeNatureAppScreen';
import Home from '../TabBarScreens/Home';
import HomeJournalScreen from '../TabBarSubScreens/HomeJournalScreen';
import NewJournalEntry from '../TabBarSubScreens/NewJournalEntry';
import IdentificationResultScreen from '../TabBarSubScreens/HomeIdentificationResultsScreen';
const Stack = createStackNavigator();

export default function Home_navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreenHandler"
        component={Home}
        options={{ title: 'Register', headerTitleAlign: 'center',headerShown: false }} // you can customize header here
        
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: 'Register', headerTitleAlign: 'center' }} // you can customize header here
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Login', headerTitleAlign: 'center' }} // you can customize header here
      />
      <Stack.Screen
        name="HomeNatureAppScreen"
        component={HomeNatureAppScreen}
        options={{ headerShown: false }} // hide header for tabs
      />
      {/* same below */}
      <Stack.Screen
        name="HomeJournalScreen"
        component={HomeJournalScreen}
        options={{ headerShown: false }} // hide header for tabs
      />
      <Stack.Screen
        name="NewJournalEntry"
        component={NewJournalEntry}
        options={{ headerShown: false }} // hide header for tabs
      />
      <Stack.Screen
        name="HomeIdentificationResultScreen"
        component={IdentificationResultScreen}
        options={{ headerShown: false }} // hide header for tabs
      />

    </Stack.Navigator>
  );
}
