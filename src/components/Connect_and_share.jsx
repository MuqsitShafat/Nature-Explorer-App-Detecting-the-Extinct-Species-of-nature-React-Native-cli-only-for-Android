import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const Identify_nature = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Top image with title */}
      <View style={{ flex: 1 }}>
        <View style={styles.nature_image_view}>
          <Image
            source={require('../../assets/images/group_of_people.png')}
            style={{ width: '100%', height: 350 }}
          />
        </View>
        <View style={styles.title_view}>
          <Text style={styles.titleText}>Connect and Share</Text>
        </View>
        {/* Description text */}
        <View style={styles.description_view}>
          <Text style={styles.descriptionText}>
            Join a vibrant community of nature lovers. Share your observations,
            participate in forums, and contribute to citizen science projects.
          </Text>
        </View>
      </View>
      {/* Bottom button */}
      <TouchableOpacity style={styles.buttonContainer} onPress={()=>{navigation.navigate('Nature_Explorer')}}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
  },
  nature_image_view: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
  },
  title_view: {
    marginTop: '5%',
  },
  titleText: {
    fontSize: 28,
    fontFamily: 'PlusJakartaSans-Bold',
    marginBottom: '3%',
    textAlign: 'center',
    lineHeight: 35,
  },
  description_view: {
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
    marginHorizontal: '0%',
  },
  descriptionText: {
    fontSize: 17,
    textAlign: 'center',
    marginHorizontal: '2%',
    lineHeight: 25,
    fontFamily: 'PlusJakartaSans-Regular',
  },
  buttonContainer: {
    backgroundColor: '#CFBFB0',
    padding: 14,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    marginBottom: '5%',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-Bold',
  },
});
export default Identify_nature;
