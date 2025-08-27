import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProjectDetailsScreen = ({ navigation, route }) => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  // This would normally come from route.params or API
  const projectData = {
    title: 'Urban Bird Watch Project',
    image: require('../../assets/images/urban_birds.png'), // Replace with your image path
    overview:
      'Participate in our Urban Bird Watch project to help monitor bird populations in urban areas. Your observations contribute to understanding how birds adapt to city environments.',
    participationSteps: [
      {
        step: 1,
        title: 'Observe',
        description: 'Observe birds in your local area',
        icon: require('../../assets/images/observe.png'),
      },
      {
        step: 2,
        title: 'Record',
        description: 'Record your observations in the app',
        icon: require('../../assets/images/record.png'),
      },
      {
        step: 3,
        title: 'Submit',
        description: 'Submit your findings to the project',
        icon: require('../../assets/images/submit.png'),
      },
    ],
    timeline: [
      {
        title: 'Project Launch',
        date: 'June 1, 2024',
        icon: require('../../assets/images/analysis.png'),
      },
      {
        title: 'Data Collection',
        date: 'June 1 - August 31, 2024',
        icon: require('../../assets/images/analysis.png'),
      },
      {
        title: 'Results Analysis',
        date: 'September 15, 2024',
        icon: require('../../assets/images/project_launch.png'),
      },
    ],
    faqs: [
      {
        question: 'What types of birds should I look for?',
        answer:
          'Focus on common urban birds like pigeons, sparrows, crows, and any other birds you observe in city environments.',
      },
      {
        question: 'How do I submit my observations?',
        answer:
          'Use the observation form in the app to record species, location, time, and any behavioral notes.',
      },
    ],
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleJoinProject = () => {
    navigation.navigate('Explore',{
      screen:'ExploreParkDetailsScreen'
    })
    console.log('Join Project pressed');
    // Handle join project logic
  };
  const handleLearnMore = () => {
    navigation.navigate('Explore', { screen: 'ExploreEducationResourcesScreen' });
    console.log('Learn More pressed');
    // Handle learn more navigation
  };

  const toggleFAQ = index => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-back" size={26} color="#141414" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Project Details</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Project Image */}
        <Image source={projectData.image} style={styles.projectImage} />

        {/* Project Overview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Project Overview</Text>
          <Text style={styles.overviewText}>{projectData.overview}</Text>
        </View>

        {/* How to Participate */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How to Participate</Text>
          {projectData.participationSteps.map((step, index) => (
            <View key={index} style={styles.stepItem}>
              <View style={styles.stepIconContainer}>
                <Image
                  source={step.icon}
                  style={{ width: 25, height: 25, resizeMode: 'contain' }}
                />
              </View>
              <View style={styles.stepTextContainer}>
                <Text style={styles.stepTitle}>
                  {step.step}. {step.title}
                </Text>
                <Text style={styles.stepDescription}>{step.description}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Project Timeline */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Project Timeline</Text>
          {projectData.timeline.map((item, index) => (
            <View key={index} style={styles.timelineItem}>
              <View style={styles.timelineIconContainer}>
                <Image
                  source={item.icon}
                  style={{ width: 27, height: 27, resizeMode: 'contain' }}
                />
              </View>
              <View style={styles.timelineTextContainer}>
                <Text style={styles.timelineTitle}>{item.title}</Text>
                <Text style={styles.timelineDate}>{item.date}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* FAQ */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>FAQ</Text>
          {projectData.faqs.map((faq, index) => (
            <View key={index} style={styles.faqItem}>
              <TouchableOpacity
                style={styles.faqQuestion}
                onPress={() => toggleFAQ(index)}
                activeOpacity={0.7}
              >
                <Text style={styles.faqQuestionText}>{faq.question}</Text>
                <Icon
                  name={expandedFAQ === index ? 'expand-less' : 'expand-more'}
                  size={24}
                  color="#666"
                />
              </TouchableOpacity>
              {expandedFAQ === index && (
                <View style={styles.faqAnswer}>
                  <Text style={styles.faqAnswerText}>{faq.answer}</Text>
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Bottom Action Buttons */}
        <View style={styles.bottomButtonContainer}>
          <TouchableOpacity
            style={styles.joinButton}
            onPress={handleJoinProject}
            activeOpacity={0.8}
          >
            <Text style={styles.joinButtonText}>Join Project</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.learnMoreButton}
            onPress={handleLearnMore}
            activeOpacity={0.7}
          >
            <Text style={styles.learnMoreButtonText}>Learn More</Text>
          </TouchableOpacity>
        </View>
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
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Newsreader_14pt-Bold',
    color: '#0D1C0D',
    lineHeight: 23,
  },
  placeholder: {
    width: 34,
  },
  content: {
    flex: 1,
  },
  projectImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  section: {
    padding: 20,
    marginBottom: 2,
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: 'Newsreader_14pt-Bold',
    color: '#0D1C0D',
    marginBottom: 16,
    lineHeight: 28,
  },
  overviewText: {
    fontSize: 16,
    fontFamily: 'Newsreader_14pt-Regular',
    color: '#0D1C0D',
    lineHeight: 24,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  stepIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#E8F2E8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  stepTextContainer: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontFamily: 'Newsreader_14pt-Medium',
    color: '#0D1C0D',
    lineHeight: 24,
    marginBottom: 4,
  },
  stepDescription: {
    fontSize: 14,
    fontFamily: 'Newsreader_14pt-Regular',
    color: '#4D994D',
    lineHeight: 21,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  timelineIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 4,
    // backgroundColor: '#E8F5E8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  timelineTextContainer: {
    flex: 1,
  },
  timelineTitle: {
    fontSize: 16,
    fontFamily: 'Newsreader_14pt-Medium',
    color: '#0D1C0D',
    lineHeight: 24,
    marginBottom: 4,
  },
  timelineDate: {
    fontSize: 14,
    fontFamily: 'Newsreader_14pt-Regular',
    color: '#4D994D',
    lineHeight: 24,
  },
  faqItem: {
    marginBottom: 12,
  },
  faqQuestion: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#CFE8CF',
    borderRadius: 8,
  },
  faqQuestionText: {
    fontSize: 16,
    fontFamily: 'Newsreader_14pt-Medium',
    color: '#0D1C0D',
    flex: 1,
    marginRight: 12,
    lineHeight: 24,
  },
  faqAnswer: {
    paddingHorizontal: 4,
    paddingBottom: 12,
  },
  faqAnswerText: {
    fontSize: 14,
    fontFamily: 'Newsreader_14pt-Regular',
    color: '#4A9C4A',
    lineHeight: 20,
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    // borderTopWidth: 1,
    // borderTopColor: '#f0f0f0',
    marginBottom: 20,
  },
  joinButton: {
    flex: 1,
    backgroundColor: '#0FBD0F',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginRight: 60,
  },
  joinButtonText: {
    fontSize: 16,
    fontFamily: 'Newsreader_14pt-Bold',
    color: '#F7FCF7',
    lineHeight: 24,
  },
  learnMoreButton: {
    flex: 1,
    backgroundColor: '#E8F2E8',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginLeft: 50,
  },
  learnMoreButtonText: {
    fontSize: 16,
    fontFamily: 'Newsreader_14pt-Bold',
    color: '#0D1C0D',
    lineHeight: 24,
  },
});

export default ProjectDetailsScreen;
