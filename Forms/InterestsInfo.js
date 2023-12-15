import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Pressable, Platform, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';

export default function InterestsInfo({navigation}) {
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
            <Pressable title="Height" onPress={handleHeight} style={styles.buttonTop}>
                <View style={styles.buttonContent}>
                    <Text style={styles.buttonText}>Interests</Text>
                    <Text style={styles.icon}>{' >'}</Text>
                </View>
            </Pressable>
            <Text style={styles.descriptionText}>Description</Text>
            <TextInput 
                style={styles.description}
                multiline={true}
                textAlignVertical='top'
            />
            <Pressable title="Sign Up" style={styles.signupbutton} onPress={() => navigation.navigate("RelationshipInfo")}>
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
      color: '#8e8e8e'
    },
    ageField: {
      borderBottomColor: "#000000",
      borderBottomWidth: 2,
      width: 280,
      marginBottom: 40,
      fontSize: 30,
      color: '#8e8e8e'
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
    description: {
        width: 280,
        marginBottom: 6,
        height: 200,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 20,
        fontSize: 14,
        paddingHorizontal: 10
    },
    buttonTop: {
        borderBottomColor: '#000000',
        borderBottomWidth: 2,
        width: 280,
        marginBottom: 40,
        marginTop: 10
      },
    buttonText: {
      fontSize: 30,
    },
    descriptionText: {
        fontSize: 30,
        marginRight: 130
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
  