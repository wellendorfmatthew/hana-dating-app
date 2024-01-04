import React, { useState, useContext, createContext, useEffect } from "react";

const InfoContext = createContext();

const InfoProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState([5, 0]);
  const [pronouns, setPronouns] = useState([]);
  const [location, setLocation] = useState("");
  const [agePreference, setAgePreference] = useState([]);
  const [distance, setDistance] = useState("");
  const [relationshipGoal, setRelationshipGoal] = useState("");
  const [relationshipType, setRelationshipType] = useState("");
  const [sexualOrientation, setSexualOrientation] = useState("");
  const [genderIdentity, setGenderIdentity] = useState("");
  const [interests, setInterests] = useState([]);
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState([]);

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
        photos,
        setPhotos,
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
