import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileHelpandFaqsScreen= ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqSections = [
    {
      title: 'Account',
      items: [
        'How do I change my password?',
        'How do I update my profile information?',
        'How do I delete my account?'
      ]
    },
    {
      title: 'Species Identification',
      items: [
        'How does species identification work?',
        'What if the identification is incorrect?',
        'Can I identify species offline?'
      ]
    },
    {
      title: 'Observations',
      items: [
        'How do I log an observation?',
        'Can I edit or delete an observation?',
        'How do I share my observations?'
      ]
    },
    {
      title: 'App Features',
      items: [
        'How do I use the map feature?',
        'What are citizen science projects?',
        'How do I customize my settings?'
      ]
    }
  ];

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleFAQItemPress = (question) => {
    console.log('FAQ item pressed:', question);
    // You can navigate to individual FAQ detail screens here
    // navigation.navigate('FAQDetailScreen', { question });
  };

  const filteredSections = faqSections.map(section => ({
    ...section,
    items: section.items.filter(item =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-back" size={26} color="#141414" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help & FAQs</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#618561" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for topics"
            placeholderTextColor="#618561"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {(searchQuery ? filteredSections : faqSections).map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            
            {section.items.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={() => handleFAQItemPress(item)}
                activeOpacity={0.7}
              >
                <View style={styles.menuTextContainer}>
                  <Text style={styles.menuTitle}>{item}</Text>
                </View>
                <Icon name="chevron-right" size={28} color="#666" />
              </TouchableOpacity>
            ))}
          </View>
        ))}

        {/* No Results Message */}
        {searchQuery && filteredSections.length === 0 && (
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResultsText}>
              No FAQs found for "{searchQuery}"
            </Text>
          </View>
        )}

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
    fontFamily: 'Newsreader_14pt-Bold',
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
    backgroundColor: '#EBF0EB',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Newsreader_14pt-Regular',
    color: '#618561',
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
    fontFamily: 'Newsreader_14pt-Bold',
    color: '#121712',
    marginBottom: 16,
    lineHeight: 28,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 4,
  },
  menuTextContainer: { 
    flex: 1 
  },
  menuTitle: {
    fontSize: 17,
    fontFamily: 'Newsreader_14pt-Regular',
    color: '#121712',
    marginBottom: 2,
    lineHeight: 24,
  },
  noResultsContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  noResultsText: {
    fontSize: 16,
    fontFamily: 'Newsreader_14pt-Regular',
    color: '#666',
    textAlign: 'center',
  },
  bottomSpacing: { 
    height: 20 
  },
});

export default ProfileHelpandFaqsScreen;