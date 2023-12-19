import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Pressable, Platform, Image, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';

export default function Matching({navigation}) {
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

    // TODO: Need to get rid of when backend data is ready
    const dummyText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique explicabo distinctio nemo necessitatibus. Ea nisi error alias fuga modi minima cumque tempore suscipit fugit pariatur, a voluptas nulla molestias necessitatibus."

    // Holds data for a user that will be displayed on the matching card
    // TODO: Need to add functionality to take info directly from backend
    const userData = [
        { id: 1, name: 'Gojo', age: 28, distance: 20, description: dummyText, identity: 'Male', orientation: 'Gay', type: 'Monogamy', goal: 'Marriage', pronouns: 'He/Him',
          interests: ['Being strong', 'Showing off', 'Shopping']  }
    ]


  
    return (
      <LinearGradient 
        colors={['rgba(128,20,234,1)', 'rgba(211,183,232,1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}>
        <View style={styles.mainbox}>
            <Image style={styles.userImage} source={require('../assets/gojo.jpg')}/>
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={userData}
                keyExtractor={(item) => item.id}
                renderItem={({item, index}) => (
                    <View style={styles.userBox}>
                        <Text style={styles.nameText}>{item.name} {item.age}</Text>
                        <Text style={styles.distanceText}>{item.pronouns}</Text>
                        <Text style={styles.distanceText}>{item.distance} miles away</Text>
                        <View style={styles.descriptionView}>
                            <Text style={styles.miniHeaders}>About Me</Text>
                            <Text style={styles.distanceText}>{item.description}</Text>
                        </View>
                        <View style={styles.sectionView}>
                            <Text style={styles.miniHeaders}>Sexual Orientation</Text>
                            <View style={styles.innerSectionView}>
                                <View style={styles.infoViews}>
                                    <Text style={styles.interestText}>{item.orientation}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.sectionView}>
                            <Text style={styles.miniHeaders}>Gender Identity</Text>
                            <View style={styles.innerSectionView}>
                                <View style={styles.infoViews}>
                                    <Text style={styles.interestText}>{item.identity}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.sectionView}>
                            <Text style={styles.miniHeaders}>Relationship Type</Text>
                            <View style={styles.innerSectionView}>
                                <View style={styles.infoViews}>
                                    <Text style={styles.interestText}>{item.type}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.sectionView}>
                            <Text style={styles.miniHeaders}>Relationship Goal</Text>
                            <View style={styles.innerSectionView}>
                                <View style={styles.infoViews}>
                                    <Text style={styles.interestText}>{item.goal}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.sectionView}>
                            <Text style={styles.miniHeaders}>Interests</Text>
                            <View style={styles.innerSectionView}>
                                {item.interests.map((interest) => {
                                    return (<View style={styles.infoViews}>
                                                <Text style={styles.interestText}>{interest}</Text>
                                            </View>
                                    )
                                })}
                            </View>
                        </View>
                    </View>    
                )}
            />
            <View style={styles.matchingIconsView}>
                <Image style={styles.matchingIcons} source={require('../assets/check.png')}/>
                <Image style={styles.matchingIcons} source={require('../assets/delete-button.png')}/>
            </View>
        </View>
        <View style={styles.downNav}>
            <Pressable onPress={() => navigation.navigate("Messages")}>
                <Image style={styles.navIcon} source={require('../assets/speech-bubble.png')}/>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Matching")}>
                <Image style={styles.navIcon} source={require('../assets/rose.png')}/>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Profile")}>
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
    sectionView: {
        marginTop: 10,
        borderTopWidth: 2
    },
    innerSectionView: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
  });
  