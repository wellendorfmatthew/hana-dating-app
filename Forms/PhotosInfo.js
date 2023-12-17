import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Pressable, Platform, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function PhotosInfo({navigation}) {
  return (
    <LinearGradient 
      colors={['rgba(128,20,234,1)', 'rgba(211,183,232,1)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}>
      <View style={styles.signinbox}>
        <Text style={styles.title}>Photos</Text>
        <View style={styles.photosView}>
          <Pressable style={styles.imageParent} onPress={() => console.log('pressed')}>
            <Image style={styles.photosIcon} source={require('../assets/insert-picture-icon.png')}/>
          </Pressable>
          <Pressable style={styles.imageParent} onPress={() => console.log('pressed')}>
            <Image style={styles.photosIcon} source={require('../assets/insert-picture-icon.png')}/>
          </Pressable>
          <Pressable style={styles.imageParent} onPress={() => console.log('pressed')}>
            <Image style={styles.photosIcon} source={require('../assets/insert-picture-icon.png')}/>
          </Pressable>
        </View>
        <View style={styles.photosView}>
          <Pressable style={styles.imageParent} onPress={() => console.log('pressed')}>
            <Image style={styles.photosIcon} source={require('../assets/insert-picture-icon.png')}/>
          </Pressable>
          <Pressable style={styles.imageParent} onPress={() => console.log('pressed')}>
            <Image style={styles.photosIcon} source={require('../assets/insert-picture-icon.png')}/>
          </Pressable>
          <Pressable style={styles.imageParent} onPress={() => console.log('pressed')}>
            <Image style={styles.photosIcon} source={require('../assets/insert-picture-icon.png')}/>
          </Pressable>
        </View>
        <Pressable title="Sign Up" style={styles.nextButton} onPress={() => navigation.navigate("InterestsInfo")}>
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
  title: {
    fontSize: 40,
    marginTop: 60
  },
  phonenumber: {
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
    width: 280,
    marginTop: 80,
    marginBottom: 40,
    fontSize: 30,
    color: '#000000'
  },
  password: {
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
    width: 280,
    marginBottom: 40,
    fontSize: 30,
    color: '#000000'
  },
  nextButton: {
    width: 200,
    height: 60,
    backgroundColor: 'rgba(128,20,234,1)',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  buttontext: {
    fontWeight: 'bold',
    fontSize: 20
  },
  buttonIcon: {
    width: 40,
    height: 40
  },
  photosIcon: {
    width: 100,
    height: 100
  },
  photosView: {
    flexDirection: 'row'
  },
  imageParent: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});
