import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileFeedbackScreen = ({ navigation }) => {
  const [feedbackType, setFeedbackType] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleBackPress = () => {
    console.log('Back pressed');
    navigation.goBack();
    // Navigation logic here
  };

  const handleSubmit = () => {
    console.log('Feedback Type:', feedbackType);
    console.log('Feedback:', feedback);
    navigation.navigate('Explore',{
      screen:'ExploreParkDetailsScreen'
    })
    // Submit logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon
            name="arrow-back"
            size={26}
            color="#141414"
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Feedback</Text>
        <View style={styles.placeholder} />
      </View>
      {/* Form */}
      <View style={styles.form}>
        <Text style={styles.label}>Feedback Type</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          placeholderTextColor="#999"
          value={feedbackType}
          onChangeText={setFeedbackType}
        />

        <Text style={[styles.label, { marginTop: 20 }]}>Your Feedback</Text>
        <TextInput
          style={styles.textArea}
          placeholder=""
          placeholderTextColor="#999"
          multiline
          value={feedback}
          onChangeText={setFeedback}
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
        activeOpacity={0.8}
      >
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 10,
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
  backButton: { padding: 5 },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Newsreader_14pt-Bold',
    color: '#121712',
    lineHeight: 23,
  },
  icon: { marginLeft: -10 },
  placeholder: { width: 34 },
  form: {
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Newsreader_14pt-Medium', // Using your font
    color: '#0D1C0D',
    marginBottom: 6,
    lineHeight: 24,
  },
  input: {
    height: 40,
    backgroundColor: '#EAF6EA', // light green background
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 14,
    fontFamily: 'Newsreader_14pt-Regular',
    color: '#121712',
  },
  textArea: {
    height: 144,
    backgroundColor: '#EAF6EA',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 14,
    fontFamily: 'Newsreader_14pt-Regular',
    color: '#121712',
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#0AB80A', // green button
    borderRadius: 50,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 30,
  },
  submitText: {
    color: '#F7FCF7',
    fontSize: 16,
    fontFamily: 'Newsreader_14pt-Bold',
    lineHeight: 24,
  },
});

export default ProfileFeedbackScreen;
