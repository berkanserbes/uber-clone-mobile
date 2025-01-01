import { icons } from "@/constants";
import { TabIconProps } from "@/types/type";
import { Tabs } from "expo-router";
import React from "react";
import { View, Image } from "react-native";

const TabIcon: React.FC<TabIconProps> = ({ source, focused }) => {
  return (
    <View
      className={`flex flex-row justify-center items-center rounded-full ${
        focused ? "transparent" : ""
      }`}
    >
      <View
        className={`rounded-full w-12 h-12 items-center justify-center ${
          focused ? "bg-general-400" : ""
        }`}
      >
        <Image
          source={source}
          tintColor="white"
          resizeMode="contain"
          className="h-7 w-7"
        />
      </View>
    </View>
  );
};

const Layout = () => {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#333333",
          borderRadius: 50,
          //paddingBottom: 0, // ios only
          overflow: "hidden",
          marginHorizontal: 20,
          marginBottom: 20,
          height: 70,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="rides"
        options={{
          headerShown: false,
          title: "Rides",
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.list} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          headerShown: false,
          title: "Chat",
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.chat} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.profile} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
