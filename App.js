import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Signup from "./Signup";
import Login from "./Login";
import BasicInfo from "./Forms/BasicInfo";
import RelationshipInfo from "./Forms/RelationshipInfo";
import InterestsInfo from "./Forms/InterestsInfo";
import PhotosInfo from "./Forms/PhotosInfo";
import Matching from "./Forms/Matching";
import Messages from "./Forms/Messages";
import Profile from "./Forms/Profile";
import PreferencesInfo from "./Forms/PreferencesInfo";
import HeightInfo from "./Forms/HeightInfo";
import PronounsInfo from "./Forms/PronounsInfo";
import RelationshipGoalInfo from "./Forms/RelationshipGoalInfo";
import RelationshipTypeInfo from "./Forms/RelationshipTypeInfo";
import SexualOrientationInfo from "./Forms/SexualOrientationInfo";
import GenderIdentityInfo from "./Forms/GenderIdentityInfo";
import { InfoProvider } from "./contexts/InfoContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <InfoProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="BasicInfo" component={BasicInfo} />
          <Stack.Screen name="RelationshipInfo" component={RelationshipInfo} />
          <Stack.Screen name="InterestsInfo" component={InterestsInfo} />
          <Stack.Screen name="PhotosInfo" component={PhotosInfo} />
          <Stack.Screen name="Matching" component={Matching} />
          <Stack.Screen name="Messages" component={Messages} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="PreferencesInfo" component={PreferencesInfo} />
          <Stack.Screen name="HeightInfo" component={HeightInfo} />
          <Stack.Screen name="PronounsInfo" component={PronounsInfo} />
          <Stack.Screen
            name="RelationshipGoalInfo"
            component={RelationshipGoalInfo}
          />
          <Stack.Screen
            name="RelationshipTypeInfo"
            component={RelationshipTypeInfo}
          />
          <Stack.Screen
            name="SexualOrientationInfo"
            component={SexualOrientationInfo}
          />
          <Stack.Screen
            name="GenderIdentityInfo"
            component={GenderIdentityInfo}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </InfoProvider>
  );
}
