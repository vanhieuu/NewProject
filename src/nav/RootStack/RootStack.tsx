import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthenTication from "../Authentiacion/AuthenTication";
import DrawerTab from "../Drawer/DrawerTab";
import React from "react";
export type RootStackParamList = {
  DrawerTab: undefined;
  AuthenTication: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}> 
      <>
        {isLogin  ? (
          <>
            <Stack.Screen name="AuthenTication" component={AuthenTication} />
          </>
        ) : (
          <>
            <Stack.Screen name="DrawerTab" component={DrawerTab} />
          </>
        )}
      </>
    </Stack.Navigator>
  );
};
export default RootStack;
