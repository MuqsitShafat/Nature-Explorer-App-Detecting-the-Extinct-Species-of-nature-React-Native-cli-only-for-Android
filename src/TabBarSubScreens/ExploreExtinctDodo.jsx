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

const ExploreExtinctDodo = ({navigation}) => {
  const handleBackPress = () => {
    // Handle back navigation
    navigation.goBack();
    console.log('Back pressed');
  };
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

      <ScrollView
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Main Image */}
        <Image
          source={require('../../assets/images/dodo_bird.png')}
          style={styles.mainImage}
          resizeMode="cover"
        />

        {/* Species Info */}
        <View style={styles.speciesInfoContainer}>
          <Text style={styles.speciesName}>Dodo</Text>
          <Text style={styles.scientificName}>Raphus cucullatus</Text>
        </View>

        {/* Description Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.sectionContent}>
            The Dodo was a flightless bird endemic to the island of Mauritius.
            It was about 1 meter tall and weighed around 20 kilograms. Its
            plumage was generally greyish-brown, with a tuft of feathers on its
            rear. The Dodo had a large head, a hooked beak, and short, sturdy
            legs. It was known for its docile nature and lack of fear towards
            humans, which contributed to its extinction.
          </Text>
        </View>

        {/* Habitat Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Habitat</Text>
          <Text style={styles.sectionContent}>
            Dodos inhabited the forests of Mauritius, where they fed on fruits,
            seeds, bulbs, and roots. They nested on the ground, laying a single
            egg at a time. The island's ecosystem provided a safe haven for the
            Dodo until the arrival of humans and introduced species.
          </Text>
        </View>

        {/* Extinction Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Extinction</Text>
          <Text style={styles.sectionContent}>
            The Dodo's extinction is attributed to human activities, including
            hunting and the introduction of invasive species like rats, pigs,
            and monkeys, which preyed on Dodo eggs and chicks. The last
            confirmed sighting of a Dodo was in 1662, less than a century after
            its discovery by Europeans.
          </Text>
        </View>

        {/* Historical Records Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Historical Records</Text>
          <Text style={styles.sectionContent}>
            Historical records of the Dodo include illustrations and
            descriptions from early explorers and naturalists. Skeletal remains
            and preserved specimens are found in museums worldwide, providing
            insights into the Dodo's anatomy and evolutionary history. The Dodo
            has become a symbol of extinction caused by human impact.
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
  headerTitle: {
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#141414',
    lineHeight: 23,
  },
  placeholder: {
    width: 34, // Same width as back button to center title
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
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#141414',
    marginBottom: 8,
    lineHeight: 28,
  },
  scientificName: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Regular',
    color: '#757575',
  },
  section: {
    paddingHorizontal: 20,
    paddingBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#141414',
    marginBottom: 12,
    lineHeight: 23,
  },
  sectionContent: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Regular',
    color: '#141414',
    lineHeight: 24,
  },
});

export default ExploreExtinctDodo;
