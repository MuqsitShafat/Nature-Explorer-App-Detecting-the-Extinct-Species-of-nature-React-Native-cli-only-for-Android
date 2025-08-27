import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExploreMonarchButterfly from '../TabBarSubScreens/ExploreMonarchButterfly';
import ExploreExtinctSpeciesScreen from '../TabBarSubScreens/ExploreExtinctSpeciesScreen';
import ExploreExtinctDodo from '../TabBarSubScreens/ExploreExtinctDodo';
import ExploreFieldGuides from '../TabBarSubScreens/ExploreFieldGuides';
import ExploreNatureExplore from '../TabBarSubScreens/ExploreNatureExplore';
import ExploreCitizenScienceScreen from '../TabBarSubScreens/ExploreCitizenScienceScreen';
import ExploreProjectDetailsScreen from '../TabBarSubScreens/ExploreProjectDetailsScreen';
import ExploreEducationResourcesScreen from '../TabBarSubScreens/ExploreEducationResourcesScreen';
import ExploreWorldSpeciesMaps from '../TabBarSubScreens/ExploreWorldSpeciesMaps';
import ExploreNatureNearMe from '../TabBarSubScreens/ExploreNatureNearMe';
import ExploreExploreScreen from '../TabBarSubScreens/ExploreExploreScreen';
import ExploreTrailDetailsScreen from '../TabBarSubScreens/ExploreTrailDetailsScreen';
import ExploreParkDetailsScreen from '../TabBarSubScreens/ExploreParkDetailsScreen';
import JournalEntryDetailScreen from '../TabBarSubScreens/JournalEntryScreen';
const Stack = createNativeStackNavigator();
const Explore = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='ExploreExploreScreen' component={ExploreExploreScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='ExploreMonarchButterfly' component={ExploreMonarchButterfly} options={{ headerShown: false }}/>
      <Stack.Screen name='ExploreExtinctSpeciesScreen' component={ExploreExtinctSpeciesScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='ExploreExtinctDodo' component={ExploreExtinctDodo} options={{ headerShown: false }}/>
      <Stack.Screen name='ExploreFieldGuides' component={ExploreFieldGuides} options={{ headerShown: false }}/>
      <Stack.Screen name='ExploreTrailDetailsScreen' component={ExploreTrailDetailsScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='ExploreNatureNearMe' component={ExploreNatureNearMe} options={{ headerShown: false }}/>
      <Stack.Screen name='ExploreNatureExplore' component={ExploreNatureExplore} options={{ headerShown: false }}/>
      <Stack.Screen name='ExploreCitizenScienceScreen' component={ExploreCitizenScienceScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='ExploreParkDetailsScreen' component={ExploreParkDetailsScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='ExploreProjectDetailsScreen' component={ExploreProjectDetailsScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='ExploreEducationResourcesScreen' component={ExploreEducationResourcesScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='ExploreWorldSpeciesMaps' component={ExploreWorldSpeciesMaps} options={{ headerShown: false }}/>
      <Stack.Screen name="ExploreJournalEntryScreen" component={JournalEntryDetailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Explore