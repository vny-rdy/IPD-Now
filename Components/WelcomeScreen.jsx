import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Title Image */}
        <Image 
          source={require('../assets/logo.png')} 
          style={styles.logo} 
        />

        {/* Title Text */}
        <Text style={styles.title}>IPD Now</Text>

        {/* Subtitle Text */}
        <Text style={styles.subtitle}>
          Track and Manage Your Health Easily at One Go.
        </Text>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('NextScreen')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',  // Space out the content with the button at the bottom
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center',  // Center horizontally
  },
  logo: {
    width: 300,  // Adjust logo size as needed
    height: 300, 
    marginBottom: 40,
  },
  title: {
    fontFamily: 'inter',  
    fontSize: 60,  // Larger title text
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: 'inter',
    fontSize: 26,  // Adjust subtitle size
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
    marginRight: 20,
    marginLeft: 20
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 25,  // Rounded button
    alignItems: 'center',
    marginBottom: 30,
    alignSelf: 'center',
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
