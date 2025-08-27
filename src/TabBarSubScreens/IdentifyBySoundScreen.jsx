import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IdentifyBySoundScreen = ({navigation}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleBackPress = () => {
    // Handle back navigation
    navigation.goBack();
    console.log('Back pressed');
  };

  const handleStartRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      setRecordingTime(0);
      setShowResults(false);
      // Start recording logic here
      console.log('Recording started');
    } else {
      setIsRecording(false);
      setIsAnalyzing(true);
      setAnalysisProgress(0);
      // Stop recording and start analysis
      console.log('Recording stopped, starting analysis');

      // Simulate analysis progress
      const progressInterval = setInterval(() => {
        setAnalysisProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setIsAnalyzing(false);
            setShowResults(true);
            return 100;
          }
          return prev + 30;
        });
      }, 500);
    }
  };

  const handleReviewRecording = () => {
    // Handle review recording
   navigation.navigate('Explore', {
      screen: 'ExploreExtinctSpeciesScreen',
    });
    console.log('Review recording pressed');
  };

  // Timer effect for recording
  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  const speciesData = [
    {
      name: 'Northern Cardinal',
      confidence: '85%',
      image: require('../../assets/images/northern_cardinal.png'),
    },
    {
      name: 'American Robin',
      confidence: '70%',
      image: require('../../assets/images/american_robin.png'),
    },
    {
      name: 'House Finch',
      confidence: '55%',
      image: require('../../assets/images/house_finch.png'),
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-back" size={26} color="#0D1C0D" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Identify by Sound</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Instructions */}
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructionText}>
            Record the sound of a species to identify it.
          </Text>
          <Text style={styles.instructionText}>
            For best results, ensure the recording is clear and free of
            background noise.
          </Text>
        </View>

        {/* Recording Button */}
        <View style={styles.recordingSection}>
          <TouchableOpacity
            style={[
              styles.recordButton,
              isRecording && styles.recordButtonActive,
            ]}
            onPress={handleStartRecording}
          >
            <Text style={styles.recordButtonText}>
              {isRecording ? 'Stop Recording' : 'Start Recording'}
            </Text>
          </TouchableOpacity>

          {/* Recording Time */}
          <Text style={styles.recordingTime}>
            Recording time: {formatTime(recordingTime)}
          </Text>

          {/* Analysis Status */}
          {isAnalyzing && (
            <Text style={styles.analysisText}>Analyzing sound...</Text>
          )}
        </View>

        {/* Analysis Progress */}
        {(isAnalyzing || showResults) && (
          <View style={styles.analysisSection}>
            <Text style={styles.analysisTitle}>Analyzing</Text>
            <View style={styles.progressBarContainer}>
              <View
                style={[styles.progressBar, { width: `${analysisProgress}%` }]}
              />
            </View>
          </View>
        )}

        {/* Results */}
        {showResults && (
          <View style={styles.resultsSection}>
            <Text style={styles.resultsTitle}>
              Possible species identified:
            </Text>

            {speciesData.map((species, index) => (
              <View key={index} style={styles.speciesCard}>
                <Image
                  source={species.image}
                  style={styles.speciesImage}
                  //   defaultSource={require('../../assets/images/placeholder_bird.png')}
                />
                <View style={styles.speciesInfo}>
                  <Text style={styles.speciesName}>{species.name}</Text>
                  <Text style={styles.confidenceText}>
                    Confidence: {species.confidence}
                  </Text>
                </View>
              </View>
            ))}

            {/* Review Recording Button */}
            <View style={styles.reviewbuttonContainer}>

            <TouchableOpacity
              style={styles.reviewButton}
              onPress={handleReviewRecording}
              >
              <Text style={styles.reviewButtonText}>Review Recording</Text>
            </TouchableOpacity>
                </View>
          </View>
        )}
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
    paddingVertical: 5,
    paddingTop: 50,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 19,
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
  instructionsContainer: {
    paddingTop: 20,
    paddingBottom: 3,
  },
  instructionText: {
    fontSize: 16,
    fontFamily: 'Lexend-Regular',
    color: '#0D1C0D',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 1,
  },
  recordingSection: {
    alignItems: 'center',
    paddingTop: 20,
    // paddingBottom: 10,
  },
  recordButton: {
    backgroundColor: '#1AB21A',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 15,
  },
  recordButtonActive: {
    backgroundColor: '#D32F2F',
  },
  recordButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Lexend-Bold',
  },
  recordingTime: {
    fontSize: 16,
    fontFamily: 'Lexend-Regular',
    color: '#0D1C0D',
    marginBottom: 10,
  },
  analysisText: {
    fontSize: 16,
    fontFamily: 'Lexend-Regular',
    color: '#0D1C0D',
  },
  analysisSection: {
    paddingVertical: 20,
  },
  analysisTitle: {
    fontSize: 18,
    fontFamily: 'Lexend-Medium',
    color: '#0D1C0D',
    marginBottom: 15,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#D1E5D1',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#1AB21A',
    borderRadius: 4,
  },
  resultsSection: {
    paddingVertical: 10,
  },
  resultsTitle: {
    fontSize: 16,
    fontFamily: 'Lexend-Regular',
    color: '#0D1C0D',
    marginBottom: 10,
    textAlign: 'center',
  },
  speciesCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    // marginBottom: 10,
  },
  speciesImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  speciesInfo: {
    flex: 1,
  },
  speciesName: {
    fontSize: 16,
    fontFamily: 'Lexend-Medium',
    color: '#0D1C0D',
    marginBottom: 5,
  },
  confidenceText: {
    fontSize: 14,
    fontFamily: 'Lexend-Regular',
    color: '#4F944F',
  },
  reviewbuttonContainer: {
   alignItems: 'center',
    
  },
  reviewButton: {
    backgroundColor: '#E8F2E8',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginTop: 20,
  },
  reviewButtonText: {
    fontSize: 16,
    fontFamily: 'Lexend-Bold',
    color: '#0D1C0D',
  },
});

export default IdentifyBySoundScreen;
