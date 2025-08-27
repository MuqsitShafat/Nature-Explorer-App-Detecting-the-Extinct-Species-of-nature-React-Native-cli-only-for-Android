import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* picture */}
      <View style={styles.picture}>
        <Image
          source={require('../../assets/images/Nature_Explorer.png')}
          style={{ width: '100%', height: 350 }}
        />
      </View>
      {/* title */}
      <View style={styles.title}>
        <Text style={styles.titleText}>Nature Explorer</Text>
      </View>
      {/* Description */}
      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          Discover and explore the wonders of the natural world.
        </Text>
      </View>
      {/* Get started Button */}
      <TouchableOpacity style={styles.buttonContainer} onPress={() => {navigation.navigate('Login')}}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      {/* Learn More Button */}
      <TouchableOpacity style={styles.LearnMorebuttonContainer} onPress={() => {navigation.navigate('HomeNatureAppScreen')}}>
        <Text style={styles.LearnMorebuttonText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  picture: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
  },
  title: {
    marginTop: '5%',
  },
  titleText: {
    fontSize: 32,
    fontFamily: 'PlusJakartaSans-Bold',
    marginBottom: '5%',
    textAlign: 'center',
    lineHeight: 35,
  },
  description: {
    marginTop: '4%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
    marginHorizontal: '1%',
  },
  descriptionText: {
    lineHeight: 25,
    fontSize: 17,
    textAlign: 'center',
    fontFamily: 'PlusJakartaSans-Regular',
    color: '#000',
  },
  buttonContainer: {
    backgroundColor: '#179C4D',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    marginBottom: '5%',
  },
  buttonText: {
    color: '#F7FAFA',
    fontSize: 17,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  LearnMorebuttonContainer: {
    backgroundColor: '#E8F2ED',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    marginBottom: '5%',
  },
  LearnMorebuttonText: {
    color: '#0D1C12',
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-Bold',
  },
});
export default Home;
