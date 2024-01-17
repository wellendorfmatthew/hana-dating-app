import React, { useState, useContext, createContext, useEffect } from "react";

const InfoContext = createContext();

const InfoProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState([5, 0]);
  const [pronouns, setPronouns] = useState([]);
  const [location, setLocation] = useState("Living In");
  const [agePreference, setAgePreference] = useState([18, 18]);
  const [distance, setDistance] = useState(0);
  const [relationshipGoal, setRelationshipGoal] = useState("");
  const [relationshipType, setRelationshipType] = useState("");
  const [sexualOrientation, setSexualOrientation] = useState("");
  const [genderIdentity, setGenderIdentity] = useState("");
  const [interests, setInterests] = useState([]);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(
    new Array(6).fill(require("../assets/insert-picture-icon.png"))
  );

  return (
    <InfoContext.Provider
      value={{
        name,
        setName,
        age,
        setAge,
        height,
        setHeight,
        pronouns,
        setPronouns,
        location,
        setLocation,
        agePreference,
        setAgePreference,
        distance,
        setDistance,
        relationshipGoal,
        setRelationshipGoal,
        relationshipType,
        setRelationshipType,
        sexualOrientation,
        setSexualOrientation,
        genderIdentity,
        setGenderIdentity,
        interests,
        setInterests,
        description,
        setDescription,
        image,
        setImage,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};

const useInfo = () => {
  return useContext(InfoContext);
};

export { InfoProvider, useInfo };
