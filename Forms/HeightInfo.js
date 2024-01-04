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

export default function HeightInfo({ navigation }) {
  const { height, setHeight } = useInfo();

  return (
    <LinearGradient
      colors={["rgba(128,20,234,1)", "rgba(211,183,232,1)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.signinbox}>
        <Text style={styles.heightTitle}>Height</Text>
        <View style={styles.heightPickers}>
          <Picker
            selectedValue={height[0]}
            onValueChange={(value) => setHeight([value, height[1]])}
            style={styles.picker}
          >
            {Array.from({ length: 12 }, (_, index) => (
              <Picker.Item
                label={`${index + 0}'`}
                value={index + 0}
                key={index}
              />
            ))}
          </Picker>
          <Picker
            selectedValue={height[1]}
            onValueChange={(value) => setHeight([height[0], value])}
            style={styles.picker}
          >
            {Array.from({ length: 12 }, (_, index) => (
              <Picker.Item
                label={`${index + 0}"`}
                value={index + 0}
                key={index}
              />
            ))}
          </Picker>
        </View>
        <Pressable
          title="Sign Up"
          style={styles.signupbutton}
          onPress={() => navigation.navigate("BasicInfo")}
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
});
