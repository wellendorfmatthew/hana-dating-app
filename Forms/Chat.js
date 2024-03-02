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
  SafeAreaView,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { useInfo } from "../contexts/InfoContext";
import io from "socket.io-client";
import { textRef } from "../contexts/AuthContext";
import { firebase } from "../contexts/AuthContext";
import {
  getDoc,
  collection,
  doc,
  FieldValue,
  onSnapshot,
  updateDoc,
  arrayUnion,
  getDocs,
} from "firebase/firestore";

export default function Chat() {
  const socket = io.connect("http://localhost:4000");
  const [text, onChangeText] = useState("");
  const [messages, setMessages] = useState([]);
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [sentMessages, setSentMessages] = useState([]);
  const [allMessages, setAllMessages] = useState([]);
  const textRef = collection(firebase, "texting"); // This references the collection
  const textDocRef = doc(textRef, "69"); // This references the document in the collection
  const [mess, setMess] = useState(["yo", "beep"]);
  //   useEffect(() => {
  //     // This connects to the server endpoint
  //     socket.emit("event", "yo");
  //   }, []);
  const chatMessage = async () => {
    socket.emit("event", text);
    await updateDoc(textDocRef, {
      message: arrayUnion(text),
    });
    // setMessages([...messages, text]);
    // setMessages((prev) => [...prev, receivedMessage]);
    console.log("chatmessage: ", messages);
    onChangeText("");
    console.log("Sent response", text);
    // socket.on("event", (text) => {
    //   setMessage(text);
    //   console.log("Received response", text);
    // });
  };

  useEffect(() => {
    socket.on("event", async (receivedMessage) => {
      try {
        await updateDoc(textDocRef, {
          message: arrayUnion(receivedMessage),
        });
        setMessages((prev) => [...prev, receivedMessage]);
        // setMessages((prev) => [...prev, receivedMessage]);
        console.log("update ", messages);
        console.log("Received response", receivedMessage);
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  useEffect(() => {
    const retrieveMessages = async () => {
      const snapshot = await getDoc(textDocRef);
      if (snapshot.exists()) {
        const arrayValues = snapshot.data().message;
        setMessages(arrayValues);
      }
    };
    retrieveMessages();
  }, []);

  // const updatedMessages = async () => {
  //   onSnapshot(textDocRef, (snapshot) => {
  //     if (snapshot && snapshot.docs) {
  //       snapshot.forEach((doc) => {
  //         setMessages((prev) => [...prev, doc.data()]);
  //       });
  //     }
  //   });
  // };

  useEffect(() => {
    // onSnapshot(textDocRef, (snapshot) => {
    //   if (snapshot && snapshot.docs) {
    //     const newMessages = snapshot.docs.map((doc) => doc.data());
    //     // setMessages(newMessages);
    //   }
    // });
  }, []);

  return (
    // <SafeAreaView>
    //   <TextInput
    //     style={styles.input}
    //     onChangeText={onChangeText}
    //     value={text}
    //   />
    //   <Pressable style={styles.buttonStyle} onPress={() => chatMessage()}>
    //     <Text style={styles.text}>Send Message</Text>
    //   </Pressable>
    //   {messages &&
    //     messages.map((message, index) => {
    //       return <Text key={index}>{message}</Text>;
    //     })}
    // </SafeAreaView>

    <LinearGradient
      colors={["rgba(128,20,234,1)", "rgba(211,183,232,1)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.messagesBox}>
        {/* <Text style={styles.miniMatchesHeaders}>Matches</Text> */}
        {/* <View style={styles.matchingPicturesView}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            horizontal={true}
            data={matchesData}
            renderItem={({ item, index }) => (
              <Image style={styles.matchingPictures} source={item.image} />
            )}
          />
        </View>
        <Text style={styles.miniMatchesHeaders}>Messages</Text> */}
        <FlatList
          showsVerticalScrollIndicator={false}
          // keyExtractor={(item) => item.id}
          data={mess}
          renderItem={({ item, index }) => (
            <View style={styles.chatMessageBox}>
              <View style={styles.innerChatMessageBox}>
                <Text style={styles.messageBoxText}>{item}</Text>
              </View>
            </View>
          )}
        />
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
  descriptionText: {
    fontSize: 30,
    marginRight: 130,
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
  chatMessageBox: {
    height: 50,
    backgroundColor: "rgba(128,20,234,1)",
  },
  innerChatMessageBox: {
    width: 200,
    flexWrap: "wrap",
    paddingLeft: 10,
    paddingRight: 10,
  },
  messageBoxText: {
    color: "black",
  },
});
