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
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import getoImage from "../assets/geto.png";
import higurumaImage from "../assets/higuruma.jpg";
import ishigoriImage from "../assets/ishigori.jpg";
import takabaImage from "../assets/takaba.jpg";
import nanamiImage from "../assets/nanami.png";

export default function Profile({ navigation }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(phone);
  }, [phone]);

  useEffect(() => {
    console.log(password);
  }, [password]);

  const handleHeight = () => {
    console.log("Height");
  };

  // Holds data for a user that will be displayed on the matching card
  // TODO: Need to add functionality to take info directly from backend
  const matchesData = [
    { id: 1, image: getoImage },
    { id: 2, image: higurumaImage },
    { id: 3, image: ishigoriImage },
    { id: 4, image: takabaImage },
  ];

  // Holds data for a user that will be displayed on the matching card
  // TODO: Need to add functionality to take info directly from backend
  const messagesData = [
    { id: 1, image: getoImage, message: "Lorem ipsum", name: "Geto" },
    { id: 2, image: higurumaImage, message: "Lorem ipsum", name: "Higuruma" },
    { id: 3, image: ishigoriImage, message: "Lorem ipsum", name: "Ryu" },
    { id: 4, image: takabaImage, message: "Lorem ipsum", name: "Takaba" },
    { id: 5, image: nanamiImage, message: "Lorem ipsum", name: "Nanami" },
  ];

  return (
    <LinearGradient
      colors={["rgba(128,20,234,1)", "rgba(211,183,232,1)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.profileBox}>
        <Image
          style={styles.userImage}
          source={require("../assets/gojo.jpg")}
        />
        <ScrollView
          contentContainerStyle={styles.profileSettingsView}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.profileHeader}>Account Settings</Text>
          <Pressable title="Height" style={styles.profileField}>
            <View style={styles.profileContent}>
              <Text style={styles.profileText}>Phone Number</Text>
              <Text style={styles.icon}>{" >"}</Text>
            </View>
          </Pressable>
          <Text style={styles.profileHeader}>Basic Info</Text>
          <Pressable title="Height" style={styles.profileField}>
            <View style={styles.profileContent}>
              <Text style={styles.profileText}>Display Name</Text>
              <Text style={styles.icon}>{" >"}</Text>
            </View>
          </Pressable>
          <Pressable title="Height" style={styles.profileField}>
            <View style={styles.profileContent}>
              <Text style={styles.profileText}>Age</Text>
              <Text style={styles.icon}>{" >"}</Text>
            </View>
          </Pressable>
          <Pressable title="Height" style={styles.profileField}>
            <View style={styles.profileContent}>
              <Text style={styles.profileText}>Height</Text>
              <Text style={styles.icon}>{" >"}</Text>
            </View>
          </Pressable>
          <Pressable title="Height" style={styles.profileField}>
            <View style={styles.profileContent}>
              <Text style={styles.profileText}>Pronouns</Text>
              <Text style={styles.icon}>{" >"}</Text>
            </View>
          </Pressable>
          <Text style={styles.profileHeader}>Relationship Info</Text>
          <Pressable title="Height" style={styles.profileField}>
            <View style={styles.profileContent}>
              <Text style={styles.profileText}>Relationship Goal</Text>
              <Text style={styles.icon}>{" >"}</Text>
            </View>
          </Pressable>
          <Pressable title="Height" style={styles.profileField}>
            <View style={styles.profileContent}>
              <Text style={styles.profileText}>Relationship Type</Text>
              <Text style={styles.icon}>{" >"}</Text>
            </View>
          </Pressable>
          <Text style={styles.profileHeader}>Sexual Preference</Text>
          <Pressable title="Height" style={styles.profileField}>
            <View style={styles.profileContent}>
              <Text style={styles.profileText}>Sexual Orientation</Text>
              <Text style={styles.icon}>{" >"}</Text>
            </View>
          </Pressable>
          <Text style={styles.profileHeader}>Gender Identity</Text>
          <Pressable title="Height" style={styles.profileField}>
            <View style={styles.profileContent}>
              <Text style={styles.profileText}>Gender</Text>
              <Text style={styles.icon}>{" >"}</Text>
            </View>
          </Pressable>
          <Text style={styles.profileHeader}>About Me</Text>
          <Pressable title="Height" style={styles.profileField}>
            <View style={styles.profileContent}>
              <Text style={styles.profileText}>Interests</Text>
              <Text style={styles.icon}>{" >"}</Text>
            </View>
          </Pressable>
          <Pressable title="Height" style={styles.profileField}>
            <View style={styles.profileContent}>
              <Text style={styles.profileText}>Description</Text>
              <Text style={styles.icon}>{" >"}</Text>
            </View>
          </Pressable>
        </ScrollView>
      </View>
      <View style={styles.downNav}>
        <Pressable onPress={() => navigation.navigate("Messages")}>
          <Image
            style={styles.navIcon}
            source={require("../assets/speech-bubble.png")}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Matching")}>
          <Image
            style={styles.navIcon}
            source={require("../assets/rose.png")}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Profile")}>
          <Image
            style={styles.navIcon}
            source={require("../assets/user.png")}
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
  mainbox: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    width: 340,
    height: 680,
    borderRadius: 20,
  },
  profileBox: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    width: 340,
    height: 680,
    borderRadius: 20,
    overflow: "hidden",
  },
  messagesBox: {
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
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
    color: "#8e8e8e",
  },
  ageField: {
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
    width: 280,
    marginBottom: 40,
    fontSize: 30,
    color: "#8e8e8e",
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
  profileField: {
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    width: 340,
    marginBottom: 2,
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    borderBottomColor: "#000000",
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
    paddingHorizontal: 10,
  },
  buttonTop: {
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
    width: 280,
    marginBottom: 40,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 30,
  },
  profileText: {
    fontSize: 15,
  },
  descriptionText: {
    fontSize: 30,
    marginRight: 130,
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    fontSize: 20,
    fontWeight: "bold",
  },
  downNav: {
    flexDirection: "row",
    width: 340,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  navIcon: {
    width: 60,
    height: 60,
  },
  userImage: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
  nameText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  distanceText: {
    fontSize: 20,
  },
  userBox: {
    width: 300,
    justifyContent: "flex-start",
  },
  descriptionView: {
    borderTopWidth: 2,
    marginTop: 10,
  },
  matchingIconsView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  matchingIcons: {
    height: 70,
    width: 70,
    marginRight: 10,
    marginLeft: 10,
  },
  infoViews: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 20,
    borderWidth: 2,
    alignItems: "center",
    marginBottom: 5,
    marginTop: 5,
    marginRight: 5,
  },
  interestsView: {
    borderTopWidth: 2,
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  interestText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  miniHeaders: {
    fontSize: 30,
    fontWeight: "bold",
  },
  miniMatchesHeaders: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
  },
  sectionView: {
    marginTop: 10,
    borderTopWidth: 2,
  },
  innerSectionView: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  matchingPictures: {
    height: 150,
    width: 150,
    marginLeft: 10,
    marginRight: 10,
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
    flexDirection: "row",
    marginBottom: 15,
  },
  messageView: {
    height: 75,
    width: 265,
    borderWidth: 2,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    justifyContent: "space-between",
  },
  messageName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  messageText: {
    fontSize: 15,
  },
  profileSettingsView: {
    width: 340,
    marginTop: 20,
    justifyContent: "flex-start",
  },
  profileHeader: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
