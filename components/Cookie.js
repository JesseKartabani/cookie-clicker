import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
  Animated,
} from "react-native";
import React, { useState } from "react";

const Cookie = () => {
  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));

  // Rotates cookie slightly on click giving it a shaking animation
  const handleAnimation = () => {
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 50, // How long cookie rotates for
      useNativeDriver: true,
    }).start(() => {
      rotateAnimation.setValue(0);
    });
  };

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "2deg"], // How much cookie rotates
  });

  const animatedStyle = {
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],
  };

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={async () => handleAnimation()}
        style={Styles.imgContainer}
      >
        <Animated.Text style={animatedStyle}>
          <Image
            style={Styles.img}
            source={{
              uri: "https://i.imgur.com/D1sOdaz.png",
            }}
          />
        </Animated.Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Cookie;

const Styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
    alignSelf: "center",
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        width: 300,
        height: 300,
      },
    }),
  },
  imgContainer: {
    ...Platform.select({
      ios: {
        marginTop: 275,
        marginLeft: 100,
        marginRight: 100,
      },
      android: {
        marginTop: 275,
        marginLeft: 100,
        marginRight: 100,
      },
      default: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      },
    }),
  },
});
