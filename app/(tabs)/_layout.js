import { Tabs } from "expo-router";
const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ headerTitle: "Home", title: "Home" }}
      />
      <Tabs.Screen
        name="popular/[id]"
        options={{ headerTitle: "Popular", title: "Popular" }}
      />
      <Tabs.Screen
        name="topRated/[id]"
        options={{ headerTitle: "Top Rated", title: "Top Rated" }}
      />
      <Tabs.Screen
        name="upcoming/[id]"
        options={{ headerTitle: "Upcoming", title: "Upcoming" }}
      />
    </Tabs>
  );
};

export default TabsLayout;
