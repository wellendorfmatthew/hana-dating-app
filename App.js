import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Signup from "./Signup";
import Login from "./Login";
import BasicInfo from "./Forms/BasicInfo";
import RelationshipInfo from "./Forms/RelationshipInfo";
import InterestsInfo from "./Forms/InterestsInfo";
import PhotosInfo from "./Forms/PhotosInfo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='BasicInfo' component={BasicInfo} />
        <Stack.Screen name='RelationshipInfo' component={RelationshipInfo} />
        <Stack.Screen name='InterestsInfo' component={InterestsInfo} />
        <Stack.Screen name='PhotosInfo' component={PhotosInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
