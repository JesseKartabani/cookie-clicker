import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

const Cookie = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity>
        <View style={Styles.imgContainer}>
          <Image
            style={Styles.img}
            source={{
              uri: "https://i.imgur.com/D1sOdaz.png",
            }}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Cookie;

const Styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
