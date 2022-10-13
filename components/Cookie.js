import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import React from "react";

const Cookie = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={Styles.imgContainer}>
        <Image
          style={Styles.img}
          source={{
            uri: "https://i.imgur.com/D1sOdaz.png",
          }}
        />
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
