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

const CitizenScienceScreen = ({ navigation }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Birds', 'Plants', 'Insects'];

  const projects = [
    {
      id: 1,
      title: 'Project Monarch Watch',
      description: 'Help track monarch butterfly populations and migration patterns.',
      image: require('../../assets/images/monarch_butterfly_citizen.png'), // Replace with your image path
      category: 'Insects'
    },
    {
      id: 2,
      title: 'Project FeederWatch',
      description: 'Contribute to a long-term study of winter bird populations at feeders.',
      image: require('../../assets/images/bird_feeder.png'), // Replace with your image path
      category: 'Birds'
    },
    {
      id: 3,
      title: 'The Great Sunflower Project',
      description: 'Monitor pollinator activity and plant health in your area.',
      image: require('../../assets/images/sunflower.png'), // Replace with your image path
      category: 'Plants'
    },
    {
      id: 4,
      title: 'Lost Ladybug Project',
      description: 'Search for rare ladybug species and help conserve biodiversity.',
      image: require('../../assets/images/ladybug.png'), // Replace with your image path
      category: 'Insects'
    }
  ];

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleFilterPress = (filter) => {
    setSelectedFilter(filter);
  };

  const handleProjectPress = (project) => {
    console.log('Project pressed:', project.title);
    // navigation.navigate('ProjectDetailScreen', { project });
  };

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-back" size={26} color="#141414" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Citizen Science</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Filter Tabs */}
      <View style={styles.filterContainer}>
        {filters.map((filter, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.filterTab,
              selectedFilter === filter && styles.activeFilterTab
            ]}
            onPress={() => handleFilterPress(filter)}
            activeOpacity={0.7}
          >
            <Text style={[
              styles.filterText,
              selectedFilter === filter && styles.activeFilterText
            ]}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Projects Grid */}
        <View style={styles.projectsContainer}>
          {filteredProjects.map((project, index) => (
            <TouchableOpacity
              key={project.id}
              style={[
                styles.projectCard,
                index % 2 === 0 ? styles.leftCard : styles.rightCard
              ]}
              onPress={() => handleProjectPress(project)}
              activeOpacity={0.7}
            >
              <Image source={project.image} style={styles.projectImage} />
              <View style={styles.projectContent}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectDescription}>{project.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Bottom spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
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
  backButton: { 
    padding: 5 
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Newsreader_14pt-Bold',
    color: '#0D1C0D',
    lineHeight: 23,
  },
  placeholder: { 
    width: 34 
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
  },
  filterTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: '#e9ecef',
  },
  activeFilterTab: {
    backgroundColor: '#4D994D',
  },
  filterText: {
    fontSize: 14,
    fontFamily: 'Newsreader_14pt-Medium',
    color: '#0D1C0D',
    lineHeight: 18,
  },
  activeFilterText: {
    color: '#ffffff',
    fontFamily: 'Newsreader_14pt-Medium',
  },
  content: { 
    flex: 1,
  },
  projectsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  projectCard: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 16,
  },
  leftCard: {
    marginRight: '2%',
  },
  rightCard: {
    marginLeft: '2%',
  },
  projectImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    resizeMode: 'cover',
  },
  projectContent: {
    padding: 12,
  },
  projectTitle: {
    fontSize: 16,
    fontFamily: 'Newsreader_14pt-Medium',
    color: '#0D1C0D',
    lineHeight: 24,
    marginBottom: 6,
  },
  projectDescription: {
    fontSize: 12,
    fontFamily: 'Newsreader_14pt-Regular',
    color: '#4D994D',
    lineHeight: 16,
  },
  bottomSpacing: { 
    height: 20 
  },
});

export default CitizenScienceScreen;