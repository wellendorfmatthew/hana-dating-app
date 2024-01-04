import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Pressable, Platform, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';

export default function BasicInfo({navigation}) {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
  
    useEffect(() => {
      console.log(phone);
    }, [phone]);
  
    useEffect(() => {
      console.log(password);
    }, [password]);
  
    const handleHeight = () => {
      console.log("Height");
    }
  
    return (
      <LinearGradient 
        colors={['rgba(128,20,234,1)', 'rgba(211,183,232,1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}>
        <View style={styles.signinbox}>
          <TextInput 
            style={[styles.displayName, Platform.OS === 'web' ? { outlineColor: 'transparent' } : null ]} 
            placeholder='Display Name' 
            //onChangeText={(value) => setPhone(value)}
          />
          <TextInput 
            style={[styles.ageField, Platform.OS === 'web' ? { outlineColor: 'transparent' } : null]} 
            placeholder='Age' 
            //onChangeText={(value) => setPassword(value)}
            keyboardType='phone-pad'
          />
          <Pressable title="Height" onPress={handleHeight} style={styles.button}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>Height</Text>
              <Text style={styles.icon}>{' >'}</Text>
            </View>
          </Pressable>
          <Pressable title="Height" style={styles.button}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>Pronouns</Text>
              <Text style={styles.icon}>{' >'}</Text>
            </View>
          </Pressable>
          <Pressable title="Sign Up" style={styles.signupbutton} onPress={() => navigation.navigate("PreferencesInfo")}>
            <Image source={require('../assets/next.png')} style={styles.buttonIcon}/>
          </Pressable>
        </View>
      </LinearGradient>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    signinbox: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      width: 340,
      height: 420,
      borderRadius: 20
    },
    displayName: {
      borderBottomColor: "#000000",
      borderBottomWidth: 2,
      width: 280,
      marginTop: 10,
      marginBottom: 40,
      fontSize: 30,
    },
    ageField: {
      borderBottomColor: "#000000",
      borderBottomWidth: 2,
      width: 280,
      marginBottom: 40,
      fontSize: 30,
    },
    signupbutton: {
      width: 200,
      height: 60,
      backgroundColor: 'rgba(128,20,234,1)',
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonIcon: {
      width: 40,
      height: 40
    },
    button: {
      borderBottomColor: '#000000',
      borderBottomWidth: 2,
      width: 280,
      marginBottom: 40,
    },
    buttonText: {
      fontSize: 30,
    },
    buttonContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    icon: {
      fontSize: 20,
      fontWeight: 'bold'
    },
  });
  