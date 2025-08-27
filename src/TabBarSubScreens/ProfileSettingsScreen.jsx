import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  Alert, // <-- added
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileSettingsScreen = ({ navigation }) => {
  const handleMenuPress = option => {
    console.log(`${option} pressed`);
  };
  const handlepersonalinformation = () => {
    navigation.navigate('ProfileInfoScreen')
  }
  const handlefeedback = () => {
  navigation.navigate('ProfileFeedbackScreen')
  }
  const handlehelpandfaqs = () => {
    navigation.navigate('ProfileHelpandFaqsScreen')
  }
  const handleLogOut = () => {
    console.log('Log out pressed');
  };

  const handleBackPress = () => {
    console.log('Back pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-back" size={26} color="#141414" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handlepersonalinformation()}
            activeOpacity={0.7}
          >
            <View style={styles.menuIcon}>
              <Image
                source={require('../../assets/images/Personal_information.png')}
                style={styles.iconImage}
              />
            </View>
            <View style={styles.menuTextContainer}>
              <Text
                style={[
                  styles.menuTitle,
                  { fontFamily: 'Newsreader_14pt-Medium' },
                ]}
              >
                Personal Information
              </Text>
              <Text style={styles.menuSubtitle}>
                Update your name, bio, and profile picture
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuPress('Change Password')}
            activeOpacity={0.7}
          >
            <View style={styles.menuIcon}>
              <Image
                source={require('../../assets/images/Change_password.png')}
                style={styles.iconImage}
              />
            </View>
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuTitle}>Change Password</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Preferences Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuPress('Notifications')}
            activeOpacity={0.7}
          >
            <View style={styles.menuIcon}>
              <Image
                source={require('../../assets/images/Notifications.png')}
                style={styles.iconImage}
              />
            </View>
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuTitle}>Notifications</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuPress('Appearance')}
            activeOpacity={0.7}
          >
            <View style={styles.menuIcon}>
              <Image
                source={require('../../assets/images/Appearance.png')}
                style={styles.iconImage}
              />
            </View>
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuTitle}>Appearance</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Support Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handlehelpandfaqs()}
            activeOpacity={0.7}
          >
            <View style={styles.menuIcon}>
              <Image
                source={require('../../assets/images/Help_Faqs.png')}
                style={styles.iconImage}
              />
            </View>
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuTitle}>Help & FAQs</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handlefeedback()}
            activeOpacity={0.7}
          >
            <View style={styles.menuIcon}>
              <Image
                source={require('../../assets/images/Send_feedback.png')}
                style={styles.iconImage}
              />
            </View>
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuTitle}>Send Feedback</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Log Out Button */}
        <View style={styles.logoutContainer}>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={handleLogOut}
            activeOpacity={0.8}
          >
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 40,
    backgroundColor: '#FFFFFF',
  },
  backButton: { padding: 5 },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Newsreader_14pt-Bold',
    color: '#121712',
    lineHeight: 23,
  },
  placeholder: { width: 34 },
  content: { flex: 1, padding: 20 },
  section: { marginBottom: 32 },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Newsreader_14pt-Bold',
    color: '#0D1C0D',
    marginBottom: 16,
    lineHeight: 23,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 4,
  },
  menuIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  iconImage: {
    width: 44,
    height: 44,
    resizeMode: 'contain',
  },
  menuTextContainer: { flex: 1 },
  menuTitle: {
    fontSize: 16,
    fontFamily: 'Newsreader_14pt-Regular',
    color: '#0D1C0D',
    marginBottom: 2,
    lineHeight: 24,
  },
  menuSubtitle: {
    fontSize: 14,
    fontFamily: 'Newsreader_14pt-Regular',
    color: '#4A9C4A',
    lineHeight: 18,
  },
  logoutContainer: { marginTop: 20 },
  logoutButton: {
    backgroundColor: '#E8F5E8',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 14,
    fontFamily: 'Newsreader_14pt-Bold',
    color: '#0D1C0D',
    lineHeight: 21,
  },
  bottomSpacing: { height: 20 },
});

export default ProfileSettingsScreen;
