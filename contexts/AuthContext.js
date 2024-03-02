import React, { createContext, useContext, useState } from "react";
import { firebaseConfig } from "../config";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebase = getFirestore(app);

export { firebase };
export const colRef = collection(firebase, "hana-users"); // Will be used to add documents to the users collection

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  // Create user through email and password(might change later to just include phone number)
  const handleSignup = async () => {
    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(credentials.user.email);
      console.log(credentials.user.password);
      setEmail("");
      setPassword("");
      return true;
    } catch (error) {
      return error;
    }
  };

  // Login user through email(might change later to just require phone number)
  const handleLogin = async () => {
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(credentials.user.email);
      console.log(credentials.user.password);
      setEmail("");
      setPassword("");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        console.log("Invalid email please try again");
        return;
      } else if (error.code === "auth/user-not-found") {
        console.log("Couldn't find an account associated with that email");
        return;
      } else if (error.code === "auth/wrong-password") {
        console.log("Password not associated with that email");
        return;
      } else {
        console.log("Unable to login please try again");
        return;
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        handleSignup,
        handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
