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
import { useInfo } from "../contexts/InfoContext";
import Slider from "@react-native-community/slider";
import * as Location from "expo-location";

export default function PreferencesInfo({ navigation }) {
  const { location, setLocation, distance, setDistance } = useInfo(); // Sets the users city and state(region) name
  const [fromAge, setFromAge] = useState(18);
  const [toAge, setToAge] = useState(18);

  const getLocationInfo = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.log("Permission not granted");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let reverseGeocode = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      setLocation(`${reverseGeocode[0].city}, ${reverseGeocode[0].region}`);
    } catch (error) {
      console.error("Can't fetch location information".error);
    }
  };

  const onDistanceChange = (value) => {
    setDistance(value);
  };

  return (
    <LinearGradient
      colors={["rgba(128,20,234,1)", "rgba(211,183,232,1)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.signinbox}>
        <Pressable
          title="Height"
          style={styles.button}
          onPress={() => getLocationInfo()}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>{location}</Text>
            <Text style={styles.icon}>{" >"}</Text>
          </View>
        </Pressable>
        <Pressable
          title="Height"
          style={styles.button}
          onPress={() => navigation.navigate("AgePreference")}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Age Preference</Text>
            <Text style={styles.icon}>{" >"}</Text>
          </View>
        </Pressable>
        <View style={styles.sliderView}>
          <Text style={styles.distancePreferenceText}>Distance Preference</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={200}
            value={distance}
            onValueChange={onDistanceChange}
            step={1}
            thumbTintColor="#e0dce0"
            minimumTrackTintColor="#7814EA"
            maximumTrackTintColor="#000000"
          />
          <Text style={styles.sliderText}>{distance} miles</Text>
        </View>
        <Pressable
          title="Sign Up"
          style={styles.signupbutton}
          onPress={() => navigation.navigate("RelationshipInfo")}
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
  button: {
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
    width: 280,
    marginBottom: 40,
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
  sliderView: {
    marginBottom: 40,
    width: 280,
  },
});
