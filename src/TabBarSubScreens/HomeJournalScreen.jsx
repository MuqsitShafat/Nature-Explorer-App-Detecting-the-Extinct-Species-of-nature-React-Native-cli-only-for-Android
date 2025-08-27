import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeJournalScreen = ({ navigation }) => {
  const journalEntries = [
    {
      id: 1,
      title: 'Morning Hike at Redwood Park',
      date: 'June 12, 2024',
      image: require('../../assets/images/redwood_park.png'), // Replace with your image path
      type: 'hike'
    },
    {
      id: 2,
      title: 'Birdwatching at Dawn',
      date: 'June 10, 2024',
      image: require('../../assets/images/birdwatching.png'), // Replace with your image path
      type: 'birds'
    },
    {
      id: 3,
      title: 'Wildflower Meadow Exploration',
      date: 'June 8, 2024',
      image: require('../../assets/images/wildflower_meadow_journal.png'), // Replace with your image path
      type: 'flowers'
    },
    {
      id: 4,
      title: 'Sunset Reflections on the Lake',
      date: 'June 5, 2024',
      image: require('../../assets/images/lake_sunset.png'), // Replace with your image path
      type: 'sunset'
    }
  ];

  const handleBackPress = () => {
    navigation.navigate('HomeScreenHandler');
  };

  const handleEntryPress = (entry) => {
    console.log('Journal entry pressed:', entry.title);
    // navigation.navigate('JournalDetailScreen', { entry });
  };

  const handleAddPress = () => {
    console.log('Add journal entry pressed');
    navigation.navigate('NewJournalEntry');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-back" size={26} color="#141414" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Journal</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Journal Entries */}
        <View style={styles.entriesContainer}>
          {journalEntries.map((entry) => (
            <TouchableOpacity
              key={entry.id}
              style={styles.entryItem}
              onPress={() => handleEntryPress(entry)}
              activeOpacity={0.7}
            >
              <View style={styles.entryImageContainer}>
                <Image source={entry.image} style={styles.entryImage} />
              </View>
              <View style={styles.entryTextContainer}>
                <Text style={styles.entryTitle}>{entry.title}</Text>
                <Text style={styles.entryDate}>{entry.date}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Empty State (when no entries) */}
        {journalEntries.length === 0 && (
          <View style={styles.emptyStateContainer}>
            <Icon name="book" size={60} color="#4D994D" />
            <Text style={styles.emptyStateTitle}>No Journal Entries Yet</Text>
            <Text style={styles.emptyStateDescription}>
              Start documenting your nature experiences and observations
            </Text>
          </View>
        )}

        {/* Bottom spacing for FAB */}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={handleAddPress}
        activeOpacity={0.8}
      >
        <Icon name="add" size={24} color="#ffffff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#ffffff' 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 40,
    backgroundColor: '#FFFFFF',
  },
  backButton: { 
    padding: 5 
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Newsreader_14pt-Bold',
    color: '#0D1C0D',
    lineHeight: 23,
  },
  placeholder: { 
    width: 34 
  },
  content: { 
    flex: 1, 
    padding: 20 
  },
  entriesContainer: {
    flex: 1,
  },
  entryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
    marginBottom: 8,
  },
  entryImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 16,
  },
  entryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  entryTextContainer: { 
    flex: 1 
  },
  entryTitle: {
    fontSize: 16,
    fontFamily: 'Newsreader_14pt-Medium',
    color: '#0D1C0D',
    lineHeight: 24,
    marginBottom: 2,
  },
  entryDate: {
    fontSize: 14,
    fontFamily: 'Newsreader_14pt-Regular',
    color: '#4D994D',
    lineHeight: 21,
  },
  emptyStateContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontFamily: 'Newsreader_14pt-Bold',
    color: '#0D1C0D',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyStateDescription: {
    fontSize: 14,
    fontFamily: 'Newsreader_14pt-Regular',
    color: '#4A9C4A',
    textAlign: 'center',
    paddingHorizontal: 40,
    lineHeight: 20,
  },
  fab: {
    // position: 'absolute',
    // bottom: 24,
    // right: 24,
    width: 56,
    alignSelf: 'flex-end',
    marginRight: 24,
    marginBottom: 24,
    height: 56,
    borderRadius: 10,
    backgroundColor: '#0A8C0A',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  bottomSpacing: { 
    height: 80 
  },
});

export default HomeJournalScreen;