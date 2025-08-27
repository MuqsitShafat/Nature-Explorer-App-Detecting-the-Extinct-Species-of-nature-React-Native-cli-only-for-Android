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
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const ExploreNatureExplore = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredSpecies = [
    {
      id: 1,
      name: 'Daily Animal Profile: Red Fox',
      description: "Learn about the red fox's habitat and behavior.",
      image: require('../../assets/images/Red_fox.png'),
    },
    {
      id: 2,
      name: 'Conservation News: Amazon Rainforest',
      description: 'Latest updates on conservation efforts in the Amazon.',
      image: require('../../assets/images/Rain_forest.png'),
    },
    {
      id: 3,
      name: 'Upcoming Event: Nature Walk',
      description: 'Join us for a guided nature walk in the local park.',
      image: require('../../assets/images/Nature_walk.png'),
    },
  ];

  const recentObservations = [
    {
      id: 1,
      title: 'Eastern Gray Squirrel',
      description: 'Spotted in Central Park',
      image: require('../../assets/images/Eastren_gray.png'),
      time: '2h',
    },
    {
      id: 2,
      title: 'Mallard Duck',
      description: 'Observed near the river',
      image: require('../../assets/images/Mallard_duck.png'),
      time: '4h',
    },
    {
      id: 3,
      title: 'American Robin',
      description: 'Seen in the backyard',
      image: require('../../assets/images/American_robino.png'),
      time: '6h',
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
    <View key={item.id} style={styles.observationCardHorizontal}>
      <TouchableOpacity activeOpacity={0.7} style={styles.observationCardTouch}>
        <Image source={item.image} style={styles.observationImageHorizontal} />

        <View style={styles.observationContentHorizontal}>
          <Text style={styles.observationTitle}>{item.title}</Text>
          <Text style={styles.observationDescription}>{item.description}</Text>
        </View>

        <Text style={styles.observationTime}>{item.time}</Text>
      </TouchableOpacity>
    </View>
  );
  const handleLogObservations = () => {
    navigation.navigate('Log',{
      screen:'NotesObservationDetailsScreen'
    })
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.placeholder} />
        <Text style={styles.headerTitle}>Nature App</Text>
        <TouchableOpacity style={styles.searchglass}>
          <Icon name="search" size={30} color="#171412" />
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
            placeholder="Search  species, locations, or posts"
            placeholderTextColor="#7D7366"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Featured Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured </Text>
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
          <ScrollView
            showsHorizontalScrollIndicator={false}
            style={{ paddingHorizontal: 16 }}
          >
            {recentObservations.map(item => renderObservationCard(item))}
          </ScrollView>
        </View>

        {/* New Observation Button */}
        <TouchableOpacity style={styles.newObservationButton} onPress={handleLogObservations}>
          <Image
            source={require('../../assets/images/Plus.png')}
            style={styles.plusIcon}
            resizeMode="contain"
          />
          <Text style={styles.newObservationButtonText}>Log Observation</Text>
        </TouchableOpacity>

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
  placeholder: {
    width: 34,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#0D1C12',
    lineHeight: 23,
  },
  searchglass: {
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
    fontSize: 16,
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
    height: 215,
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
  featuredImage: {
    width: 240,
    height: 135,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
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
  observationCardHorizontal: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginRight: 12,
    overflow: 'hidden',
  },
  observationCardTouch: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    justifyContent: 'space-between',
    flex: 1,
  },
  observationImageHorizontal: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  observationContentHorizontal: {
    padding: 12,
    flex: 1, // allows description to take remaining space
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
    fontFamily: 'PlusJakartaSans-Regular',
    lineHeight: 24,
  },
  observationTime: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Regular',
    color: '#7D7366',
    marginRight: 12, // keeps it off the very edge
  },
  newObservationButton: {
    backgroundColor: '#CFBFB0',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row', // icon + text side by side
    alignItems: 'center',
    alignSelf: 'flex-end', // push to right
    marginTop: -10,
    marginRight: 10,
  },
  plusIcon: {
    width: 24,
    height: 24,
    marginRight: 8, // space between icon and text
  },
  newObservationButtonText: {
    color: '#0D1C12',
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-Bold',
        paddingVertical: 2,
  },
  bottomSpacing: {
    height: 20,
  },
});

export default ExploreNatureExplore;
