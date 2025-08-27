import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
  Alert,
} from 'react-native';

const NewJournalEntry = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleClosePress = () => {
    if (title.trim() || content.trim()) {
      Alert.alert(
        'Discard Entry',
        'Are you sure you want to discard this journal entry?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Discard',
            style: 'destructive',
            onPress: () => navigation.goBack(),
          },
        ]
      );
    } else {
      navigation.goBack();
    }
  };

  const handleDiscardPress = () => {
    Alert.alert(
      'Discard Entry',
      'Are you sure you want to discard this journal entry?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Discard',
          style: 'destructive',
          onPress: () => {
            setTitle('');
            setContent('');
            navigation.goBack();
          },
        },
      ]
    );
  };

  const handleSavePress = () => {
    if (!title.trim()) {
      Alert.alert('Missing Title', 'Please enter a title for your journal entry.');
      return;
    }

    if (!content.trim()) {
      Alert.alert('Missing Content', 'Please enter some content for your journal entry.');
      return;
    }

    // Here you would save the journal entry
    console.log('Saving journal entry:', { title: title.trim(), content: content.trim() });
    
    // Show success message and navigate back
    // Alert.alert(
    //   'Entry Saved',
    //   'Your journal entry has been saved successfully.',
    //   [
    //     {
    //       text: 'OK',
    //       onPress: () => navigation.goBack(),
    //     },
    //   ]
    // );
    navigation.navigate('Explore',{
      screen:'ExploreCitizenScienceScreen'
    })
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleClosePress} style={styles.closeButton}>
          <Image 
            source={require('../../assets/images/Cross.png')} 
            style={styles.closeIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Journal Entry</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView 
        style={styles.content} 
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Title Input */}
        <View style={styles.inputSection}>
          <TextInput
            style={styles.titleInput}
            placeholder="Title"
            placeholderTextColor="#4F964F"
            value={title}
            onChangeText={setTitle}
            maxLength={100}
          />
        </View>

        {/* Content Input */}
        <View style={styles.inputSection}>
          <TextInput
            style={styles.contentInput}
            placeholder="Content"
            placeholderTextColor="#4F964F"
            value={content}
            onChangeText={setContent}
            multiline
            textAlignVertical="top"
          />
        </View>

        {/* Bottom spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* Bottom Action Buttons */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity
          style={styles.discardButton}
          onPress={handleDiscardPress}
          activeOpacity={0.7}
        >
          <Text style={styles.discardButtonText}>Discard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.saveButton,
            (!title.trim() || !content.trim()) && styles.saveButtonDisabled
          ]}
          onPress={handleSavePress}
          activeOpacity={0.8}
          disabled={!title.trim() || !content.trim()}
        >
          <Text style={[
            styles.saveButtonText,
            (!title.trim() || !content.trim()) && styles.saveButtonTextDisabled
          ]}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomminorSpacing} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#ffffff' 
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
    padding: 5 
  },
  closeIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'NotoSerif-Bold',
    color: '#121712',
    lineHeight: 23,
  },
  placeholder: { 
    width: 34 
  },
  content: { 
    flex: 1,
    padding: 20,
  },
  inputSection: {
    marginBottom: 20,
  },
  titleInput: {
    backgroundColor: '#E8F2E8',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    fontFamily: 'NotoSerif-Regular',
    color: '#4F964F',
    lineHeight: 24,
  },
  contentInput: {
    backgroundColor: '#E8F2E8',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    fontFamily: 'NotoSerif-Regular',
    color: '#4F964F',
    lineHeight: 24,
    minHeight: 200,
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    // borderTopWidth: 1,
    // borderTopColor: '#f0f0f0',
  },
  discardButton: {
    flex: 1,
    backgroundColor: '#E8F2E8',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginRight: 8,
    // borderWidth: 1,
    // borderColor: '#e0e0e0',
  },
  discardButtonText: {
    fontSize: 16,
    fontFamily: 'NotoSerif-Bold',
    color: '#0D1C0D',
    lineHeight: 24,
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#14B814',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginLeft: 8,
  },
  saveButtonDisabled: {
    backgroundColor: '#cccccc',
  },
  saveButtonText: {
    fontSize: 16,
    fontFamily: 'NotoSerif-Bold',
    color: '#F7FCF7',
    lineHeight: 24,
  },
  saveButtonTextDisabled: {
    color: '#999999',
  },
  bottomSpacing: { 
    height: 100 
  },    
  bottomminorSpacing: { 
    height: 15 
  }
});

export default NewJournalEntry;