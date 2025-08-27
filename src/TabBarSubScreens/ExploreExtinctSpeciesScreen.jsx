import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const ExtinctSpeciesScreen = ({navigation}) => {
  const handleBackPress = () => {
    // Handle back navigation
    navigation.goBack();
    console.log('Back pressed');
  };

  const speciesData = [
    {
      id: 1,
      commonName: 'Dodo',
      scientificName: 'Raphus cucullatus',
      description: 'Flightless bird endemic to Mauritius',
      image: require('../../assets/images/DodoSmall.png'),
    },
    {
      id: 2,
      commonName: 'Tasmanian Tiger',
      scientificName: 'Thylacinus cynocephalus',
      description: 'Largest known carnivorous marsupial',
      image: require('../../assets/images/TigerSmall.png'),
    },
    {
      id: 3,
      commonName: 'Passenger Pigeon',
      scientificName: 'Ectopistes migratorius',
      description: 'Once most abundant bird in North America',
      image: require('../../assets/images/Pigeon.png'),
    },
    {
      id: 4,
      commonName: 'Pyrenean Ibex',
      scientificName: 'Capra pyrenaica pyrenaica',
      description: 'Subspecies of the Iberian Ibex',
      image: require('../../assets/images/Markhor.png'),
    },
    {
      id: 5,
      commonName: 'Baiji',
      scientificName: 'Lipotes vexillifer',
      description: 'Freshwater dolphin from Yangtze River',
      image: require('../../assets/images/Dolphin.png'),
    },
  ];

  const renderSpeciesItem = species => (
    <TouchableOpacity key={species.id} style={styles.speciesItem}
    onPress={() => {
      if (species.commonName === 'Dodo') {
        navigation.navigate('ExploreExtinctDodo');
      } else {
        console.log(`${species.commonName} pressed`);
      }
    }}
    >
      <Image source={species.image} style={styles.speciesImage} />
      <View style={styles.speciesInfo}>
        <Text style={styles.description}>{species.description}</Text>
        <Text style={styles.commonName}>Common Name: {species.commonName}</Text>
        <Text style={styles.scientificName}>
          Scientific Name: {species.scientificName}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-back" size={26} color="#141414" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Extinct Species</Text>
        <View style={styles.placeholder} />
      </View>
      {/* Species List */}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {speciesData.map(renderSpeciesItem)}
      </ScrollView>
    </View>
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
    paddingTop: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  backButton: {
    marginRight: 16,
    padding: 8,
  },
  backArrow: {
    color: '#141414',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#141414',
    lineHeight: 22,
  },
  placeholder: {
    width: 34,
  },
  scrollView: {
    flex: 1,
  },
  speciesItem: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 10,
    // elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  speciesImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 16,
    backgroundColor: '#f0f0f0',
  },
  speciesInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  description: {
    fontSize: 16,
    color: '#141414',
    fontFamily: 'PlusJakartaSans-Medium',
    marginBottom: 2,
    lineHeight: 24,
  },
  commonName: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 2,
    lineHeight: 21,
  },
  scientificName: {
    fontSize: 14,
    color: '#757575',
    fontFamily: 'PlusJakartaSans-Regular',
    lineHeight: 21,
  },
});

export default ExtinctSpeciesScreen;
