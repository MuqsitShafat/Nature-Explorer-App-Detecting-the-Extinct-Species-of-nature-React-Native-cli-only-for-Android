import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import Identify_nature from './src/components/Identify_nature';
import Log_discoveries from './src/components/Log_discoveries';
import Connect_and_share from './src/components/Connect_and_share';
import BootSplash from 'react-native-bootsplash';
import Nature_Explorer from './src/navigation/Nature_Explorer';
import { NavigationContainer } from '@react-navigation/native';
import Components_navigation from './src/navigation/Components_navigation';
import IdentificationResultsScreen from './src/TabBarSubScreens/HomeIdentificationResultsScreen';
import ExploreMonarchButterfly from './src/TabBarSubScreens/ExploreMonarchButterfly';
import ProfileFeedbackScreen from './src/TabBarSubScreens/ProfileFeedbackScreen';
import ExploreCitizenScienceScreen from './src/TabBarSubScreens/ExploreCitizenScienceScreen';
import ExploreProjectDetailsScreen from './src/TabBarSubScreens/ExploreProjectDetailsScreen';
import NewJournalEntry from './src/TabBarSubScreens/NewJournalEntry';
import JournalEntryDetailScreen from './src/TabBarSubScreens/JournalEntryScreen';
import ExploreWorldSpeciesMaps from './src/TabBarSubScreens/ExploreWorldSpeciesMaps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log('BootSplash has been hidden successfully');
    });
  }, []);
  return (
    // <View style={{flex:1}}>
    //   <IdentificationResultsScreen/>
    //   {/* <ExploreMonarchButterfly/> */}
    //  {/* <NavigationContainer>
    //   <Components_navigation/>
    // </NavigationContainer> */}
    //  {/* <NavigationContainer>
    //  <Nature_Explorer/>
    // </NavigationContainer> */}
    // {/* <ProfileFeedbackScreen/> */}
    // {/* <ExploreCitizenScienceScreen/> */}
    // {/* <ExploreProjectDetailsScreen/> */}
    // {/* <NewJournalEntry/> */}
    // {/* <JournalEntryDetailScreen/> */}
    // {/* <ExploreWorldSpeciesMaps/> */}
    // </View>
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Components_navigation />
      </NavigationContainer>
    </View>
  );
};

export default App;
