import React, { useState } from 'react';
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
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';

const TrailDetailsScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Overview');

  const trailCoordinates = [
    { latitude: 37.7849, longitude: -122.4094 },
    { latitude: 37.7869, longitude: -122.4104 },
    { latitude: 37.7889, longitude: -122.4124 },
    { latitude: 37.7909, longitude: -122.4144 },
    { latitude: 37.7929, longitude: -122.4164 },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <View>
            {/* Trail Description */}
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>
                Trailhead Park offers a scenic 3.2-mile loop with a moderate
                difficulty level, perfect for a refreshing hike. The trail
                features a 250-foot elevation gain, providing a gentle challenge
                while showcasing diverse flora and fauna. Enjoy the tranquility
                of nature and the opportunity to spot local wildlife along the
                way.
              </Text>
            </View>

            {/* Photos Section */}
            <View style={styles.photosSection}>
              <Text style={styles.photosTitle}>Photos</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.photosScroll}
              >
                <View style={styles.photoContainer}>
                  <Image
                    source={require('../../assets/images/trail-photo-1.png')}
                    style={styles.photoImage}
                  />
                  <Text style={styles.photoLabel}>Trailhead Park</Text>
                </View>
                <View style={styles.photoContainer}>
                  <Image
                    source={require('../../assets/images/trail-photo-2.png')}
                    style={styles.photoImage}
                  />
                  <Text style={styles.photoLabel}>Trailhead Park</Text>
                </View>
                <View style={styles.photoContainer}>
                  <Image
                    source={require('../../assets/images/trail-photo-3.png')}
                    style={styles.photoImage}
                  />
                  <Text style={styles.photoLabel}>Trail</Text>
                </View>
              </ScrollView>
            </View>

            {/* Tips Section */}
            <View style={styles.tipsSection}>
              <Text style={styles.tipsTitle}>Tips</Text>
              <View style={styles.tipItem}>
                <View style={styles.tipIconContainer}>
                  <Image
                    source={require('../../assets/images/tip-icon.png')}
                    style={styles.tipIcon}
                  />
                </View>
                <Text style={styles.tipText}>Bring water and snacks</Text>
              </View>

              <View style={styles.tipItem}>
                <View style={styles.tipIconContainer}>
                  <Image
                    source={require('../../assets/images/tip-icon.png')}
                    style={styles.tipIcon}
                  />
                </View>
                <Text style={styles.tipText}>Wear sturdy shoes</Text>
              </View>
            </View>
          </View>
        );
      case 'Reviews':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.comingSoonText}>Reviews coming soon...</Text>
          </View>
        );
      case 'Species':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.comingSoonText}>
              Species information coming soon...
            </Text>
          </View>
        );
      default:
        return null;
    }
  };
