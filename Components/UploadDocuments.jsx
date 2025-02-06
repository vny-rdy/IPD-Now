import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function UploadDocuments({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Complete Your Profile</Text>
      </View>
      <Text style={styles.subtitle}>Upload Medical Documents (If Any)</Text>

      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>Upload Here</Text>
      </TouchableOpacity>

      {/* Document Options */}
      <View style={styles.documentOptions}>
        {['Prescription', 'Lab Reports', 'Medical History', 'Other Documents'].map((doc, index) => (
          <TouchableOpacity key={index} style={styles.option}>
            <Text style={styles.optionText}>{doc}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity 
        style={styles.nextButton} 
        onPress={() => navigation.navigate('NextScreen')}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#f9f9f9', 
  },
  header: {
    backgroundColor: '#004b36', 
    padding: 15,
    marginBottom: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white', 
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
  uploadButton: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#000',
    borderRadius: 10,
    padding: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
    marginLeft: 20,
    marginRight: 20,
  },
  uploadButtonText: {
    fontSize: 16,
  },
  documentOptions: {
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  option: {
    padding: 15,
    backgroundColor: '#000', 
    borderWidth: 1,
    borderColor: '#ccc', 
    borderRadius: 5,
    marginVertical: 5,
  },
  optionText: {
    fontSize: 16,
    color: 'white',
  },
  nextButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
