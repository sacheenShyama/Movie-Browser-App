import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Popular from "./screens/Popular";
import TopRated from "./screens/TopRated";
import Upcoming from "./screens/Upcoming";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons, FontAwesome6, FontAwesome } from "@expo/vector-icons";
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
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '"rgb(38 38 38)"',
          borderColor: "rgb(38 38 38)",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={24}
              color={focused ? "#E50914" : "white"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Popular"
        component={Popular}
        options={{
          tabBarShowLabel: false,
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <FontAwesome6
              name={focused ? "bars" : "bars-staggered"}
              size={24}
              color={focused ? "#E50914" : "white"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TopRated"
        component={TopRated}
        options={{
          tabBarShowLabel: false,
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name={focused ? "stop-circle" : "stop-circle-o"}
              size={24}
              color={focused ? "#E50914" : "white"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Upcoming"
        component={Upcoming}
        options={{
          tabBarShowLabel: false,
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={"bag-handle"}
              size={24}
              color={focused ? "#E50914" : "white"}
            />
          ),
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
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Search"
        component={Search}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="MovieDetail"
        component={MovieDetail}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Favorites"
        component={Favorites}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
