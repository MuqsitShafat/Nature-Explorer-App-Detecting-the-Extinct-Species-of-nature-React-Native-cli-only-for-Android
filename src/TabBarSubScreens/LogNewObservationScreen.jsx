import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
  Image
} from 'react-native';


const LogNewObservationScreen = ({navigation}) => {
  const [formData, setFormData] = useState({
    species: '',
    location: '',
    date: '',
    time: '',
    weatherConditions: '',
    notes: '',
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDateSelect = () => {
    // Date picker logic would go here
    Alert.alert('Date Picker', 'Date picker would open here');
  };

  const handleTimeSelect = () => {
    // Time picker logic would go here
    Alert.alert('Time Picker', 'Time picker would open here');
  };

  const handleUploadPhoto = () => {
    Alert.alert('Upload Photo', 'Photo upload functionality would go here');
  };

  const handleRecordAudio = () => {
    Alert.alert('Record Audio', 'Audio recording functionality would go here');
  };
const handleSaveObservation = () => {
   navigation.navigate('Explore',{
    screen:'ExploreWorldSpeciesMaps'
  });
  console.log('hehe')
}
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
         <Image source={require('../../assets/images/Cross.png')}  />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Observation</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Form Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        
        {/* Species */}
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Species</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter species name"
            placeholderTextColor="#4F946B"
            value={formData.species}
            onChangeText={(text) => handleInputChange('species', text)}
          />
        </View>

        {/* Location */}
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Location</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter location or use GPS"
            placeholderTextColor="#4F946B"
            value={formData.location}
            onChangeText={(text) => handleInputChange('location', text)}
          />
        </View>

        {/* Date */}
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Date</Text>
          <TouchableOpacity
            style={styles.selectInput}
            onPress={handleDateSelect}
            activeOpacity={0.7}
          >
            <Text style={[styles.selectText, !formData.date && styles.placeholderText]}>
              {formData.date || 'Select date'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Time */}
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Time</Text>
          <TouchableOpacity
            style={styles.selectInput}
            onPress={handleTimeSelect}
            activeOpacity={0.7}
          >
            <Text style={[styles.selectText, !formData.time && styles.placeholderText]}>
              {formData.time || 'Select time'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Weather Conditions */}
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Weather Conditions</Text>
          <TextInput
            style={styles.textInput}
            placeholder="e.g., Sunny, Cloudy, Rainy"
            placeholderTextColor="#4F946B"
            value={formData.weatherConditions}
            onChangeText={(text) => handleInputChange('weatherConditions', text)}
          />
        </View>

        {/* Notes */}
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Notes</Text>
          <TextInput
            style={[styles.textInput, styles.notesInput]}
            placeholder="Add your observations..."
            placeholderTextColor="#4F946B"
            multiline
            numberOfLines={6}
            textAlignVertical="top"
            value={formData.notes}
            onChangeText={(text) => handleInputChange('notes', text)}
          />
        </View>

        {/* Media Section */}
        <View style={styles.mediaSection}>
          <Text style={styles.fieldLabel}>Media</Text>
          
          <TouchableOpacity
            style={styles.mediaButton}
            onPress={handleUploadPhoto}
            activeOpacity={0.7}
          >
            <Image source={require('../../assets/images/Camerai.png')} style={styles.mediaIcon} />
            <Text style={styles.mediaText}>Upload Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.mediaButton}
            onPress={handleRecordAudio}
            activeOpacity={0.7}
          >
            <Image source={require('../../assets/images/microphone.png')} style={styles.mediaIcon} />
            <Text style={styles.mediaText}>Record Audio</Text>
          </TouchableOpacity>
        </View>

        {/* Save Button */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSaveObservation}
          activeOpacity={0.8}
        >
          <Text style={styles.saveButtonText} onPress={handleSaveObservation}>Save Observation</Text>
        </TouchableOpacity>

        {/* Bottom spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
     flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 40,
    backgroundColor: '#FFFFFF',
  },
  closeButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#0D1C12',
    lineHeight: 23,
  },
  headerSpacer: {
    width: 34,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  fieldLabel: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#0D1C12',
    marginBottom: 8,
    lineHeight: 24,
  },
  textInput: {
    backgroundColor: '#E8F2ED',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#0D1C12',
    minHeight: 48,
    fontFamily: 'PlusJakartaSans-Regular',
    lineHeight: 24,
  },
  selectInput: {
    backgroundColor: '#e8f5e8',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    minHeight: 48,
    justifyContent: 'center',
  },
  selectText: {
    fontSize: 16,
    color: '#4F946B',
    fontFamily: 'PlusJakartaSans-Regular',
    lineHeight: 24,
  },
  placeholderText: {
    fontFamily: 'PlusJakartaSans-Regular',
    lineHeight: 24,
    color: '#4F946B',
    fontSize: 16,
    
  },
  notesInput: {
    height: 120,
    paddingTop: 14,
  },
  mediaSection: {
    marginBottom: 10,
  },
  mediaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 6,
    marginBottom: 12,
  },
  mediaIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  mediaText: {
    fontSize: 16,
    color: '#0D1C12',
    fontFamily: 'PlusJakartaSans-Regular',
    lineHeight: 24,
  },
  saveButton: {
    backgroundColor: '#179C4D',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#F7FAFA',
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Bold',
    lineHeight: 24,
  },
  bottomSpacing: {
    height: 25
  },
});

export default LogNewObservationScreen;