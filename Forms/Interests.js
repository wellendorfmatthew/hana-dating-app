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
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { useInfo } from "../contexts/InfoContext";

export default function Interests({ navigation }) {
  const { interests, setInterests } = useInfo(); // Interests that user will add to an array to represent themselves

  // Array of interests to choose from
  const interestsList = [
    "Climate Change",
    "Road Trips",
    "Feminism",
    "Football",
    "Skiing",
    "Snowboarding",
    "Festivals",
    "Tattoos",
    "Activism",
    "Crossfit",
    "Photography",
    "Walking",
    "Aquarium",
    "Instagram",
    "K-Pop",
    "Exhibition",
    "Sports",
    "Reading",
    "Shopping",
    "Clubbing",
    "Collecting",
    "Boba",
    "Cars",
    "Badminton",
    "Rugby",
    "Boxing",
    "90's kid",
    "Self Care",
    "Yoga",
    "Basketball",
    "Poetry",
    "Meditation",
    "Sneakers",
    "Workout",
    "Hockey",
    "Skincare",
    "Languages",
    "Movies",
    "Social Media",
    "Running",
    "Gym",
    "Skateboarding",
    "Cricket",
    "Comedy",
    "Coffee",
    "Karaoke",
    "Singing",
    "Martial Arts",
    "Reggae",
    "Investing",
    "Food",
    "Skating",
    "Racing",
    "Cheerleading",
    "Choir",
    "Pilates",
    "Acting",
    "Content Creation",
    "Gaming",
    "E-Sports",
    "Cosplay",
    "Writing",
    "Painting",
    "Drawing",
    "Art",
    "Dancing",
    "Bars",
    "Cooking",
    "Alcohol",
    "Anime",
    "Manga",
    "Conventions",
    "Vlogging",
    "Streaming",
    "Travel",
    "Pole Dancing",
    "J-Pop",
    "Rock",
  ];

  const interestsData = interestsList.map((interest, index) => ({
    id: index,
    interest: interest,
  }));

  const [counter, setCounter] = useState(0); // Makes sure only 6 choices at max are selected

  const [buttonStyleList, setButtonStyleList] = useState(
    new Array(interestsList.length).fill(styles.interestsViews)
  );

  const [clickedButtonList, setClickedButtonList] = useState(
    // Determines whether a button was clicked or not
    new Array(interestsList.length).fill(false)
  );

  const handleInterests = (position, interest) => {
    const newClickedButtonList = clickedButtonList.map((item, index) => {
      return position === index ? !item : item;
    });

    let newCounter = newClickedButtonList.filter((item) => item).length;

    if (newCounter > 6) {
      newClickedButtonList[position] = false;
      newCounter -= 1;
    }

    setCounter(newCounter);
    setClickedButtonList(newClickedButtonList);

    const newButtonStyleList = buttonStyleList.map((item, index) => {
      if (position === index) {
        return newClickedButtonList[position]
          ? styles.clickedInterestsViews
          : styles.interestsViews;
      }
      return item;
    });

    setButtonStyleList(newButtonStyleList);

    if (newClickedButtonList[position]) {
      setInterests((prevInterests) => [...prevInterests, interest]);
    } else {
      setInterests((prevInterests) =>
        prevInterests.filter((p) => p !== interest)
      );
    }
  };

  useEffect(() => {
    console.log(interests);
  }, [interests]);

  useEffect(() => {
    console.log(clickedButtonList);
  }, [clickedButtonList]);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <LinearGradient
      colors={["rgba(128,20,234,1)", "rgba(211,183,232,1)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.signinbox}>
        <Text style={styles.heightTitle}>Interests</Text>
        <FlatList
          contentContainerStyle={styles.innerInterestsSectionView}
          showsVerticalScrollIndicator={false}
          data={interestsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <Pressable
              style={buttonStyleList[index]}
              onPress={() => handleInterests(index, item.interest)}
            >
              <Text style={styles.interestText}>{item.interest}</Text>
            </Pressable>
          )}
        />
        <Pressable
          title="Sign Up"
          style={styles.signupbutton}
          onPress={() => navigation.navigate("InterestsInfo")}
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
    backgroundColor: "rgba(128,20,234,1)",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonIcon: {
    width: 40,
    height: 40,
  },
  button: {
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
    width: 280,
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 30,
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    fontSize: 20,
    fontWeight: "bold",
  },
  heightTitle: {
    fontSize: 30,
  },
  heightPickers: {
    flexDirection: "row",
    gap: 50,
    marginBottom: Platform.OS === "web" ? 0 : 200, // Adjust the marginBottom as needed
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
    textAlign: "center",
  },
  picker: {
    width: 90,
    height: 90,
    // Add additional styles for the Picker component as needed
  },
  heightText: {
    fontSize: 20,
  },
  innerInterestsSectionView: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    marginHorizontal: "auto",
    justifyContent: "center",
    width: 280,
    borderWidth: 1,
    borderColor: "#000000",
    marginBottom: 20,
  },
  interestsViews: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 20,
    borderWidth: 2,
    alignItems: "center",
    marginBottom: 5,
    marginTop: 5,
  },
  clickedInterestsViews: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 20,
    borderWidth: 2,
    alignItems: "center",
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: "rgba(211,183,232,1)",
  },
  interestText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
