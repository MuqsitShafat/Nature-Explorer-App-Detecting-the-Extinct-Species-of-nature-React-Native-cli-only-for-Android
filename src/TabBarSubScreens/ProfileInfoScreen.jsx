import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileInfoScreen = ({ navigation }) => {
  const recentObservations = [
    require('../../assets/images/bird.png'),
    require('../../assets/images/flower.png'),
    require('../../assets/images/insect.png'),
    require('../../assets/images/tree.png'),
  ];

  const [activeTab, setActiveTab] = useState('My Observations');

  const tabs = ['My Observations', 'My Lists', 'Achievements', 'Settings'];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={26} color="#141414" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Info */}
        <View style={styles.profileSection}>
          <Image
            source={require('../../assets/images/profile-avatar.png')}
            style={styles.avatar}
          />
          <Text style={styles.name}>Olivia Harper</Text>
          <Text style={styles.username}>@oliviaharper</Text>
          <Text style={styles.joined}>Joined 2021</Text>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>123</Text>
            <Text style={styles.statLabel}>Observations</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>45</Text>
            <Text style={styles.statLabel}>Identifications</Text>
          </View>
          <View style={[styles.statBox, styles.listBox]}>
            <Text style={styles.statNumber}>67</Text>
            <Text style={styles.statLabel}>Lists</Text>
          </View>
        </View>

        {/* Tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsContainer}
        >
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tabButton,
                activeTab === tab && styles.activeTabButton
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tab,
                  activeTab === tab && styles.activeTab
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Recent Observations */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Observations</Text>
          <View style={styles.observationsGrid}>
            {recentObservations.map((img, index) => (
              <Image
                key={index}
                source={img}
                style={styles.observationImage}
              />
            ))}
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
    backgroundColor: '#FFFFFF'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 15,
    backgroundColor: '#FFFFFF'
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#121712',
    lineHeight: 23
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 10
  },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 45,
    marginBottom: 12
  },
  name: {
    fontSize: 22,
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#171412'
  },
  username: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Regular',
    color: '#7D7366',
    marginTop: 2
  },
  joined: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Regular',
    color: '#7D7366',
    marginTop: 2
  },
  statsContainer: {
    flexDirection: 'row',
    marginHorizontal: 14,
    marginTop: 20
  },
  statBox: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DEDBD9',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10
  },
  listBox: {
    paddingHorizontal: 25
  },
  statNumber: {
    fontSize: 24,
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#0D1C0D'
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Regular',
    color: '#7D7366',
    marginTop: 4
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#DEDBD9',
    paddingBottom: 10,
    paddingHorizontal: 10,
    marginTop: 20
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    minWidth: 90,
    alignItems: 'center'
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#E5E8EB',
    paddingBottom: 5
  },
  tab: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#7D7366'
  },
  activeTab: {
    color: '#171412'
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 25
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#171412',
    lineHeight: 23,
    marginBottom: 12
  },
  observationsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  observationImage: {
    elevation: 1,
    width: '48%',
    height: 173,
    borderRadius: 12,
    marginBottom: 12
  }
});

export default ProfileInfoScreen;
