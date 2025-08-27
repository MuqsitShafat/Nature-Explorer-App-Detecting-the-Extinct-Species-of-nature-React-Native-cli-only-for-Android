import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IdentifyByImageScreen = ({ navigation }) => {
  const handleBackPress = () => {
    // Handle back navigation
      navigation.goBack()
    console.log('Back pressed');
  };

  const handleGallery = () => {
    // Handle gallery selection
  
    console.log('Gallery selected');
  };

  const handleCamera = () => {
    // Handle camera selection
     navigation.navigate('Home', {  // 👈 "Home" must match the Tab.Screen name for Home_navigator
    screen: 'HomeIdentificationResultScreen',  // 👈 the target screen inside Home stack
    params: { from: 'IdentifyByImage' },       // optional params
  });
    console.log('Camera selected');
  };

  const handleFingerprint = () => {
    // Handle fingerprint/manual identification
  
    console.log('Manual identification selected');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-back" size={26} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Identify by Image</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Main Content */}
      <View style={styles.contentContainer}>
        <View style={styles.optionsContainer}>
          {/* Gallery Option */}
          <TouchableOpacity style={styles.optionButton} onPress={handleGallery}>
            <View style={styles.iconCircle}>
              <Image
                source={require('../../assets/images/gallery.png')}
                style={styles.optionIcon}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>

          {/* Camera Option */}
          <TouchableOpacity style={styles.optionButton} onPress={handleCamera}>
            <View style={styles.iconCircle}>
              <Image
                source={require('../../assets/images/camera.png')}
                style={styles.optionIconforcamera}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>

          {/* Manual/Fingerprint Option */}
          <TouchableOpacity
            style={styles.optionButton}
            onPress={handleFingerprint}
          >
            <View style={styles.iconCircle}>
              <Image
                source={require('../../assets/images/fingerprint.png')}
                style={styles.optionIcon}
                resizeMode="contain"
              />
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
    fontSize: 20,
    fontFamily: 'Lexend-Bold',
    color: '#000',
  },
  placeholder: {
    width: 34, // Same width as back button to center title
  },
  contentContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: '15%',
    marginTop: '5%',
  },
  optionButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 40,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  optionIcon: {
    width: 60,
    height: 60,
  },
  optionIconforcamera: {
    width: 85,
    height: 85,
    marginTop: '15%',
  },
});

export default IdentifyByImageScreen;
