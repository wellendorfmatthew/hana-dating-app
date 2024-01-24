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
  const { email, setEmail, password, setPassword, handleLogin } = useAuth();

  const handleExistingUser = () => {
    handleLogin();
    navigation.navigate("BasicInfo");
  };

  return (
    <LinearGradient
      colors={["rgba(128,20,234,1)", "rgba(211,183,232,1)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.signinbox}>
        <Text style={styles.title}>Log In</Text>
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
          onPress={() => handleExistingUser()}
        >
          <Text style={styles.buttontext}>Log In</Text>
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
