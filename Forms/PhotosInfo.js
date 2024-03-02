import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  Platform,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";
import { useInfo } from "../contexts/InfoContext";
import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  serverTimestamp,
  query,
  getDocs,
} from "firebase/firestore";
import { colRef } from "../contexts/AuthContext";

export default function PhotosInfo({ navigation }) {
  const {
    name,
    setName,
    age,
    setAge,
    height,
    setHeight,
    pronouns,
    setPronouns,
    location,
    setLocation,
    agePreference,
    setAgePreference,
    distance,
    setDistance,
    relationshipGoal,
    setRelationshipGoal,
    relationshipType,
    setRelationshipType,
    sexualOrientation,
    setSexualOrientation,
    genderIdentity,
    setGenderIdentity,
    interests,
    setInterests,
    description,
    setDescription,
    image,
    setImage,
  } = useInfo();

  const handleAddImage = async (position) => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      const newImage = [...image];
      newImage[position] = { uri: result.uri };
      setImage(newImage);
    }
  };

  const handleCollection = async () => {
    const addUser = await addDoc(colRef, {
      age: age,
      ageFrom: agePreference[0],
      ageTo: agePreference[1],
      description: description,
      distance: distance,
      genderIdentity: genderIdentity,
      height: height,
      images: image,
      interests: interests,
      location: location,
      name: name,
      pronouns: pronouns,
      relationshipGoal: relationshipGoal,
      relationshipType: relationshipType,
      sexualOrientation: sexualOrientation,
      createdAt: serverTimestamp(),
    });
    navigation.navigate("Matching");
  };

  return (
    <LinearGradient
      colors={["rgba(128,20,234,1)", "rgba(211,183,232,1)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.signinbox}>
        <Text style={styles.title}>Photos</Text>
        <View style={styles.photosView}>
          <Pressable
            style={styles.imageParent}
            onPress={() => handleAddImage(0)}
          >
            <Image style={styles.photosIcon} source={image[0]} />
          </Pressable>
          <Pressable
            style={styles.imageParent}
            onPress={() => handleAddImage(1)}
          >
            <Image style={styles.photosIcon} source={image[1]} />
          </Pressable>
          <Pressable
            style={styles.imageParent}
            onPress={() => handleAddImage(2)}
          >
            <Image style={styles.photosIcon} source={image[2]} />
          </Pressable>
        </View>
        <View style={styles.photosView}>
          <Pressable
            style={styles.imageParent}
            onPress={() => handleAddImage(3)}
          >
            <Image style={styles.photosIcon} source={image[3]} />
          </Pressable>
          <Pressable
            style={styles.imageParent}
            onPress={() => handleAddImage(4)}
          >
            <Image style={styles.photosIcon} source={image[4]} />
          </Pressable>
          <Pressable
            style={styles.imageParent}
            onPress={() => handleAddImage(5)}
          >
            <Image style={styles.photosIcon} source={image[5]} />
          </Pressable>
        </View>
        <Pressable
          title="Sign Up"
          style={styles.nextButton}
          onPress={() => handleCollection()}
        >
          <Image
            source={require("../assets/next.png")}
            style={styles.buttonIcon}
          />
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  signinbox: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    width: 340,
    height: 420,
    borderRadius: 20,
  },
  title: {
    fontSize: 40,
    marginTop: 60,
  },
  phonenumber: {
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
    width: 280,
    marginTop: 80,
    marginBottom: 40,
    fontSize: 30,
    color: "#000000",
  },
  password: {
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
    width: 280,
    marginBottom: 40,
    fontSize: 30,
    color: "#000000",
  },
  nextButton: {
    width: 200,
    height: 60,
    backgroundColor: "rgba(128,20,234,1)",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  buttontext: {
    fontWeight: "bold",
    fontSize: 20,
  },
  buttonIcon: {
    width: 40,
    height: 40,
  },
  photosIcon: {
    width: 100,
    height: 100,
  },
  photosView: {
    flexDirection: "row",
  },
  imageParent: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
});
