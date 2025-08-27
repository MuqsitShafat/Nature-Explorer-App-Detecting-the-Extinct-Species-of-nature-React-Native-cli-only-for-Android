import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IdentificationResultsScreen = ({ navigation }) => {
  const handleBackPress = () => {
    // Handle back navigation
    navigation.goBack();
    console.log('Back pressed');
  };

  const handleRefineSearch = () => {
    // Handle refine search
      navigation.navigate('Explore', {
      // 👈 "Home" must match the Tab.Screen name for Home_navigator
      screen: 'ExploreMonarchButterfly', // 👈 the target screen inside Home stack
    });
    console.log('Refine search pressed');
  };

  const handleNewIdentification = () => {
    // Handle new identification

    navigation.navigate('identify', {
      // 👈 "Home" must match the Tab.Screen name for Home_navigator
      screen: 'IdentifyWithSearchBarandHistory', // 👈 the target screen inside Home stack
    });
    console.log('New identification pressed');
  };

  const handleSpeciesPress = speciesName => {
    // Handle species detail navigation
    console.log(`${speciesName} pressed`);
  };

  const otherMatches = [
    {
      id: 1,
      name: 'Viceroy Butterfly',
      confidence: '85%',
      image: require('../../assets/images/Viceroy_Butterfly.png'),
    },
    {
      id: 2,
      name: 'Queen Butterfly',
      confidence: '78%',
      image: require('../../assets/images/Queen_Butterfly.png'),
    },
    {
      id: 3,
      name: 'Soldier Butterfly',
      confidence: '65%',
      image: require('../../assets/images/Soldier_Butterfly.png'),
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-back" size={26} color="#121712" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Identification Results</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Main Result */}
        <View style={styles.mainResultContainer}>
          <Image
            source={require('../../assets/images/Butterfly.png')}
            style={styles.mainImage}
            resizeMode="cover"
          />

          <View style={styles.mainResultInfo}>
            <Text style={styles.mainSpeciesName}>Monarch Butterfly</Text>
            <Text style={styles.scientificName}>Danaus plexippus</Text>
            <Text style={styles.mainConfidence}>Confidence: 92%</Text>
          </View>
        </View>

        {/* Other Possible Matches */}
        <View style={styles.otherMatchesSection}>
          <Text style={styles.otherMatchesTitle}>Other Possible Matches</Text>

          {otherMatches.map(species => (
            <TouchableOpacity
              key={species.id}
              style={styles.matchCard}
              onPress={() => handleSpeciesPress(species.name)}
            >
              <Image
                source={species.image}
                style={styles.matchImage}
                resizeMode="cover"
              />
              <View style={styles.matchInfo}>
                <Text style={styles.matchName}>{species.name}</Text>
                <Text style={styles.matchConfidence}>
                  Confidence: {species.confidence}
                </Text>
              </View>
              <Icon name="chevron-right" size={20} color="#8A8A8A" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity
            style={styles.refineButton}
            onPress={handleRefineSearch}
          >
            <Text style={styles.refineButtonText}>Refine Search</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.newIdentificationButton}
            onPress={handleNewIdentification}
          >
            <Text style={styles.newIdentificationButtonText}>
              New Identification
            </Text>
          </TouchableOpacity>
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
    paddingTop: 50,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Lexend-Bold',
    color: '#121712',
  },
  placeholder: {
    width: 34,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  mainResultContainer: {
    marginBottom: 30,
  },
  mainImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 15,
  },
  mainResultInfo: {
    paddingHorizontal: 5,
  },
  mainSpeciesName: {
    fontSize: 24,
    fontFamily: 'Lexend-Bold',
    color: '#121712',
    marginBottom: 5,
  },
  scientificName: {
    fontSize: 16,
    fontFamily: 'Lexend-Regular',
    color: '#618561',
    marginBottom: 8,
  },
  mainConfidence: {
    fontSize: 16,
    fontFamily: 'Lexend-Regular',
    color: '#618561',
  },
  otherMatchesSection: {
    marginBottom: 30,
  },
  otherMatchesTitle: {
    fontSize: 18,
    fontFamily: 'Lexend-Bold',
    color: '#121712',
    marginBottom: 20,
  },
  matchCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  matchImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 15,
  },
  matchInfo: {
    flex: 1,
  },
  matchName: {
    fontSize: 16,
    fontFamily: 'Lexend-Medium',
    color: '#121712',
    marginBottom: 4,
  },
  matchConfidence: {
    fontSize: 14,
    fontFamily: 'Lexend-Regular',
    color: '#618561',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    gap: 15,
  },
  refineButton: {
    flex: 1,
    backgroundColor: '#EBF0EB',
    borderRadius: 50,
    paddingVertical: 10,
    alignItems: 'center',
  },
  refineButtonText: {
    fontSize: 16,
    fontFamily: 'Lexend-Bold',
    color: '#121712',
  },
  newIdentificationButton: {
    flex: 1,
    backgroundColor: '#A6D9A6',
    borderRadius: 50,
    paddingVertical: 10,
    alignItems: 'center',
  },
  newIdentificationButtonText: {
    fontSize: 16,
    fontFamily: 'Lexend-Bold',
    color: '#121712',
  },
});

export default IdentificationResultsScreen;
