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
        <View style={Styles.img}>
          <Image
            style={{
              resizeMode: "contain",
              width: 100,
              height: 100,
            }}
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
    justifyContent: "center",
    alignItems: "center",
  },
});
