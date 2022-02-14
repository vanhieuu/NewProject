import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Image, Text, View } from "react-native-ui-lib";
import { CheckBox, Icon, Input } from "react-native-elements";
import Account from "./components/Account";
const SignIn = () => {
  const [isFocus, setIsFocus] = React.useState<boolean>(false);
  const onFocusChange = React.useCallback(() => {
    setIsFocus(true);
  }, [isFocus]);
  const [errorText, setErrorText] = React.useState("");
  const [check1, setCheck1] = React.useState(false);
  return (
    <View flex style={{ backgroundColor: "#Ffff" }}>
      <Image
        source={require("../../../../assets/logo.png")}
        style={styles.logoStyle}
        resizeMode="contain"
      />
      <View
        style={{
          backgroundColor: "#fffc00",
          borderTopLeftRadius: 65,
          borderTopRightRadius: 65,
        }}
        marginT-20
        flex
      >
        <View marginH-25 marginV-30 center row>
          <Text style={styles.welcomeText}>Chào mừng</Text>
          <Image
            source={require("../../../../assets/cap.png")}
            style={{ width: 50, height: 50 }}
            resizeMode="contain"
          />
        </View>
        <View center>
          <View
            br20
            marginT-20
            marginV-20
            marginH-20
            style={[
              styles.containerInput,
              { borderColor: isFocus ? "#000" : "#000" },
            ]}
          >
            <Input
              placeholder="Số điện thoại"
              onFocus={onFocusChange}
              inputContainerStyle={styles.inputContainer}
              inputStyle={styles.inputText}
              secureTextEntry={false}
              leftIcon={
                <Icon
                  type="font-awesome"
                  name="mobile"
                  size={20}
                  color={isFocus ? "#000" : "#000"}
                  tvParallaxProperties={undefined}
                />
              }
              errorStyle={{ color: "red" }}
              errorMessage={errorText}
            />
          </View>
          <View
            style={[
              styles.containerInput,
              { borderColor: isFocus ? "#000" : "#000" },
            ]}
          >
            <Input
              placeholder="Mật khẩu"
              onFocus={onFocusChange}
              inputContainerStyle={styles.inputContainer}
              inputStyle={styles.inputText}
              secureTextEntry
              leftIcon={
                <Icon
                  type="font-awesome"
                  name="lock"
                  size={20}
                  color={isFocus ? "#000" : "#000"}
                  tvParallaxProperties={undefined}
                />
              }
              errorStyle={{ color: "red" }}
              errorMessage={errorText}
            />
          </View>
          <View row>
            <View
              style={{
                justifyContent: "space-around",
                flex: 1,
                alignItems: "center",
              }}
              row
            >
              <View>
                <CheckBox
                  center
                  title="Nhớ mật khẩu"  
                  checked={check1}
                  onPress={() => setCheck1(!check1)}
                  containerStyle={{
                    backgroundColor: "#fffc00",
                    borderRadius: 0,
                    borderColor: "#fffc00",
                  }}
                />
              </View>
              <TouchableOpacity>
                <Text style={{ color: "#4267b2" }}>Quên mật khẩu ?</Text>
              </TouchableOpacity>
            </View>
          </View>
          {errorText != "" ? (
            <Text style={styles.errorTextStyle}>{errorText}</Text>
          ) : null}

          <View width={"90%"} center>
            <TouchableOpacity style={styles.btnLogin} activeOpacity={0.5}>
              <Text style={styles.buttonText}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text>Hoặc đăng nhập bằng</Text>
          </View>
          <View flex row>
            <Account icon={"social-google"} color={"#EA4335"} />
            <Account icon={"social-facebook"} color={"#4267b2"} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  logoStyle: {
    width: 400,
    height: 300,
    // backgroundColor: "#",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 25,
  },

  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  containerInput: {
    width: "90%",
    height: 58,
    borderRadius: 100,
    marginVertical: 10,
    borderWidth: 3.5,
  },
  inputText: {
    color: "#0779e4",
    fontWeight: "bold",
    marginLeft: 8,
    marginVertical: 0,
  },
  inputContainer: {
    borderBottomWidth: 0,
  },
  btnLogin: {
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    borderRadius: 10,
    width: "90%",
    marginVertical: 10,
    borderWidth: 0,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
