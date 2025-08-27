import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Alert,
  Share,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const JournalEntryScreen = ({ navigation}) => {
  // This would normally come from route.params
  const entryData = {
    id: 1,
    title: 'Exploring the Redwood Forest',
    date: 'July 15, 2024',
    image: require('../../assets/images/redwood_forest.png'), // Replace with your image path
    content: `Today, I ventured into the Redwood National Park, a place of towering giants and serene beauty. The air was cool and damp, filled with the scent of pine and damp earth. As I walked among the redwoods, I felt dwarfed by their immense size, their branches reaching towards the sky like ancient guardians. The sunlight filtered through the canopy, creating a magical play of light and shadow on the forest floor. I spotted a variety of ferns and mosses, thriving in the understory, and heard the distant calls of birds echoing through the trees. It was a truly awe-inspiring experience, connecting me to the timelessness of nature.`,
  };

  const handleBackPress = () => {
    navigation.navigate('Log',{screen:'LogObservationScreen'});
  };

  const handleEditPress = () => {
    console.log('Edit journal entry pressed');
    // navigation.navigate('EditJournalScreen', { entry: entryData });
  };
  
  const handleSharePress = async () => {
    // try {
    //   const result = await Share.share({
    //     message: `${entryData.title}\n\n${entryData.content}\n\n- Journal Entry from ${entryData.date}`,
    //     title: entryData.title,
    //   });
      
    //   if (result.action === Share.sharedAction) {
    //     console.log('Journal entry shared successfully');
    //   }
    // } catch (error) {
    //   console.error('Error sharing journal entry:', error);
    //   Alert.alert('Error', 'Failed to share journal entry. Please try again.');
    // }
    navigation.navigate('ExploreWorldSpeciesMaps')
  };

  const handleDeletePress = () => {
    Alert.alert(
      'Delete Entry',
      'Are you sure you want to delete this journal entry? This action cannot be undone.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            console.log('Deleting journal entry:', entryData.id);
            // Handle delete logic here
            navigation.goBack();
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Icon name="arrow-back" size={26} color="#141414" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Journal Entry</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Entry Title and Date */}
        <View style={styles.entryHeader}>
          <Text style={styles.entryTitle}>{entryData.title}</Text>
          <Text style={styles.entryDate}>{entryData.date}</Text>
        </View>

        {/* Entry Image */}
        <Image source={entryData.image} style={styles.entryImage} />

        {/* Entry Content */}
        <View style={styles.entryContentContainer}>
          <Text style={styles.entryContent}>{entryData.content}</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          <View style={styles.actionButtonWrapper}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleEditPress}
              activeOpacity={0.7}
            >
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={require('../../assets/images/record.png')}
                  style={{ width: 25, height: 25 }}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.actionButtonText}>Edit</Text>
          </View>

          <View style={styles.actionButtonWrapper}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleSharePress}
              activeOpacity={0.7}
            >
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={require('../../assets/images/share.png')}
                  style={{ width: 25, height: 25 }}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.actionButtonText}>Share</Text>
          </View>

          <View style={styles.actionButtonWrapper}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleDeletePress}
              activeOpacity={0.7}
            >
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={require('../../assets/images/Delete.png')}
                  style={{ width: 25, height: 25 }}
                />
              </View>
            </TouchableOpacity>
            <Text style={[styles.actionButtonText, styles.deleteButtonText]}>
              Delete
            </Text>
          </View>
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
    fontFamily: 'NotoSerif-Bold',
    color: '#0D1C0D',
  },
  placeholder: {
    width: 34,
  },
  content: {
    flex: 1,
  },
  entryHeader: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  entryTitle: {
    fontSize: 22,
    fontFamily: 'NotoSerif-Bold',
    color: '#0D1C0D',
    lineHeight: 28,
    marginBottom: 8,
  },
  entryDate: {
    fontSize: 14,
    fontFamily: 'NotoSerif-Regular',
    color: '#4D994D',
    lineHeight: 21,
  },
  entryImage: {
    width: '100%',
    height: 260,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  entryContentContainer: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  entryContent: {
    fontSize: 16,
    fontFamily: 'NotoSerif-Regular',
    color: '#0D1C0D',
    lineHeight: 24,
  },
  actionButtonsContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  actionButtonWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  actionButton: {
    alignItems: 'center',
    backgroundColor: '#E8F2E8',
    width: 50,
    height: 50,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonText: {
    fontSize: 14,
    fontFamily: 'NotoSerif-Medium',
    color: '#0D1C0D',
    marginTop: 8,
    lineHeight: 21,
  },

});

export default JournalEntryScreen;