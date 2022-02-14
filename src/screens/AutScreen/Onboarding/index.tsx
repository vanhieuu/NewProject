import { Animated, Dimensions, StyleSheet } from "react-native";
import React from "react";
import { Button, Image, Text, View } from "react-native-ui-lib";

const { width, height } = Dimensions.get("window");

const Onboarding = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const rocketAnimation = React.useRef(new Animated.Value(height)).current;
  const cloudAnimation = React.useRef(new Animated.Value(0)).current;
  const [show, setShow] = React.useState(false);
  const cloudWindAnimation = React.useRef(
    new Animated.Value(width / 2)
  ).current;
  const ModalAnimation = React.useRef(new Animated.Value(height)).current;

  const duration = 2500;

  React.useEffect(() => {
    Animated.timing(scrollY, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  });
  React.useEffect(() => {
    Animated.sequence([
      Animated.timing(rocketAnimation, {
        toValue: height,
        duration: duration,
        useNativeDriver: true,
      }),

      Animated.timing(rocketAnimation, {
        toValue: 0,
        duration: duration * 2,
        useNativeDriver: true,
      }),
      Animated.timing(rocketAnimation, {
        toValue: -height,
        duration: duration * 2,
        useNativeDriver: true,
      }),
    ]).start();
  }, [rocketAnimation]);
  React.useEffect(() => {
    Animated.sequence([
      Animated.timing(ModalAnimation, {
        toValue: height,
        duration: duration,
        useNativeDriver: true,
      }),

      Animated.timing(ModalAnimation, {
        toValue: 0,
        duration: duration * 2,
        useNativeDriver: true,
      }),
    ]).start();
  }, [ModalAnimation]);

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(cloudAnimation, {
        toValue: 40,
        duration: duration,
        useNativeDriver: true,
      }),

      Animated.timing(cloudWindAnimation, {
        toValue: -40,
        duration: duration,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);
  React.useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, duration * 2);
  });
  return (
    <View flex style={{ backgroundColor: "rgba(254,251,0,1)" }}>
      <View style={{ flexDirection: "row" }}>
        <Animated.View
          style={{ transform: [{ translateX: cloudAnimation }], flex: 1 }}
        >
          <Image
            source={require("../../../../assets/Cloud3zap.png")}
            style={{
              width: 190,
              height: 190,
              marginTop: 111,
              marginBottom: 20,
            }}
            resizeMode="contain"
          />
        </Animated.View>

        <Animated.View
          style={{ transform: [{ translateX: cloudWindAnimation }] }}
        >
          <Image
            source={require("../../../../assets/MoonCloud.png")}
            style={{
              width: 175,
              height: 175,
              marginTop: 14,
            }}
            resizeMode="contain"
          />
        </Animated.View>
      </View>
      <Animated.View
        style={{
          transform: [{ translateY: rocketAnimation }],
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../../../assets/Rocket.png")}
          style={{
            width: 150,
            height: 150,
            // aspectRatio:16/9,
            marginBottom: 20,
            backgroundColor:'red',
            alignItems:'center'
          }}
          resizeMode="contain"
        />
      </Animated.View>

      <Animated.View
        style={{
          transform: [{ translateY: ModalAnimation }],
          flex: 1,
          borderTopLeftRadius: 75,
          borderTopRightRadius: 75,
          backgroundColor: "#fff",
          height: height ,
          padding: 50,
        }}
      >
        {!!show && (
          <Animated.View
            style={{
              transform: [{ translateY: ModalAnimation }],
              backgroundColor: "#fff",
              flex: 1,
              marginBottom: 20,
            }}
          >
            <View flex center>
              <Text
                center
                style={{
                  fontWeight: "bold",
                  fontSize: 25,
                  lineHeight: 26,
                }}
              >
                Cùng tìm hiểu lịch sử qua Tiếng Anh
              </Text>
              <Text
                center
                style={{
                  fontWeight: "500",
                  fontSize: 16,
                  lineHeight: 18,
                }}
              >
                The average company forecasts a growth 178% in revenues for
                their first year, 100% for second, and 71% for third.
              </Text>
            </View>
          </Animated.View>
        )}
      </Animated.View>
      {!!show && (
        <Animated.View
          style={{
            marginHorizontal:20,
            transform: [{ translateY: ModalAnimation }],
          }}
        >
          <Button
            label={"Press"}
            size={Button.sizes.large}
            backgroundColor="rgba(254,251,0,1)"
            borderRadius={3}
            labelStyle={{fontWeight: '500',color:'#000'}}
          />
        </Animated.View>
      )}
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
