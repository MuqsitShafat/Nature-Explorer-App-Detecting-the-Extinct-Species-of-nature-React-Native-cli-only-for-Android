import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    navigation.navigate('HomeJournalScreen');
    console.log('Login pressed');
  };

  const handleBackPress = () => {
    // Handle back navigation
    console.log('Back pressed');
  };

  const handleForgotPassword = () => {
    // Handle forgot password navigation
    console.log('Forgot password pressed');
  };

  const handleSignUp = () => {
    // Handle sign up navigation
    navigation.navigate('Register');
    console.log('Sign up pressed');
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Form Container */}
      <View style={styles.formContainer}>
        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            placeholderTextColor="#4F946B"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
            placeholderTextColor="#4F946B"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>

        {/* Forgot Password Link */}
        <TouchableOpacity
          onPress={handleForgotPassword}
          style={styles.forgotPasswordContainer}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <TouchableOpacity onPress={handleSignUp} style={styles.signUpContainer}>
          <Text style={styles.signUpText}>
            Don't have an account?{' '}
            <Text style={styles.signUpLink}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  inputContainer: {
    marginBottom: 25,
  },
  label: {
    fontSize: 17,
    fontFamily: 'PlusJakartaSans-Medium',
    color: '#000',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: '#E8F2ED',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 16,
    color: '#4F946B',
    borderWidth: 0,
    fontFamily: 'PlusJakartaSans-Regular',
  },
  forgotPasswordContainer: {
    alignItems: 'flex-start',
    marginTop: 5,
  },
  forgotPasswordText: {
    fontSize: 15,
    color: '#4F946B',
    fontFamily: 'PlusJakartaSans-Medium',
  },
  bottomSection: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  loginButton: {
    backgroundColor: '#179C4D',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#F7FAFA',
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  signUpContainer: {
    alignItems: 'center',
  },
  signUpText: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 15,
    color: '#4F946B',
    textAlign: 'center',
  },
  signUpLink: {
    color: '#4F946B',
    fontFamily: 'PlusJakartaSans-Bold',
  },
});

export default LoginScreen;
