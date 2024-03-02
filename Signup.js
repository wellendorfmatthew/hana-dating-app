import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { useAuth } from "./contexts/AuthContext";

export default function Signup({ navigation }) {
  const { email, setEmail, password, setPassword, handleSignup } = useAuth();

  const handleNewUser = async () => {
    navigation.navigate("BasicInfo");
    // try {
    //   const result = await handleSignup();
    //   if (result === true) {
    //     navigation.navigate("BasicInfo");
    //     return;
    //   } else {
    //     console.log(result);
    //     console.log(result.code);
    //     throw new Error(result.code);
    //   }
    // } catch (error) {
    //   console.log(error);
    //   if (error.message === "auth/email-already-in-use") {
    //     console.log("Email already associated with an account");
    //     return;
    //   } else if (error.message === "auth/invalid-email") {
    //     console.log("Invalid email please try again");
    //     return;
    //   } else if (error.message === "auth/weak-password") {
    //     console.log(
    //       "Password must contain one special, lower, upper, and numeric character"
    //     );
    //     return;
    //   } else {
    //     console.log("Unable to create account please try again");
    //     return;
    //   }
    // }
  };

  return (
    <LinearGradient
      colors={["rgba(128,20,234,1)", "rgba(211,183,232,1)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.signinbox}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={[
            styles.phonenumber,
            Platform.OS === "web" ? { outlineColor: "transparent" } : null,
          ]}
          placeholder="Email Address"
          onChangeText={(value) => setEmail(value)}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={[
            styles.password,
            Platform.OS === "web" ? { outlineColor: "transparent" } : null,
          ]}
          placeholder="Password"
          onChangeText={(value) => setPassword(value)}
          value={password}
          secureTextEntry={true}
        />
        <Pressable
          title="Sign Up"
          style={styles.signupbutton}
          onPress={() => handleNewUser()}
        >
          <Text style={styles.buttontext}>Sign Up</Text>
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
  },
  phonenumber: {
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
    width: 280,
    marginTop: 80,
    marginBottom: 40,
    fontSize: 30,
    color: "#8e8e8e",
  },
  password: {
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
    marginTop: 40,
  },
  buttontext: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
