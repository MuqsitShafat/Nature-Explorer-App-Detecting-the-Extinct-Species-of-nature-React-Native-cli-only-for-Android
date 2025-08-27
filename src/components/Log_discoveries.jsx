import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const Identify_nature = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Top image with title */}
      <View style={{ flex: 1 }}>
        <View style={styles.nature_image_view}>
          <Image
            source={require('../../assets/images/girl_with_flower.png')}
            style={{ width: '100%', height: 350 }}
          />
        </View>
        <View style={styles.title_view}>
          <Text style={styles.titleText}>Log Your Discoveries</Text>
        </View>
        {/* Description text */}
        <View style={styles.description_view}>
          <Text style={styles.descriptionText}>
            Document your observations with photos,notes and location data.
          </Text>
        </View>
      </View>
      {/* Bottom button */}
      <TouchableOpacity style={styles.buttonContainer}onPress={()=>{navigation.navigate('Connect')}}>
        <Text style={styles.buttonText}>Next</Text>
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
    marginTop: '4%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
    marginHorizontal: '1%',
  },
  descriptionText: {
    fontSize: 17,
    textAlign: 'center',
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
