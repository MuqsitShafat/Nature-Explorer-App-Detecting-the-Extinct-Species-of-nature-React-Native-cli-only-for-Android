import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const ExploreExploreScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/menu.png')}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Explore</Text>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/bookmark.png')}
            style={styles.bookmarkIcon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Icon
            name="search"
            size={28}
            color="#4F946B"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search for a place"
            placeholderTextColor="#4F946B"
            style={styles.searchInput}
          />
        </View>

        {/* Map */}
        <View
          style={{
            height: 200,
            marginHorizontal: 20,
            marginBottom: 30,
            borderRadius: 12,
            overflow: 'hidden', // ensures the corners are rounded
          }}
        >
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{ flex: 1 }}
            region={{
              latitude: 37.7749,
              longitude: -122.4194,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}
            mapType="standard"
          >
            <Marker
              coordinate={{
                latitude: 37.7849,
                longitude: -122.4094,
              }}
              pinColor="#1AB21A"
            />
            <Marker
              coordinate={{
                latitude: 37.7649,
                longitude: -122.4294,
              }}
              pinColor="#1AB21A"
            />
          </MapView>
        </View>

        {/* Nature Near Me Section */}
        <View style={styles.sectionContainer}>
          <Text style={[styles.sectionTitle, { marginBottom: 25 }]}>
            Nature Near Me
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            <View style={styles.natureCard}>
              <Image
                source={require('../../assets/images/golden-gate.png')}
                style={styles.natureImage}
              />
              <Text style={styles.natureTitle}>Golden Gate Park</Text>
              <Text style={styles.natureSubtitle}>San Francisco</Text>
            </View>
            <View style={styles.natureCard}>
              <Image
                source={require('../../assets/images/mount-tam.png')}
                style={styles.natureImage}
              />
              <Text style={styles.natureTitle}>Mount Tamalpais</Text>
              <Text style={styles.natureSubtitle}>Marin County</Text>
            </View>
            <View style={styles.natureCard}>
              <Image
                source={require('../../assets/images/lake-tahoe.png')}
                style={styles.natureImage}
              />
              <Text style={styles.natureTitle}>Lake Tahoe</Text>
              <Text style={styles.natureSubtitle}>San Francisco</Text>
            </View>
          </ScrollView>
        </View>

        {/* Trails Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Trails</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            <View style={styles.trailCard}>
              <Image
                source={require('../../assets/images/lands-end.png')}
                style={styles.trailImage}
              />
              <Text style={styles.trailTitle}>Lands End Trail</Text>
              <Text style={styles.trailSubtitle}>San Francisco</Text>
            </View>
            <View style={styles.trailCard}>
              <Image
                source={require('../../assets/images/muir-woods.png')}
                style={styles.trailImage}
              />
              <Text style={styles.trailTitle}>Muir Woods</Text>
              <Text style={styles.trailSubtitle}>Marin County</Text>
            </View>
            <View style={styles.trailCard}>
              <Image
                source={require('../../assets/images/mount-diablo.png')}
                style={styles.trailImage}
              />
              <Text style={styles.trailTitle}>Mount Diablo</Text>
              <Text style={styles.trailSubtitle}>Contra Costa</Text>
            </View>
          </ScrollView>
        </View>

        {/* Weather Section */}
        <View style={styles.weatherSection}>
          <Text
            style={[styles.sectionTitle, { marginLeft: -15, marginBottom: -5 }]}
          >
            Weather
          </Text>
          <View style={[styles.weatherCard, { marginLeft: -15 }]}>
            <View style={styles.weatherLeft}>
              <Text style={styles.weatherLocation}>San Francisco</Text>
              <Text style={styles.weatherTemp}>22°C</Text>
              <Text style={styles.weatherCondition}>Sunny</Text>
            </View>
            <Image
              source={require('../../assets/images/sunny-weather.png')}
              style={styles.weatherImage}
            />
          </View>
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
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#0D1C12',
    lineHeight: 23,
  },
  menuIcon: {
    width: 24,
    height: 24,
    tintColor: '#0D1C12',
  },
  bookmarkIcon: {
    width: 24,
    height: 24,
    tintColor: '#0D1C12',
  },
  content: {
    flex: 1,
    marginTop: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F2ED',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Regular',
    color: '#4F946B',
    lineHeight: 24,
  },
  mapView: {
    height: 200,
    marginHorizontal: 20,
    marginBottom: 30,
    borderRadius: 12,
  },
  sectionContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#0D1C12',
    marginBottom: 15,
    paddingHorizontal: 20,
    lineHeight: 28,
  },
  horizontalScroll: {
    // paddingHorizontal: 20,
    marginHorizontal: 17,
  },
  natureCard: {
    width: 160,
    marginRight: 15,
  },
  natureImage: {
    width: 160,
    height: 160,
    borderRadius: 12,
    marginBottom: 8,
  },
  natureTitle: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Medium',
    color: '#0D1C12',
    lineHeight: 24,
    marginTop: 8,
    marginBottom: 2,
  },
  natureSubtitle: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Regular',
    color: '#4F946B',
    lineHeight: 21,
  },
  trailCard: {
    width: 160,
    marginRight: 15,
  },
  trailImage: {
    width: 160,
    height: 160,
    borderRadius: 12,
    marginBottom: 8,
  },
  trailTitle: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Medium',
    color: '#0D1C12',
    marginBottom: 2,
    marginTop: 8,
    lineHeight: 24,
  },
  trailSubtitle: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Regular',
    color: '#4F946B',
    lineHeight: 21,
  },
  weatherSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  weatherCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  weatherLeft: {
    flex: 1,
  },
  weatherLocation: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Regular',
    color: '#4F946B',
    lineHeight: 21,
    marginBottom: 5,
  },
  weatherTemp: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#0D1C12',
    marginBottom: 2,
    lineHeight: 20,
  },
  weatherCondition: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Regular',
    color: '#4F944F',
    lineHeight: 21,
  },
  weatherImage: {
    width: 130,
    height: 70,
    borderRadius: 12,
  },
});

export default ExploreExploreScreen;
