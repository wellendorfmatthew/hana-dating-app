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

export default function RelationshipGoalInfo({ navigation }) {
  const { relationshipGoal, setRelationshipGoal } = useInfo(); // Relationship goals that user will add to an array to represent themselves
  const [buttonStyleList, setButtonStyleList] = useState(
    new Array(6).fill(styles.goalViews)
  );
  const [clickedButtonList, setClickedButtonList] = useState(
    new Array(6).fill(false)
  ); // Determines whether a button was clicked or not
  const relationshipGoalsList = [
    "Long term",
    "Short term",
    "Hookup",
    "Friends",
  ]; // Array of relationship goals to choose from

  const handleGoals = (position) => {
    const newClickedButtonList = clickedButtonList.map((item, index) => {
      // Determines what button was pushed
      return position === index ? !item : item;
    });

    setClickedButtonList(newClickedButtonList);

    const newButtonStyleList = buttonStyleList.map((item, index) => {
      if (position === index) {
        if (buttonStyleList[position] === styles.goalViews) {
          setRelationshipGoal(relationshipGoalsList[position]);
          return styles.clickedGoalViews;
        } else {
          return styles.goalViews;
        }
      } else {
        return styles.goalViews;
      }
    });

    setButtonStyleList(newButtonStyleList);
  };

  useEffect(() => {
    console.log(relationshipGoal);
  }, [relationshipGoal]);

  useFocusEffect(
    React.useCallback(() => {
      const selectedGoalIndex = relationshipGoalsList.indexOf(relationshipGoal);
      const newButtonStyleList = buttonStyleList.map((item, index) =>
        selectedGoalIndex === index ? styles.clickedGoalViews : styles.goalViews
      );

      setClickedButtonList((prev) =>
        newButtonStyleList.map(
          (style, index) => style === styles.clickedGoalViews
        )
      );

      setButtonStyleList(newButtonStyleList);
    }, [relationshipGoal])
  );

  return (
    <LinearGradient
      colors={["rgba(128,20,234,1)", "rgba(211,183,232,1)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.signinbox}>
        <Text style={styles.heightTitle}>Relationship Goal</Text>
        <View style={styles.innerGoalSectionView}>
          {relationshipGoalsList.map((item, index) => {
            return (
              <Pressable
                style={buttonStyleList[index]}
                onPress={() => handleGoals(index)}
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
  innerGoalSectionView: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: "auto",
    gap: 5,
    justifyContent: "flex-start",
    width: 300,
    marginTop: 80,
    marginBottom: 120,
  },
  goalViews: {
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
  clickedGoalViews: {
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
