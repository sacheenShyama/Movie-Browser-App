import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Popular from "./screens/Popular";
import TopRated from "./screens/TopRated";
import Upcoming from "./screens/Upcoming";
import Favorites from "./screens/Favorites";
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
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
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            headerTitleAlign: "center",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
