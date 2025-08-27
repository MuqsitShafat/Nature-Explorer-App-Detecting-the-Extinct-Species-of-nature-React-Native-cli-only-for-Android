import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ExploreMonarchButterfly = ({navigation}) => {
  const handleBackPress = () => {
    // Handle back navigation
    navigation.goBack();
    console.log('Back pressed');
  };

  const handleShare = () => {
    // Handle share functionality
    console.log('Share pressed');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#0D1C0D" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShare} style={styles.shareButton}>
         <Image source={require('../../assets/icons/MonarchShareIcon.png')}   />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
        {/* Main Image */}
        <Image 
          source={require('../../assets/images/Monarch_Butterfly.png')} 
          style={styles.mainImage}
          resizeMode="cover"
        />

        {/* Species Info */}
        <View style={styles.speciesInfoContainer}>
          <Text style={styles.speciesName}>Monarch Butterfly</Text>
          <Text style={styles.scientificName}>Danaus plexippus</Text>
          
          <Text style={styles.description}>
            The Monarch butterfly is a vibrant orange and black butterfly known for its long-distance migration. It feeds on milkweed and is an important pollinator.
          </Text>
        </View>

        {/* Habitat Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Habitat</Text>
          <Text style={styles.sectionContent}>
            Monarchs are found in fields, meadows, and gardens with milkweed plants, their primary food source. They prefer sunny areas with nectar-rich flowers.
          </Text>
        </View>

        {/* Behavior Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Behavior</Text>
          <Text style={styles.sectionContent}>
            Monarchs are known for their migratory behavior, traveling thousands of miles each year. They are active during the day and can often be seen feeding on flowers.
          </Text>
        </View>

        {/* Conservation Status Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Conservation Status</Text>
          <Text style={styles.sectionContent}>
            The Monarch butterfly is currently listed as Endangered due to habitat loss and climate change. Conservation efforts are underway to protect their populations.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  shareButton: {
    padding: 5,
  },
  placeholder: {
    width: 34,
  },
  contentContainer: {
    flex: 1,
  },
  mainImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  speciesInfoContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  speciesName: {
    fontSize: 22,
    fontFamily: 'Lexend-Bold',
    color: '#0D1C0D',
    marginBottom: 8,
    lineHeight: 28,
  },
  scientificName: {
    fontSize: 14,
    fontFamily: 'Lexend-Regular',
    color: '#4F944F',
    lineHeight:21,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Lexend-Regular',
    color: '#0D1C0D',
    lineHeight: 24,
  },
  section: {
    paddingHorizontal: 20,
    paddingBottom: 25,
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: 'Lexend-Bold',
    color: '#0D1C0D',
    lineHeight: 28,
    marginBottom: 12,
  },
  sectionContent: {
    fontSize: 16,
    fontFamily: 'Lexend-Regular',
    color: '#0D1C0D',
    lineHeight: 24,
  },
});

export default ExploreMonarchButterfly;