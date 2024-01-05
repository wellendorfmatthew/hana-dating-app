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
import React, { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { useInfo } from "../contexts/InfoContext";

export default function GenderIdentityInfo({ navigation }) {
  const { genderIdentity, setGenderIdentity } = useInfo(); //Gender identities that user will add to an array to represent themselves
  const genderIdentitysList = [
    "Male",
    "Female",
    "Trans Masc",
    "Trans Femme",
    "Agender",
    "Bigender",
    "Nonbinary",
    "Genderfluid",
  ]; // Array of gender identities to choose from
  const [buttonStyleList, setButtonStyleList] = useState(
    new Array(genderIdentitysList.length).fill(styles.genderViews)
  );
  const [clickedButtonList, setClickedButtonList] = useState(
    new Array(genderIdentitysList.length).fill(false)
  ); // Determines whether a button was clicked or not

  const handleGender = (position) => {
    const newClickedButtonList = clickedButtonList.map((item, index) => {
      // Determines what button was pushed
      return position === index ? !item : item;
    });

    setClickedButtonList(newClickedButtonList);

    const newButtonStyleList = buttonStyleList.map((item, index) => {
      if (position === index) {
        if (buttonStyleList[position] === styles.genderViews) {
          setGenderIdentity(genderIdentitysList[position]);
          return styles.clickedGenderViews;
        } else {
          return styles.genderViews;
        }
      } else {
        return styles.genderViews;
      }
    });

    setButtonStyleList(newButtonStyleList);
  };

  useEffect(() => {
    console.log(genderIdentity);
  }, [genderIdentity]);

  useFocusEffect(
    React.useCallback(() => {
      const selectedTypeIndex = genderIdentitysList.indexOf(genderIdentity);
      const newButtonStyleList = buttonStyleList.map((item, index) =>
        selectedTypeIndex === index
          ? styles.clickedGenderViews
          : styles.genderViews
      );

      setClickedButtonList((prev) =>
        newButtonStyleList.map(
          (style, index) => style === styles.clickedGenderViews
        )
      );

      setButtonStyleList(newButtonStyleList);
    }, [genderIdentity])
  );

  return (
    <LinearGradient
      colors={["rgba(128,20,234,1)", "rgba(211,183,232,1)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.signinbox}>
        <Text style={styles.heightTitle}>Gender Identity</Text>
        <View style={styles.innerGenderSectionView}>
          {genderIdentitysList.map((item, index) => {
            return (
              <Pressable
                style={buttonStyleList[index]}
                onPress={() => handleGender(index)}
                key={index}
              >
                <Text style={styles.interestText}>{item}</Text>
              </Pressable>
            );
          })}
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
  innerGenderSectionView: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: "auto",
    gap: 5,
    justifyContent: "flex-start",
    width: 300,
    marginTop: 60,
    marginBottom: 60,
  },
  genderViews: {
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
  clickedGenderViews: {
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
