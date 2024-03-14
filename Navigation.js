import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Popular from "./screens/Popular";
import TopRated from "./screens/TopRated";
import Upcoming from "./screens/Upcoming";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Favorites from "./screens/Favorites";
import Search from "./screens/Search";
import MovieDetail from "./screens/MovieDetail";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <TabGroup /> */}
      <MyStack />
    </NavigationContainer>
  );
};

function TabGroup() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Popular"
        component={Popular}
        options={{
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="TopRated"
        component={TopRated}
        options={{
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Upcoming"
        component={Upcoming}
        options={{
          headerTitleAlign: "center",
        }}
      />
    </Tab.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabGroup"
        component={TabGroup}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
}

export default Navigation;
