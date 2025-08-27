import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const NotesObservationDetailsScreen = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.navigate('LogObservationScreen')
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Icon name="arrow-back" size={26} color="#141414" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Observation Details</Text>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        {/* Species Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Species</Text>
          <View style={styles.speciesContainer}>
            <Image
              source={require('../../assets/images/butterfly-icon.png')}
              style={styles.speciesIcon}
            />
            <View style={styles.speciesInfo}>
              <Text style={styles.speciesName}>Polyommatus icarus</Text>
              <Text style={styles.commonName}>Common Blue Butterfly</Text>
            </View>
          </View>
        </View>

        {/* Date & Time Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Date & Time</Text>
          <Text style={styles.sectionValue}>July 22, 2024, 10:30 AM</Text>
        </View>

        {/* Location Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Location</Text>
          <Text style={styles.coordinates}>40.7128° N, 74.0060° W</Text>

          {/* Map Component */}
          <View
            style={{
              height: 200,
              marginBottom: 10,
              borderRadius: 12,
              overflow: 'hidden', // ensures the corners are rounded
            }}
          >
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.mapView}
              region={{
                latitude: 40.7128,
                longitude: -74.006,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
              scrollEnabled={false}
              zoomEnabled={false}
              rotateEnabled={false}
              pitchEnabled={false}
              mapType="standard"
            >
              <Marker
                coordinate={{
                  latitude: 40.7128,
                  longitude: -74.006,
                }}
                pinColor="red"
              />
            </MapView>
          </View>
        </View>

        {/* Weather Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Weather</Text>
          <Text style={styles.sectionValue}>Sunny, 25°C</Text>
        </View>

        {/* Notes Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notes</Text>
          <Text style={styles.notesText}>
            Observed a vibrant Common Blue Butterfly fluttering near a patch of
            wildflowers. Its wings were a striking shade of blue, with delicate
            black markings. The butterfly seemed to be feeding on nectar, moving
            gracefully from flower to flower.
          </Text>
        </View>

        {/* Media Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Media</Text>
          <Image
            source={require('../../assets/images/butterfly-photo.png')}
            style={styles.mediaImage}
          />
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
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
    paddingTop: 40,
    paddingBottom: 15,
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Newsreader_14pt-Bold',
    color: '#0D1C0D',
    lineHeight: 23,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Newsreader_14pt-Bold',
    color: '#0D1C0D',
    marginBottom: 8,
    lineHeight: 23,
  },
  sectionValue: {
    fontSize: 16,
    fontFamily: 'Newsreader_14pt-Regular',
    color: '#0D1C0D',
    lineHeight: 24,
  },
  speciesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(247, 252, 247, 0.4)',
    padding: 12,
  },
  speciesIcon: {
    width: 56,
    height: 75,
    borderRadius: 5,
    marginRight: 12,
  },
  speciesInfo: {
    flex: 1,
  },
  speciesName: {
    fontSize: 16,
    fontFamily: 'Newsreader_14pt-Medium',
    color: '#0D1C0D',
    // fontStyle: 'italic',
    lineHeight: 24,
  },
  commonName: {
    fontSize: 14,
    fontFamily: 'Newsreader_14pt-Regular',
    color: '#4A9C4A',
    lineHeight: 20,
    marginTop: 2,
  },
  coordinates: {
    fontSize: 16,
    fontFamily: 'Newsreader_14pt-Regular',
    color: '#0D1C0D',
    lineHeight: 24,
    marginBottom: 12,
  },
  mapView: {
    width: '100%',
    height: 225,
    borderRadius: 50,
  },
  notesText: {
    fontSize: 16,
    fontFamily: 'Newsreader_14pt-Regular',
    color: '#0D1C0D',
    lineHeight: 24,
  },
  mediaImage: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    resizeMode: 'cover',
  },
});

export default NotesObservationDetailsScreen;
