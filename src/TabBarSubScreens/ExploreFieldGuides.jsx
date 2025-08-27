import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const ExploreFieldGuides = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    region: null,
    category: null,
    habitat: null,
    conservationStatus: null,
    sort: null,
  });
const speciesData = [
  {
    id: 1,
    name: 'Scarlet Macaw',
    scientificName: 'Ara macao',
    image: require('../../assets/images/scarlet_macaw.png'),
    category: 'Bird',
    habitat: 'Rainforest',
  },
  {
    id: 2,
    name: 'Bengal Tiger',
    scientificName: 'Panthera tigris tigris',
    image: require('../../assets/images/bengal_tiger.png'),
    category: 'Mammal',
    habitat: 'Grassland',
  },
  {
    id: 3,
    name: 'Giant Sequoia',
    scientificName: 'Sequoiadendron giganteum',
    image: require('../../assets/images/giant_sequoia.png'),
    category: 'Plant',
    habitat: 'Forest',
  },
  {
    id: 4,
    name: 'Amazon River Dolphin',
    scientificName: 'Inia geoffrensis',
    image: require('../../assets/images/amazon_dolphin.png'),
    category: 'Mammal',
    habitat: 'Freshwater',
  },
  {
    id: 5,
    name: 'Snow Leopard',
    scientificName: 'Panthera uncia',
    image: require('../../assets/images/snow_leopard.png'),
    category: 'Mammal',
    habitat: 'Mountain',
  },
  {
    id: 6,
    name: 'Monarch Butterfly',
    scientificName: 'Danaus plexippus',
    image: require('../../assets/images/monarch_butterflyy.png'),
    category: 'Insect',
    habitat: 'Various',
  },
];

  const filterCategories = [
    { key: 'region', label: 'Region' },
    { key: 'category', label: 'Category' },
    { key: 'habitat', label: 'Habitat' },
    { key: 'conservationStatus', label: 'Conservation Status' },
    { key: 'sort', label: 'Sort' },
  ];

  const renderSpeciesCard = ({ item, index }) => (
    <TouchableOpacity 
      style={[
        styles.speciesCard,
        index % 2 === 0 ? styles.leftCard : styles.rightCard
      ]}
      activeOpacity={0.7}
    >
     <Image source={item.image} style={styles.speciesImage} />
      <View style={styles.speciesInfo}>
        <Text style={styles.speciesName}>{item.name}</Text>
        <Text style={styles.speciesScientific}>{item.scientificName}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderFilterButton = ({ item }) => (
    <TouchableOpacity style={styles.filterButton} activeOpacity={0.7}>
      <Text style={styles.filterText}>{item.label}</Text>
      <Text style={styles.dropdownIcon}>▼</Text>
    </TouchableOpacity>
  );
  const handleBackPress = () => {
    // Handle back navigation
    navigation.goBack()
    console.log('Back pressed');
  };
  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
      <Icon name="arrow-back" size={26} color="#141414" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Field Guides</Text>
        <View style={styles.placeholder} />
      </View>
      {/* Search Section */}
      <View style={styles.searchSection}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={28} color="#639154" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for species"
            placeholderTextColor="#639154"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Filter Buttons */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.filtersContainer}
          contentContainerStyle={styles.filtersContent}
        >
          {filterCategories.map((filter) => (
            <TouchableOpacity 
              key={filter.key}
              style={styles.filterButton}
              activeOpacity={0.7}
            >
              <Text style={styles.filterText}>{filter.label}</Text>
              <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Species Grid */}
      <FlatList
        data={speciesData}
        renderItem={renderSpeciesCard}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.gridContainer}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
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
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Manrope-Bold',
    color: '#141414',
    lineHeight: 23,
  },
  placeholder: {
    width: 34, // Same width as back button to center title
  },
  searchSection: {
    // backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 16,
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
    fontFamily: 'Manrope-Regular',
    fontSize: 16,
    color: '#639154',
    paddingVertical: 0,
  },
  filtersContainer: {
    flexDirection: 'row',
  },
  filtersContent: {
    paddingRight: 20,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
      borderRadius: 10,
    backgroundColor: '#EBF2E8',
    marginRight: 12,
    minHeight: 36,
  },
  filterText: {
    fontSize: 14,
    fontFamily: 'Manrope-Medium',
    color: '#121A0F',
    marginRight: 6,
    lineHeight: 21,
  },
  dropdownIcon: {
    fontSize: 14,
    color: '#121A0F',
  },
  gridContainer: {
    padding: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
  speciesCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    width: '47%',
  },
  leftCard: {
    marginRight: 8,
  },
  rightCard: {
    marginLeft: 8,
  },
  speciesImage: {
    width: '100%',
    height: 173,
    resizeMode: 'cover',
  },
  speciesInfo: {
    padding: 12,
  },
  speciesName: {
    fontSize: 16,
  fontFamily: 'Manrope-Medium',
    color: '#121A0F',
    lineHeight: 24,
    marginBottom: 1,
  },
  speciesScientific: {
    fontSize: 14,
    color: '#639154',
    fontFamily:"Manrope-Regular",
    lineHeight: 21,
  },
});

export default ExploreFieldGuides;