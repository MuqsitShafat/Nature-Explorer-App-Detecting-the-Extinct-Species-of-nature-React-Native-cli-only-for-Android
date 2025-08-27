import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const IdentifyTracksScreen = ({ navigation }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [description, setDescription] = useState('');

  const handleBackPress = () => {
    // Handle back navigation
    navigation.goBack();
    console.log('Back pressed');
  };

  const handleUploadImage = () => {
    // Handle image upload (camera/gallery picker)
    console.log('Upload image pressed');
    // Simulate image upload
    Alert.alert('Upload Image', 'Choose an option', [
      { text: 'Camera', onPress: () => console.log('Camera selected') },
      { text: 'Gallery', onPress: () => console.log('Gallery selected') },
      { text: 'Cancel', style: 'cancel' },
    ]);
  };

  const handleIdentify = () => {
    // Handle identification process
    navigation.navigate('Explore',{
      screen: 'ExploreFieldGuides'
    })
    console.log('Identify pressed');
    console.log('Description:', description);
  };

  const handleGuideItemPress = type => {
    // Handle guide item press
    console.log(`${type} guide pressed`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-back" size={26} color="#0D1C0D" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Identify Tracks/Signs</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Upload Image Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upload Image</Text>

          <View style={styles.uploadContainer}>
            {uploadedImage ? (
              <View style={styles.uploadedImageContainer}>
                <Image
                  source={{ uri: uploadedImage }}
                  style={styles.uploadedImage}
                />
                <TouchableOpacity
                  style={styles.changeImageButton}
                  onPress={handleUploadImage}
                >
                  <Text style={styles.changeImageText}>Change Image</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                style={styles.uploadBox}
                onPress={handleUploadImage}
              >
                {/* <Icon name="cloud-upload" size={40} color="#4F946B" /> */}
                <Text style={styles.uploadTitle}>Upload Image</Text>
                <Text style={styles.uploadSubtitle}>
                  Upload an image of the track or sign you want to identify.
                </Text>
                <View style={styles.uploadButton}>
                  <Text style={styles.uploadButtonText}>Upload Image</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Describe Track/Sign Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Describe Track/Sign</Text>
          <TextInput
            style={styles.descriptionInput}
            placeholder=""
            placeholderTextColor="#0D1C0D"
            value={description}
            onChangeText={setDescription}
            multiline={true}
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        {/* Identify Button */}
        <TouchableOpacity
          style={styles.identifyButton}
          onPress={handleIdentify}
        >
          <Text style={styles.identifyButtonText}>Identify</Text>
        </TouchableOpacity>

        {/* Common Tracks/Signs Guide */}
        <View style={styles.guideSection}>
          <Text style={styles.guideSectionTitle}>
            Common Tracks/Signs Guide
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.guideGrid}
          >
            {/* Animal Tracks */}
            <TouchableOpacity
              style={styles.guideItem}
              onPress={() => handleGuideItemPress('Animal Tracks')}
            >
              <Image
                source={require('../../assets/images/animal_tracks.png')}
                style={styles.guideImage}
                resizeMode="cover"
              />
              <Text style={styles.guideItemTitle}>Animal Tracks</Text>
            </TouchableOpacity>

            {/* Animal Scat */}
            <TouchableOpacity
              style={styles.guideItem}
              onPress={() => handleGuideItemPress('Animal Scat')}
            >
              <Image
                source={require('../../assets/images/animal_scat.png')}
                style={styles.guideImage}
                resizeMode="cover"
              />
              <Text style={styles.guideItemTitle}>Animal Scat</Text>
            </TouchableOpacity>

            {/* Animal Signs */}
            <TouchableOpacity
              style={styles.guideItem}
              onPress={() => handleGuideItemPress('Animal Signs')}
            >
              <Image
                source={require('../../assets/images/animal_signs.png')}
                style={styles.guideImage}
                resizeMode="cover"
              />
              <Text style={styles.guideItemTitle}>Animal Signs</Text>
            </TouchableOpacity>

            {/* Animal Nest */}
            <TouchableOpacity
              style={styles.guideItem}
              onPress={() => handleGuideItemPress('Animal Nest')}
            >
              <Image
                source={require('../../assets/images/animal_nest.png')}
                style={styles.guideImage}
                resizeMode="cover"
              />
              <Text style={styles.guideItemTitle}>Animal Nest</Text>
            </TouchableOpacity>
          </ScrollView>
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
    paddingTop: 50,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Lexend-Bold',
    color: '#0D1C0D',
  },
  placeholder: {
    width: 34,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: 'Lexend-Bold',
    color: '#0D1C0D',
    marginBottom: 15,
  },
  uploadContainer: {
    alignItems: 'center',
  },
  uploadBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    borderStyle: 'dashed',
    paddingVertical: 40,
    paddingHorizontal: 30,
    alignItems: 'center',
    width: '100%',
  },
  uploadTitle: {
    fontSize: 18,
    fontFamily: 'Lexend-Bold',
    color: '#0D1C0D',
    marginTop: 10,
    marginBottom: 8,
  },
  uploadSubtitle: {
    fontSize: 14,
    fontFamily: 'Lexend-Regular',
    color: '#0D1C0D',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  uploadButton: {
    backgroundColor: '#E8F2E8',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  uploadButtonText: {
    color: '#0D1C0D',
    fontSize: 14,
    fontFamily: 'Lexend-Bold',
  },
  uploadedImageContainer: {
    alignItems: 'center',
  },
  uploadedImage: {
    width: 200,
    height: 150,
    borderRadius: 12,
    marginBottom: 15,
  },
  changeImageButton: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  changeImageText: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: '#4F946B',
  },
  descriptionInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Regular',
    color: '#0D1C0D',
    minHeight: 100,
    borderColor: '#D1E5D1',
    borderWidth: 2,
  },
  identifyButton: {
    backgroundColor: '#1AB21A',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignSelf: 'flex-end', // 🔹 Moves button to right
    marginBottom: 30,
  },
  identifyButtonText: {
    color: '#F7FAF7',
    fontSize: 16,
    fontFamily: 'Lexend-Bold',
  },
  guideSection: {
    marginBottom: 30,
  },
  guideSectionTitle: {
    fontSize: 22,
    fontFamily: 'Lexend-Bold',
    color: '#0D1C0D',
    marginBottom: 20,
  },
  guideGrid: {
    flexDirection: 'row',
    paddingRight: 10,
  },
  guideItem: {
    width: width * 0.4,
    maxWidth: 160,
    alignItems: 'center',
    marginRight: 15,
  },
  guideImage: {
    width: width * 0.4,
    height: width * 0.4,
    maxWidth: 160,
    maxHeight: 160,
    borderRadius: 12,
    marginBottom: 8,
  },
  guideItemTitle: {
    fontSize: 16,
    fontFamily: 'Lexend-Medium',
    color: '#0D1C0D',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default IdentifyTracksScreen;
