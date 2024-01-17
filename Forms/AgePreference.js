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
import { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { useInfo } from "../contexts/InfoContext";
import Slider from "@react-native-community/slider";

export default function AgePreference({ navigation }) {
  const { agePreference, setAgePreference } = useInfo(); // Age preferences that user will add to an array to represent themselves

  const handleAgeFrom = (value) => {
    const newAgePreference = [value, agePreference[1]];
    setAgePreference(newAgePreference);
  };

  const handleAgeTo = (value) => {
    const newAgePreference = [agePreference[0], value];
    setAgePreference(newAgePreference);
  };

  return (
    <LinearGradient
      colors={["rgba(128,20,234,1)", "rgba(211,183,232,1)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.signinbox}>
        <Text style={styles.heightTitle}>Age Preference</Text>
        <View style={styles.sliderAgeView}>
          <Text style={styles.distancePreferenceText}>Age From</Text>
          <Slider
            style={styles.slider}
            minimumValue={18}
            maximumValue={100}
            value={agePreference[0]}
            onValueChange={handleAgeFrom}
            step={1}
            thumbTintColor="#e0dce0"
            minimumTrackTintColor="#7814EA"
            maximumTrackTintColor="#000000"
          />
          <Text style={styles.sliderText}>{agePreference[0]} years</Text>
        </View>
        <View style={styles.sliderAgeView}>
          <Text style={styles.distancePreferenceText}>Age To</Text>
          <Slider
            style={styles.slider}
            minimumValue={18}
            maximumValue={100}
            value={agePreference[1]}
            onValueChange={handleAgeTo}
            step={1}
            thumbTintColor="#e0dce0"
            minimumTrackTintColor="#7814EA"
            maximumTrackTintColor="#000000"
          />
          <Text style={styles.sliderText}>{agePreference[1]} years</Text>
        </View>
        <Pressable
          title="Sign Up"
          style={styles.signupbutton}
          onPress={() => navigation.navigate("PreferencesInfo")}
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
  innerPronounSectionView: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginHorizontal: "auto",
    justifyContent: "center",
    width: 200,
    marginTop: 80,
    marginBottom: 120,
  },
  pronounsViews: {
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
  clickedPronounsViews: {
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
  distancePreferenceText: {
    fontSize: 30,
    marginBottom: 10,
  },
  sliderText: {
    fontSize: 20,
    marginBottom: 26,
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
  slider: {
    width: 280,
    marginBottom: 10,
  },
  sliderAgeView: {
    width: 280,
  },
});
