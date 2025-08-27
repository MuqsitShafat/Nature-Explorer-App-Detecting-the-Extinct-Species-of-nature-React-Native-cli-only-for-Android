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

const LogObservationScreen = ({ navigation }) => {
  const handleEdit = () => {
    navigation.navigate('LogNewObservationScreen');
  };
  const handleShare = () => {
    // Handle share functionality
    navigation.navigate('Explore',{
      screen:'ExploreTrailDetailsScreen'
    });
    console.log('Share pressed');
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity >
          <Icon name="arrow-back" size={26} color="#141414" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Observation</Text>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        {/* Main Image */}
        <Image
          source={require('../../assets/images/cardinal-bird.png')}
          style={styles.mainImage}
        />

        {/* Species Info */}
        <View style={styles.speciesSection}>
          <Text style={styles.speciesName}>Northern Cardinal</Text>
          <Text style={styles.locationText}>
            Observed in Central Park, New York
          </Text>
        </View>
        {/* Horizontal Line */}
        <View style={styles.horizontalLine} />
        {/* Date and Time Row */}
        <View style={styles.infoRow}>
          <View style={styles.infoColumn}>
            <Text style={styles.infoLabel}>Date</Text>
            <Text style={styles.infoValue}>May 15,</Text>
            <Text style={styles.infoValue}>2024</Text>
          </View>
          <View style={styles.infoColumn}>
            <Text style={styles.infoLabel}>Time</Text>
            <Text style={styles.infoValue}>10:00 am</Text>
          </View>
        </View>
        {/* Horizontal Line */}
        <View style={styles.horizontalLine} />
        {/* Weather and Notes Row */}
        <View style={styles.detailsRow}>
          <View style={styles.detailColumn}>
            <Text style={styles.detailLabel}>Weather</Text>
            <Text style={styles.detailValue}>Sunny,</Text>
            <Text style={styles.detailValue}>22°C</Text>
          </View>
          {/* Notes section with more width applied here */}
          <View style={[styles.detailColumn, { flex: 2.5 }]}>
            <Text style={styles.detailLabel}>Notes</Text>
            <Text style={styles.notesText}>
              A vibrant male cardinal perched on a branch, singing its melodious
              song.
            </Text>
          </View>
        </View>

        {/* Map */}
        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.mapView}
            region={{
              latitude: 40.7829,
              longitude: -73.9654,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02,
            }}
            scrollEnabled={false}
            zoomEnabled={false}
            rotateEnabled={false}
            pitchEnabled={false}
            mapType="standard"
          >
            <Marker
              coordinate={{
                latitude: 40.7829,
                longitude: -73.9654,
              }}
              pinColor="red"
            />
          </MapView>
        </View>
        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
            <Text style={styles.shareButtonText}>Share</Text>
          </TouchableOpacity>
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
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Lexend-Bold',
    color: '#0D1C0D',
    lineHeight: 23,
  },
  content: {
    flex: 1,
  },
  mainImage: {
    width: '100%',
    height: 284,
    resizeMode: 'cover',
  },
  speciesSection: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  speciesName: {
    fontSize: 22,
    fontFamily: 'Lexend-Bold',
    color: '#0D1C0D',
    marginBottom: 10,
    lineHeight: 28,
  },
  locationText: {
    fontSize: 16,
    fontFamily: 'Lexend-Regular',
    color: '#0D1C0D',
    lineHeight: 24,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#E5E8EB',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  infoRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  infoColumn: {
    marginRight: 60,
  },
  infoLabel: {
    fontSize: 14,
    fontFamily: 'Lexend-Regular',
    color: '#4F944F',
    marginBottom: 4,
    lineHeight: 21,
  },
  infoValue: {
    fontSize: 14,
    fontFamily: 'Lexend-Regular',
    color: '#0D1C0D',
    lineHeight: 21,
  },
  detailsRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  detailColumn: {
    flex: 1,
    marginRight: 20,
  },
  detailLabel: {
    fontSize: 14,
    fontFamily: 'Lexend-Bold',
    color: '#4F944F',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 14,
    fontFamily: 'Lexend-Regular',
    color: '#0D1C0D',
    lineHeight: 21,
  },
  notesText: {
    fontSize: 14,
    fontFamily: 'Lexend-Regular',
    color: '#0D1C0D',
    lineHeight: 21,
  },
mapContainer: {
  height: 200,
  marginHorizontal: 20,
  marginBottom: 30,
  borderRadius: 12,
  marginTop: '15%',
  overflow: 'hidden', // 🔑 ensures rounded corners clip the map
},

mapView: {
  flex: 1, // fill the container
},

  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: '40%',
  },
  editButton: {
    flex: 1,
    backgroundColor: '#E8F2E8',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  editButtonText: {
    fontSize: 16,
    fontFamily: 'Lexend-Bold',
    color: '#0D1C0D',
  },
  shareButton: {
    flex: 1,
    backgroundColor: '#1AB21A',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  shareButtonText: {
    fontSize: 16,
    fontFamily: 'Lexend-Bold',
    color: '#F7FAF7',
    lineHeight: 21,
  },
});

export default LogObservationScreen;
