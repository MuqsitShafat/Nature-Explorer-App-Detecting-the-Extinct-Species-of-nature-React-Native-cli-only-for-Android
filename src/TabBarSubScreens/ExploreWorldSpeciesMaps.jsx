import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ExploreWorldSpeciesMaps = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // Sample species markers
  const [markers] = useState([
    {
      id: 1,
      coordinate: { latitude: 37.78825, longitude: -122.4324 },
      title: 'Species Location 1',
      description: 'Found species here',
    },
    {
      id: 2,
      coordinate: { latitude: 37.75825, longitude: -122.4624 },
      title: 'Species Location 2',
      description: 'Another species location',
    },
  ]);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message:
              'This app needs access to your location to show your position on the map.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getCurrentLocation();
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      getCurrentLocation();
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      error => console.log('Error getting location:', error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header - matching ProfileInfoScreen style */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Log',{screen:'LogObservationScreen'})}>
          <Icon name="arrow-back" size={26} color="#141414" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>World Species</Text>
        <View style={{ width: 26 }} />
      </View>

      {/* Map */}
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
        showsUserLocation={true}
        mapType="terrain"
      >
        {markers.map(marker => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
            pinColor="red"
          />
        ))}
      </MapView>

      {/* Search Bar Overlay */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={30} color="#4F964F" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a species"
          placeholderTextColor="#4F964F"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Zoom Controls */}
      <View style={styles.zoomControls}>
        <TouchableOpacity
          style={styles.zoomButton}
          onPress={() => {
            setRegion({
              ...region,
              latitudeDelta: region.latitudeDelta / 2,
              longitudeDelta: region.longitudeDelta / 2,
            });
          }}
        >
          <Text style={styles.zoomText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.zoomButton}
          onPress={() => {
            setRegion({
              ...region,
              latitudeDelta: region.latitudeDelta * 2,
              longitudeDelta: region.longitudeDelta * 2,
            });
          }}
        >
          <Text style={styles.zoomText}>−</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Match ProfileInfoScreen background
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Match ProfileInfoScreen header layout
    paddingHorizontal: 20, // Match ProfileInfoScreen padding
    paddingTop: 40, // Match ProfileInfoScreen padding
    paddingBottom: 15, // Match ProfileInfoScreen padding
    backgroundColor: '#FFFFFF', // Match ProfileInfoScreen header background
  },
  headerTitle: {
    fontSize: 18, // Match ProfileInfoScreen font size
    fontFamily: 'NotoSerif-Bold', // Match ProfileInfoScreen font family
    color: '#121712', // Match ProfileInfoScreen color
    lineHeight: 23, // Match ProfileInfoScreen line height
  },
  map: {
    height: '45%', // 45% of screen height as requested
  },
  searchContainer: {
    position: 'absolute',
    top: '15%', // relative to screen height
    left: '5%',
    right: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7FCF7',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DEDBD9',
    elevation: 1,
  },
  searchInput: {
    flex: 1, // Take remaining space after icon
    fontSize: 16,
    fontFamily: 'NotoSerif-Regular',
    color: '#4F964F',
    marginLeft: 8, // Small gap between icon and input
  },
  zoomControls: {
    position: 'absolute',
    right: '5%',
    bottom: '15%', // relative instead of fixed pixels
    alignItems: 'center',
  },
  zoomButton: {
    backgroundColor: '#FFFFFF',
    width: 40,
    height: 40,
    borderRadius: 10, // Match ProfileInfoScreen border radius
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#DEDBD9', // Match ProfileInfoScreen border color
    elevation: 1, // Match ProfileInfoScreen elevation
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  zoomText: {
    fontSize: 30,
    fontFamily: 'PlusJakartaSans-Bold', // Match ProfileInfoScreen font
    color: '#0D1C0D', // Match ProfileInfoScreen dark color
    textAlign: 'center', // Center the text
    lineHeight: 32, // Adjust line height for better centering
  },
});

export default ExploreWorldSpeciesMaps;
