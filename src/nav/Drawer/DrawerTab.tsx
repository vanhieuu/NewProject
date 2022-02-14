import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../../screens/Drawer/Home";
import Profile from "../../screens/Drawer/Profile";

export type DrawerTabParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};
const Drawer = createDrawerNavigator<DrawerTabParamList>();


const DrawerTab = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );    
};

export default DrawerTab;

const styles = StyleSheet.create({});
