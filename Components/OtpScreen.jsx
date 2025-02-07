import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, Animated } from 'react-native';
const OtpScreen = ({ onAnimationEnd }) => {
  const fadeAnim = new Animated.Value(0);
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500, 
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.Image 
        source={require('../assets/otp.png')}  
        style={[styles.image, { opacity: fadeAnim }]}
        resizeMode="contain"  
      />
      <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>IPD Now</Animated.Text>
      <Animated.View style={[styles.formContainer, { opacity: fadeAnim }]}>
        <Text style={styles.label}>OTP</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          placeholderTextColor="gray"
          keyboardType="numeric"
        />
      </Animated.View>
      <Animated.View style={[styles.buttonContainer, { opacity: fadeAnim }]}>
        <TouchableOpacity style={styles.button} onPress={onAnimationEnd}>
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,  
    justifyContent: 'space-between', 
    alignItems: 'center',
    backgroundColor: '#ffffff', 
    paddingVertical: 40, // Added padding to adjust content positioning
  },
  image: {
    width: 400,
    height: 400,
    marginTop: -30, // Moves the image slightly up
  },
  title: {
    fontSize: 40, // Increased size
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black', 
    marginTop: -40, // Adjusted spacing
    marginBottom: 40, // Space between title and input field
  },
  formContainer: {
    width: '100%',
    marginBottom: 0, // Increased space between input and button
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 18,
    color: '#000',
    marginBottom: 5,
    marginLeft: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 0,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: -20, // Pushes button to the bottom
  },
  button: {
    width: '100%',          
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default OtpScreen;