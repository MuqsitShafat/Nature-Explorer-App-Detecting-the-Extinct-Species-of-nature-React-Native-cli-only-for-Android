import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const ExploreNatureExplore = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredSpecies = [
  {
    id: 1,
    name: 'Scarlet Tanager',
    description: 'A vibrant songbird found in eastern North America',
    image: require('../../assets/images/scarlet_tanager.png'),
  },
  {
    id: 2,
    name: 'Green Tree Frog',
    description: 'A common amphibian with bright green coloration',
    image: require('../../assets/images/green_tree_frog.png'),
  },
  {
    id: 3,
    name: 'Monarch Butterfly',
    description: 'A migratory butterfly with distinctive orange and black wings.',
    image: require('../../assets/images/Monarch_Butterfly_Yellow.png'),
  },
];

const recentObservations = [
  {
    id: 1,
    title: 'Birdwatching at Dawn',
    description: 'Observed 15 species of birds during an early morning hike',
    image: require('../../assets/images/birdwatching_dawn.png'),
  },
  {
    id: 2,
    title: 'Wildflower Meadow',
    description: 'Found a meadow filled with colorful wildflowers and butterflies',
    image: require('../../assets/images/wildflower_meadow.png'),
  },
  {
    id: 3,
    title: 'Forest Hike',
    description: 'Explored a new trail and documented various plant species',
    image: require('../../assets/images/forest_hike.png'),
  },

];


  const renderFeaturedSpecies = (item, index) => (
    <View key={item.id} style={styles.featuredCard}>
        <Image source={item.image} style={styles.featuredImage} />
      <TouchableOpacity activeOpacity={0.7} style={styles.featuredCardTouch}>
        <View style={styles.featuredTextContainer}>
          <Text style={styles.featuredName}>{item.name}</Text>
          <Text style={styles.featuredDescription}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderObservationCard = item => (
    <View key={item.id} style={styles.observationCard}>
      <TouchableOpacity activeOpacity={0.7} style={styles.observationCardTouch}>
        <Image source={item.image} style={styles.observationImage} />
        <View style={styles.observationContent}>
          <Text style={styles.observationTitle}>{item.title}</Text>
          <Text style={styles.observationDescription}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <View style={styles.menuIcon}>
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
          </View>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Nature Explorer</Text>

        <TouchableOpacity style={styles.settingsButton}>
          <Image source={require('../../assets/images/Settings.png')} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Icon
            name="search"
            size={28}
            color="#639154"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for species, locations, or users"
            placeholderTextColor="#7D7366"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Featured Species Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Species</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.featuredContainer}
            contentContainerStyle={styles.featuredContentContainer}
          >
            {featuredSpecies.map((item, index) =>
              renderFeaturedSpecies(item, index),
            )}
          </ScrollView>
        </View>

        {/* Recent Observations Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Observations</Text>
          <View style={styles.observationsContainer}>
            <View style={styles.observationsGrid}>
              <View style={styles.observationsColumn}>
                {recentObservations.slice(0, 2).map(item => renderObservationCard(item))}
              </View>
              <View style={styles.observationsColumn}>
                {recentObservations.slice(2).map(item => renderObservationCard(item))}
              </View>
            </View>
          </View>
        </View>

        {/* Bottom spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 40,
    backgroundColor: '#FFFFFF',
  },
  menuButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    width: 18,
    height: 12,
  },
  menuLine: {
    height: 2,
    backgroundColor: '#171412',
    marginBottom: 3,
    borderRadius: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#0D1C12',
    lineHeight: 23,
  },
  settingsButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0EDEB',
    borderRadius: 8,
    paddingHorizontal: 16,
    margin: 16,
    height: 48,
  },
  searchIcon: {
    marginRight: 12,
    color: '#7D7366',
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#7D7366',
    paddingVertical: 0,
    fontFamily: 'PlusJakartaSans-Regular',
    lineHeight: 24,
  },
  section: {
    marginBottom: 24,
    marginTop: 14,
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#171412',
    marginHorizontal: 16,
    marginBottom: 12,
    lineHeight: 28,
  },
  featuredContainer: {
    paddingLeft: 16,
  },
  featuredContentContainer: {
    paddingRight: 16,
  },
  featuredCard: {
    width: 240,
    height: 215, // FIXED: was 180
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    marginRight: 12,
    marginTop: 12,
  },
  featuredCardTouch: {
    flex: 1,
  },
  featuredTextContainer: {
    padding: 12,
    flex: 1,
  },
  featuredCardFirst: {
    backgroundColor: '#4CAF50',
  },
  featuredCardSecond: {
    backgroundColor: '#2E7D32',
  },
  featuredImage: {
       // CHANGED: fixed exact dimensions based on your request
    width: 240, // added: fixed width
    height: 135, // added: fixed height
    borderTopLeftRadius: 12, // added: rounded top corners
    borderTopRightRadius: 12, // added: rounded top corners
    resizeMode: 'cover',
  },
  featuredName: {
    color: '#171412',
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Medium',
    lineHeight: 24,
    marginBottom: 2,
  },
  featuredDescription: {
    color: '#7D7366',
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Regular',
    lineHeight: 21,
  },
  observationsContainer: {
    paddingHorizontal: 16,
  },
  observationsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
  },
  observationsColumn: {
    flex: 1,
  },
  observationCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 6,
    overflow: 'hidden',
  },
  observationCardTouch: {
    flex: 1,
  },
  observationImage: {
    width: 173,
    height: 97,
    resizeMode: 'cover',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  observationContent: {
    padding: 12,
  },
  observationTitle: {
    fontSize: 16,
   fontFamily: 'PlusJakartaSans-Medium',
    color: '#171412',
    marginBottom: 4,
    lineHeight: 24,
  },
  observationDescription: {
    fontSize: 14,
    color: '#7D7366',
    lineHeight: 16,
    fontFamily: 'PlusJakartaSans-Regular',
    lineHeight: 24,
  },
  bottomSpacing: {
    height: 20,
  },
});

export default ExploreNatureExplore;
