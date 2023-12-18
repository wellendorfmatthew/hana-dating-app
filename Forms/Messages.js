import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Pressable, Platform, Image, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import getoImage from '../assets/geto.png';
import higurumaImage from '../assets/higuruma.jpg';
import ishigoriImage from '../assets/ishigori.jpg';
import takabaImage from '../assets/takaba.jpg';
import nanamiImage from '../assets/nanami.png';

export default function Messages({navigation}) {
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

    // Holds data for a user that will be displayed on the matching card
    // TODO: Need to add functionality to take info directly from backend
    const matchesData = [
        { id: 1, image: getoImage },
        { id: 2, image: higurumaImage },
        { id: 3, image: ishigoriImage },
        { id: 4, image: takabaImage },
    ]

    // Holds data for a user that will be displayed on the matching card
    // TODO: Need to add functionality to take info directly from backend
    const messagesData = [
        {id: 1, image: getoImage, message: 'Lorem ipsum', name: 'Geto'},
        {id: 2, image: higurumaImage, message: 'Lorem ipsum', name: 'Higuruma'},
        {id: 3, image: ishigoriImage, message: 'Lorem ipsum', name: 'Ryu'},
        {id: 4, image: takabaImage, message: 'Lorem ipsum', name: 'Takaba'},
        {id: 5, image: nanamiImage, message: 'Lorem ipsum', name: 'Nanami'},
    ]

    return (
      <LinearGradient 
        colors={['rgba(128,20,234,1)', 'rgba(211,183,232,1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}>
        <View style={styles.messagesBox}>
            <Text style={styles.miniMatchesHeaders}>Matches</Text>
            <View style={styles.matchingPicturesView}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    data={matchesData}
                    renderItem={({item, index}) => (
                        <Image style={styles.matchingPictures} source={item.image} />
                    )}
                />
            </View>
            <Text style={styles.miniMatchesHeaders}>Messages</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={messagesData}
                renderItem={({item, index}) => (
                    <View style={styles.matchingMessagesView}>
                        <Image style={styles.matchingPicture} source={item.image} />
                        <View style={styles.messageView}>
                            <Text style={styles.messageName}>{item.name}</Text>
                            <Text style={styles.messageText}>{item.message}</Text>
                        </View>
                    </View>
                )}
            />
        </View>     
        <View style={styles.downNav}>
            <Pressable onPress={() => navigation.navigate("Messages")}>
                <Image style={styles.navIcon} source={require('../assets/speech-bubble.png')}/>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Matching")}>
                <Image style={styles.navIcon} source={require('../assets/rose.png')}/>
            </Pressable>
            <Pressable>
                <Image style={styles.navIcon} source={require('../assets/user.png')}/>
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
    mainbox: {
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      width: 340,
      height: 680,
      borderRadius: 20
    },
    messagesBox: {
      alignItems: 'flex-start',
      backgroundColor: '#FFFFFF',
      width: 340,
      height: 680,
      borderRadius: 20,
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
    downNav: {
        flexDirection: 'row',
        width: 340,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20
    },
    navIcon: {
        width: 60,
        height: 60
    },
    userImage: {
        width: 300,
        height: 300,
        marginTop: 20
    },
    nameText: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    distanceText: {
        fontSize: 20,
    },
    userBox: {
        width: 300,
        justifyContent: 'flex-start'
    },
    descriptionView: {
        borderTopWidth: 2,
        marginTop: 10
    },
    matchingIconsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    matchingIcons: {
        height: 70,
        width: 70,
        marginRight: 10,
        marginLeft: 10
    },
    infoViews: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 20,
        borderWidth: 2,
        alignItems: 'center',
        marginBottom: 5,
        marginTop: 5,
        marginRight: 5
    },
    interestsView: {
        borderTopWidth: 2,
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    interestText: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    miniHeaders: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    miniMatchesHeaders: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20
    },
    sectionView: {
        marginTop: 10,
        borderTopWidth: 2
    },
    innerSectionView: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    matchingPictures: {
        height: 150,
        width: 150,
        marginLeft: 10,
        marginRight: 10
    },
    matchingPicture: {
        height: 75,
        width: 75,
    },
    matchingPicturesView: {
        height: 150,
        width: 340,
    },
    matchingMessagesView: {
        height: 75,
        width: 340,
        flexDirection: 'row',
        marginBottom: 15,
    },
    messageView: {
        height: 75,
        width: 265,
        borderWidth: 2,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        justifyContent: 'space-between'
    },
    messageName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    messageText: {
        fontSize: 15
    }
  });
  