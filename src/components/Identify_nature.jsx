import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const Identify_nature = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Top image with title */}
      <View style={{ flex: 1 }}>
        <View style={styles.nature_image_view}>
          <Image
            source={require('../../assets/images/identify_nature.png')}
            style={{ width: '100%', height: 300 }}
          />
        </View>
        <View style={styles.title_view}>
          <Text style={styles.titleText}>Identify Nature Around You</Text>
        </View>
        {/* Description text */}
        <View style={styles.description_view}>
          <Text style={styles.descriptionText}>
            Use your device's camera or microphone to identify plants, animals,
            and fungi in your surroundings.
          </Text>
        </View>
      </View>
      {/* Bottom button */}
      <TouchableOpacity style={styles.buttonContainer} onPress={()=>{navigation.navigate('Log')}}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
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
    fontSize: 32,
    fontFamily: 'PlusJakartaSans-Bold',
    marginBottom: '5%',
    textAlign: 'center',
    lineHeight: 35,
  },
  description_view: {
    marginTop: '4%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
    // marginHorizontal:'%'
  },
  descriptionText: {
    lineHeight: 25,
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-Regular',
    textAlign: 'center',
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
