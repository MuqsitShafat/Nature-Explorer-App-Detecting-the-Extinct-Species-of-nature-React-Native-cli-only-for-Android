import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const IdentifyWithSearchBarandHistory = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const recentIdentifications = [
    {
      id: 1,
      name: 'Monarch Butterfly',
      image: require('../../assets/images/monarch_butterflyyy.png'),
    },
    {
      id: 2,
      name: 'Red-tailed Hawk',
      image: require('../../assets/images/red_tailed_hawk.png'),
    },
    {
      id: 3,
      name: 'White Oak',
      image: require('../../assets/images/white_oak.png'),
    },
    {
      id: 4,
      name: 'American Bullfrog',
      image: require('../../assets/images/american_bullfrog.png'),
    },
    {
      id: 5,
      name: 'Eastern Cottontail',
      image: require('../../assets/images/eastern_cottontail.png'),
    },
  ];

  const renderRecentItem = ({ item }) => (
    <TouchableOpacity style={styles.recentItem} activeOpacity={0.7}>
      <Image source={item.image} style={styles.recentImage} />
      <Text style={styles.recentText}>{item.name}</Text>
    </TouchableOpacity>
  );
  const handleBackPress = () => {
    // Handle back navigation
    navigation.goBack();
    console.log('Back pressed');
  };
const handleseeall= () => {
  // Handle back navigation
  navigation.navigate('Explore',{
    screen:'ExploreNatureExplore'
  });
};
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-back" size={26} color="#141414" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Identify</Text>
        <View style={styles.placeholder} />
      </View>
      {/* Content */}
      <View style={styles.content}>
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
            placeholder="Search for species"
            placeholderTextColor="#618561"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Identify Options */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionItem} activeOpacity={0.7} onPress={() => navigation.navigate('IdentifyByImage')}>
            <View style={styles.optionIcon}>
              <Image source={require('../../assets/images/Camerai.png')} />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Identify by Image</Text>
              <Text style={styles.optionSubtitle}>
                Identify a species by taking a photo
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionItem} activeOpacity={0.7} onPress={() => navigation.navigate('IdentifyBySound')}>
            <View style={styles.optionIcon}>
              <Image source={require('../../assets/images/microphone.png')} />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Identify by Sound</Text>
              <Text style={styles.optionSubtitle}>
                Identify a species by recording its sound
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Recent Identification History */}
        <View style={styles.historySection}>
          <View style={styles.historyHeader}>
            <Text style={styles.historyTitle}>
              Recent Identification History
            </Text>
          </View>

          <FlatList
            data={recentIdentifications}
            renderItem={renderRecentItem}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
          />
          {/* Moved See All button below the list */}
          <TouchableOpacity style={styles.seeAllButton} activeOpacity={0.7} onPress={handleseeall}>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    paddingVertical: 15,
    paddingTop: 40,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Lexend-Bold',
    color: '#121712',
    lineHeight: 23,
  },
  placeholder: {
    width: 34, // Same width as back button to center title
  },
  content: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EBF2E8',
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
    height: 48,
  },
  searchIcon: {
    marginRight: 12,
    color: '#639154',
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Lexend-Regular',
    fontSize: 16,
    color: '#618561',
    paddingVertical: 0,
  },
  optionsContainer: {
    marginBottom: 32,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 4,
  },
  optionIcon: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  optionTextContainer: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontFamily: 'Lexend-Medium',
    color: '#121712',
    marginBottom: 4,
    lineHeight: 24,
  },
  optionSubtitle: {
    fontSize: 14,
    color: '#618561',
    lineHeight: 21,
    fontFamily: 'Lexend-Regular',
  },
  historySection: {
    flex: 1,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  historyTitle: {
    fontSize: 22,
    fontFamily: 'Lexend-Bold',
    color: '#121712',
  },
  seeAllButton: {
    alignSelf: 'flex-end', // centers button horizontally
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#EBF0EB',
    borderRadius: 16,
    marginTop: 10, // space from FlatList
  },
  seeAllText: {
    fontSize: 14,
    color: '#121712',
    fontFamily: 'Lexend-Bold',
    lineHeight: 21,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  recentImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
    resizeMode: 'cover',
  },
  recentText: {
    fontSize: 16,
    color: '#121712',
    fontFamily: 'Lexend-Regular',
    lineHeight: 24,
  },
});

export default IdentifyWithSearchBarandHistory;