const handlenavigatepress = () => {
  navigation.navigate('Explore',{
    screen:'ExploreNatureNearMe'
  });
};
const handlesavepress = () => {
  navigation.navigate('Explore',{
    screen:'ExploreProjectDetailsScreen'
  });
};
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={26} color="#141414" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Trail Details</Text>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        {/* Map */}
        <View
          style={{
            height: 200,
            marginHorizontal: 20,
            marginBottom: 20,
            marginTop:5,
            borderRadius: 12,
            overflow: 'hidden', // ensures the corners are rounded
          }}
        >
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.mapView}
            region={{
              latitude: 37.7879,
              longitude: -122.4129,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02,
            }}
            mapType="standard"
          >
            {/* Trail markers */}
            <Marker
              coordinate={{ latitude: 37.7849, longitude: -122.4094 }}
              pinColor="#1AB21A"
            />
            <Marker
              coordinate={{ latitude: 37.7929, longitude: -122.4164 }}
              pinColor="#1AB21A"
            />

            {/* Trail path */}
            <Polyline
              coordinates={trailCoordinates}
              strokeColor="#1AB21A"
              strokeWidth={3}
            />
          </MapView>
        </View>
        {/* Trail Info */}
        <View style={styles.trailInfoSection}>
          <Text style={styles.trailName}>Trailhead Park</Text>

          {/* Trail Stats modified to two-column layout */}
          <View style={styles.statsContainer}>
            <View style={styles.statsColumn}>
              <Text style={styles.statLabel}>Length</Text>
              <Text style={styles.statLabel}>Elevation Gain</Text>
              <Text style={styles.statLabel}>Difficulty</Text>
            </View>
            <View style={styles.statsColumnRight}>
              <Text style={styles.statValue}>3.2 mi</Text>
              <Text style={styles.statValue}>250 ft</Text>
              <Text style={styles.statValue}>Moderate</Text>
            </View>
          </View>

          {/* Tab Navigation */}
          <View style={styles.tabContainer}>
            {['Overview', 'Reviews', 'Species'].map(tab => (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.tabButton,
                  activeTab === tab && styles.activeTabButton,
                ]}
                onPress={() => setActiveTab(tab)}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === tab && styles.activeTabText,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Tab Content */}
          {renderTabContent()}
        </View>
        {/* Bottom Action Buttons */}
        <View style={styles.bottomContainer}>
          {/* Reduced Navigate button width by lowering flex value */}
          <TouchableOpacity style={[styles.navigateButton, { flex: 0.8 }]} onPress={handlenavigatepress}>
            <Text style={styles.navigateButtonText}>Navigate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={handlesavepress}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
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
    fontFamily: 'SpaceGrotesk-Bold',
    color: '#121712',
    lineHeight: 23,
  },
  content: {
    flex: 1,
    marginTop: 5,
  },
  mapView: {
    height: 200,
    marginHorizontal: 0,
    marginBottom: 0,
  },
  trailInfoSection: {
    padding: 20,
  },
  trailName: {
    fontSize: 18,
    fontFamily: 'SpaceGrotesk-Bold',
    color: '#121712',
    marginBottom: 20,
    lineHeight: 23,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statsColumn: {
    flexDirection: 'column',
  },
  statsColumnRight: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'SpaceGrotesk-Regular',
    color: '#5E875E',
    marginBottom: 8,
    lineHeight: 21,
  },
  statValue: {
    fontSize: 14,
    fontFamily: 'SpaceGrotesk-Regular',
    color: '#121712',
    marginBottom: 8,
    lineHeight: 21,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#D6E0D6',
  },
  tabButton: {
    paddingBottom: 12,
    marginRight: 30,
    borderBottomColor: '#E5E8EB',
    borderBottomWidth: 3,
  },
  activeTabButton: {
    borderBottomWidth: 3,
    borderBottomColor: '#E5E8EB',
  },
  tabText: {
    fontSize: 15,
    fontFamily: 'SpaceGrotesk-Bold',
    color: '#5E875E',
    lineHeight: 21,
  },
  activeTabText: {
    color: '#121712',
    lineHeight: 21,
    fontFamily: 'SpaceGrotesk-Bold',
  },
  tabContent: {
    paddingVertical: 20,
  },
  comingSoonText: {
    fontSize: 16,
    fontFamily: 'SpaceGrotesk-Regular',
    color: '#4F944F',
    textAlign: 'center',
    marginVertical: 40,
  },
  descriptionContainer: {
    marginBottom: 25,
  },
  descriptionText: {
    fontSize: 16,
    fontFamily: 'SpaceGrotesk-Regular',
    color: '#121712',
    lineHeight: 24,
  },
  photosSection: {
    marginBottom: 25,
  },
  photosTitle: {
    fontSize: 18,
    fontFamily: 'SpaceGrotesk-Bold',
    color: '#121712',
    marginBottom: 20,
    lineHeight: 23,
  },
  photosScroll: {
    marginLeft: -20,
    paddingLeft: 20,
  },
  photoContainer: {
    width: 160,
    marginRight: 15,
  },
  photoImage: {
    width: 160,
    height: 160,
    borderRadius: 12,
    marginBottom: 8,
  },
  photoLabel: {
    fontSize: 16,
    fontFamily: 'SpaceGrotesk-Medium',
    color: '#121712',
    lineHeight: 24,
  },
  tipsSection: {
    marginBottom: 20,
  },
  tipsTitle: {
    fontSize: 18,
    fontFamily: 'SpaceGrotesk-Bold',
    color: '#121712',
    marginBottom: 12,
    lineHeight: 23,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  tipIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#EBF0EB',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  tipText: {
    fontSize: 16,
    fontFamily: 'SpaceGrotesk-Regular',
    color: '#121712',
    marginLeft: 10,
    lineHeight: 24,
  },
  bottomContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    gap: 150,
    marginTop: -15,
  },
  navigateButton: {
    backgroundColor: '#C7E8C7',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  navigateButtonText: {
    fontSize: 16,
    fontFamily: 'SpaceGrotesk-Bold',
    color: '#121712',
    lineHeight: 21,
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#EBF0EB',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    fontFamily: 'Lexend-Bold',
    color: '#121712',
  },
});

export default TrailDetailsScreen;
