import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IdentifyScreen = ({ navigation }) => {
  const handleBackPress = () => {
    // Handle back navigation
    console.log('Back pressed');
  };

  const handleImageIdentify = () => {
    // Handle image identification
    navigation.navigate('IdentifyByImage');
    console.log('Image identification selected');
  };

  const handleSoundIdentify = () => {
    // Handle sound identification
    navigation.navigate('IdentifyBySound');
    console.log('Sound identification selected');
  };

  const handleTracksIdentify = () => {
    // Handle tracks/scat identification
    navigation.navigate('IdentifyTracksScreen');
    console.log('Tracks/Scat identification selected');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Identify</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Main Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.questionText}>How do you want to identify?</Text>

        {/* Identification Options */}
        <View style={styles.optionsContainer}>
          {/* Image Option */}
          <TouchableOpacity
            style={styles.optionCard}
            onPress={handleImageIdentify}
          >
            <View style={styles.iconContainer}>
              <Image
                source={require('../../assets/images/identify_image.png')}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.optionTitle}>Image</Text>
              <Text style={styles.optionDescription}>
                Identify species by taking a photo
              </Text>
            </View>
          </TouchableOpacity>

          {/* Sound Option */}
          <TouchableOpacity
            style={styles.optionCard}
            onPress={handleSoundIdentify}
          >
            <View style={styles.iconContainer}>
              <Image
                source={require('../../assets/images/identify_mic.png')}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.optionTitle}>Sound</Text>
              <Text style={styles.optionDescription}>
                Identify species by recording a sound
              </Text>
            </View>
          </TouchableOpacity>

          {/* Tracks/Scat Option */}
          <TouchableOpacity
            style={styles.optionCard}
            onPress={handleTracksIdentify}
          >
            <View style={styles.iconContainer}>
              <Image
                source={require('../../assets/images/identify_tac.png')}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.optionTitle}>Tracks/Scat</Text>
              <Text style={styles.optionDescription}>
                Identify species by their tracks or scat
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
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
    paddingTop: '12%', // Extra padding for Android status bar
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#0D1C12',
  },
  placeholder: {
    width: 34, // Same width as back button to center title
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  questionText: {
    fontSize: 25,
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#0D1C12',
    marginBottom:'5%' ,
    // lineHeight: 30,
  },
  optionsContainer: {
    flex: 1,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 0,
    marginBottom: 10,
    borderRadius: 0,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 19,
    fontFamily: 'PlusJakartaSans-Medium',
    color: '#0D1C12',
    marginBottom: 5,
  },
  optionDescription: {
    fontSize: 15,
    fontFamily: 'PlusJakartaSans-Regular',
    color: '#4F946B',
    lineHeight: 20,
  },
});

export default IdentifyScreen;
