import React, { createContext, useContext, useState } from "react";
import { firebaseConfig } from "../config";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
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

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

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
    } catch (error) {
      console.log(error.message);
    }
  };

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
      console.log(error.message);
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
