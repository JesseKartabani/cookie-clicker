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
    width: 100,
    height: 100,
    alignSelf: "center",
    ...Platform.select({
      ios: {},
      android: {},
      default: {},
    }),
  },
  imgContainer: {
    ...Platform.select({
      ios: {
        backgroundColor: "red",
        marginTop: 300,
        marginLeft: 100,
        marginRight: 100,
      },
      android: {},
      default: {},
    }),
  },
});
