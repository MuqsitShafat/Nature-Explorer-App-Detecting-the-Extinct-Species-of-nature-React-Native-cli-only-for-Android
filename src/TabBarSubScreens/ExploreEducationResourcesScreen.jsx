import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Linking,
  Alert,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ExploreEducationResourcesScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

 const lessonPlans = [
  {
    id: 1,
    title: 'Introduction to Ecology',
    description: 'Learn about ecosystems and their components.',
    icon: require('../../assets/images/book-icon.png') // Updated path
  },
  {
    id: 2,
    title: 'Birdwatching Basics',
    description: "A beginner's guide to identifying common birds.",
    icon: require('../../assets/images/book-icon.png') // Updated path
  },
  {
    id: 3,
    title: 'Plant Identification',
    description: 'Discover the basics of plant taxonomy.',
    icon: require('../../assets/images/book-icon.png') // Updated path
  }
];

const conservationInfo = [
  {
    id: 1,
    title: 'Forest Conservation',
    description: 'Protecting forests and their biodiversity.',
    icon: require('../../assets/images/nature-icon.png') // Updated path
  },
  {
    id: 2,
    title: 'Global Biodiversity',
    description: 'Understanding the diversity of life on earth.',
    icon: require('../../assets/images/globe-icon.png') // Updated path
  },
  {
    id: 3,
    title: 'Sustainable Practices',
    description: 'Tips for living responsibly and reducing your impact.',
    icon: require('../../assets/images/eco-icon.png') // Updated path
  }
];

const externalLinks = [
  {
    id: 1,
    title: 'Nature Conservancy',
    description: 'Visit our conservancy website.',
    url: 'https://www.nature.org',
    icon: require('../../assets/images/link-icon.png') // Updated path
  },
  {
    id: 2,
    title: 'National Geographic',
    description: "Explore Geographic's nature content.",
    url: 'https://www.nationalgeographic.com',
    icon: require('../../assets/images/link-icon.png') // Updated path
  },
  {
    id: 3,
    title: 'World Wildlife Fund',
    description: "Learn about WWF's conservation efforts.",
    url: 'https://www.worldwildlife.org',
    icon: require('../../assets/images/link-icon.png') // Updated path
  }
];

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleLessonPress = (lesson) => {
    console.log('Lesson pressed:', lesson.title);
    // navigation.navigate('LessonDetailScreen', { lesson });
  };

  const handleConservationPress = (info) => {
    console.log('Conservation info pressed:', info.title);
    // navigation.navigate('ConservationDetailScreen', { info });
  };

  const handleExternalLinkPress = async (link) => {
    try {
      const supported = await Linking.canOpenURL(link.url);
      if (supported) {
        await Linking.openURL(link.url);
      } else {
        Alert.alert('Error', 'Cannot open this link.');
      }
    } catch (error) {
      console.error('Error opening link:', error);
      Alert.alert('Error', 'Failed to open link.');
    }
  };

  const renderGridSection = (items, onPress) => (
    <View style={styles.gridContainer}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={item.id}
          style={[
            styles.gridItem,
            index % 2 === 0 ? styles.leftItem : styles.rightItem
          ]}
          onPress={() => onPress(item)}
          activeOpacity={0.7}
        >
          <View style={styles.gridItemContent}>
            <View style={styles.resourceIcon}>
              <Image source={item.icon} style={styles.iconImage} resizeMode="contain" />
            </View>
            <Text style={styles.resourceTitle}>{item.title}</Text>
            <Text style={styles.resourceDescription}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-back" size={26} color="#141414" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Educational Resources</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Icon name="search" size={32} color="#4F944F" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search resources"
            placeholderTextColor="#4F944F"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Lesson Plans Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lesson Plans</Text>
          {renderGridSection(lessonPlans, handleLessonPress)}
        </View>

        {/* Conservation Information Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Conservation Information</Text>
          {renderGridSection(conservationInfo, handleConservationPress)}
        </View>

        {/* External Links Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>External Links</Text>
          {renderGridSection(externalLinks, handleExternalLinkPress)}
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
    fontFamily: 'Lexend-Bold',
    color: '#121712',
    lineHeight: 23,
  },
  placeholder: { 
    width: 34 
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F2E8',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lexend-Regular',
    color: '#0D1C0D',
    lineHeight: 24,
  },
  content: { 
    flex: 1, 
    padding: 20 
  },
  section: { 
    marginBottom: 32 
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: 'Lexend-Bold',
    color: '#0D1C0D',
    marginBottom: 16,
    lineHeight: 28,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#D1E5D1',
  },
  leftItem: {
    marginRight: '2%',
  },
  rightItem: {
    marginLeft: '2%',
  },
  gridItemContent: {
    alignItems: 'flex-start',
  },
  resourceIcon: {
    width: 40,
    height: 40,
    // borderRadius: 20,
    // backgroundColor: '#E8F5E8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconImage: {
    width: 28,
    height: 28,
    tintColor: '#0D1C0D',
  },
  resourceTitle: {
    fontSize: 16,
    fontFamily: 'Lexend-Bold',
    color: '#0D1C0D',
    lineHeight: 20,
    marginBottom: 4,
  },
  resourceDescription: {
    fontSize: 15,
    fontFamily: 'Lexend-Regular',
    color: '#4F944F',
    lineHeight: 21,
  },
  bottomSpacing: { 
    height: 20 
  },
});

export default ExploreEducationResourcesScreen;