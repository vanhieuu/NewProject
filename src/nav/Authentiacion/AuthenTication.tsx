import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../../screens/AutScreen/SignIn";
import SignUp from "../../screens/AutScreen/SignUp";
import Onboarding from "../../screens/AutScreen/Onboarding";

export type AuthStackParamList = {
  Onboarding: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthenTication = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default AuthenTication;

const styles = StyleSheet.create({});
