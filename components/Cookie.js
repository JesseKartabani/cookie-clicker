import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
  Animated,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

const Cookie = () => {
  // Animation state
  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));
  // Cookies collected state
  const [count, setCount] = useState(0);

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
      {/* Displays users collected cookies and cookies per second */}
      <Text style={Styles.cookieCount}>{count} Cookies</Text>
      <Text style={Styles.cookiesPerSecond}>passive cps</Text>

      <TouchableOpacity
        // On press we run our animation and increment cookie count +1
        onPress={async () => {
          handleAnimation();
          setCount(count + 1);
        }}
        style={Styles.cookieImgContainer}
      >
        <Animated.Text style={animatedStyle}>
          <Image
            style={Styles.cookieImg}
            source={{
              uri: "https://i.imgur.com/D1sOdaz.png",
            }}
          />
        </Animated.Text>
      </TouchableOpacity>

      {/* Cookie upgrades */}
      <Text style={Styles.upgradesTitle}>Upgrades</Text>

      <ScrollView horizontal={true}>
        {/* Upgrade image and name */}
        <TouchableOpacity>
          <Text style={Styles.upgradesSubtitles}>Cursor</Text>
          <Image
            style={Styles.upgradesImages}
            source={{
              uri: "https://i.imgur.com/zPY66CS.png",
            }}
          />
          {/* Cookie upgrade cost */}
          <Text style={Styles.cookieCostText}>
            <Image
              style={Styles.cookieCostImg}
              source={{
                uri: "https://i.imgur.com/D1sOdaz.png",
              }}
            />
            {/* Acutal cost to buy upgrade*/} 10
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>1</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cookie;

const Styles = StyleSheet.create({
  cookieCostText: {
    height: 20,
    alignSelf: "center",
    backgroundColor: "red",
    ...Platform.select({
      ios: {},
      android: {},
      default: {},
    }),
  },

  cookieCostImg: {
    height: 15,
    width: 15,
    ...Platform.select({
      ios: {},
      android: {},
      default: {},
    }),
  },

  upgradesSubtitles: {
    textAlign: "center",
    fontWeight: "500",
    marginTop: 10,
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        fontSize: "110%",
      },
    }),
  },
  upgradesImages: {
    height: 100,
    width: 100,
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        height: 150,
        width: 150,
      },
    }),
  },
  upgradesTitle: {
    textAlign: "center",
    fontWeight: "bold",
    ...Platform.select({
      ios: {
        fontSize: 20,
        marginTop: 140,
      },
      android: {
        fontSize: 20,
        marginTop: 140,
      },
      default: {
        fontSize: "200%",
      },
    }),
  },
  cookiesPerSecond: {
    textAlign: "center",
    ...Platform.select({
      ios: {
        //backgroundColor: "red",
        fontSize: 20,
      },
      android: {
        fontSize: 20,
      },
      default: {
        fontSize: "110%",
      },
    }),
  },
  cookieCount: {
    textAlign: "center",
    ...Platform.select({
      ios: {
        //backgroundColor: "red",
        marginTop: 20,
        fontSize: 35,
        fontWeight: "bold",
      },
      android: {
        marginTop: 20,
        fontSize: 35,
        fontWeight: "bold",
      },
      default: {
        paddingTop: 50,
        fontSize: "300%",
        fontWeight: "bold",
      },
    }),
  },
  cookieImg: {
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
  cookieImgContainer: {
    ...Platform.select({
      ios: {
        marginTop: 150,
        marginLeft: 100,
        marginRight: 100,
      },
      android: {
        marginTop: 150,
        marginLeft: 100,
        marginRight: 100,
      },
      default: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
      },
    }),
  },
});
