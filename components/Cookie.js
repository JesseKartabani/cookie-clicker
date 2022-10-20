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
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";

const Cookie = () => {
  // Animation state
  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));
  // Cookies collected
  const [count, setCount] = useState(0);
  // Tracks users total click multiplier
  const [clickMultiplier, setClickmultiplier] = useState(1);
  // Tracks users total cookies per second
  const [cookiesPerSecond, setCookiesPerSecond] = useState(0);
  // Upgrade costs
  const [cursorUpgradeCost, setCursorUpgradeCost] = useState(20);
  const [grandmaUpgradeCost, setGrandmaUpgradeCost] = useState(10);
  const [farmUpgradeCost, setFarmUpgradeCost] = useState(50);
  const [factoryUpgradeCost, setFactoryUpgradeCost] = useState(100);
  const upgradePriceMultiplier = 1.5;

  // Upgrade counts (amount of times user has bought an upgrade)
  const [cursorCount, setCursorCount] = useState(0);
  const [grandmaCount, setGrandmaCount] = useState(0);
  const [farmCount, setFarmCount] = useState(0);
  const [factoryCount, setFactoryCount] = useState(0);

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
    outputRange: ["0deg", "6deg"], // How much cookie rotates
  });

  const animatedStyle = {
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],
  };

  // Cookie upgrade functions
  const cursorUpgrade = () => {
    if (count < cursorUpgradeCost) return;
    setCount(count - cursorUpgradeCost);
    setClickmultiplier(clickMultiplier + 0.1); // Give user 0.1x multiplier
    console.log(clickMultiplier);
    setCursorUpgradeCost(cursorUpgradeCost * upgradePriceMultiplier);

    setCursorCount(cursorCount + 1); // How many upgrades user has
  };

  const grandmaUpgrade = () => {
    if (count < grandmaUpgradeCost) return;
    setCount(count - grandmaUpgradeCost);
    setCookiesPerSecond(cookiesPerSecond + 0.1); // Give user 0.1 cps
    console.log(cookiesPerSecond);
    setGrandmaUpgradeCost(grandmaUpgradeCost * upgradePriceMultiplier);

    setGrandmaCount(grandmaCount + 1); // How many upgrades user has
  };

  const farmUpgrade = () => {
    if (count < farmUpgradeCost) return;
    setCount(count - farmUpgradeCost);
    setCookiesPerSecond(cookiesPerSecond + 1); // Give user 1 cps
    console.log(cookiesPerSecond);
    setFarmUpgradeCost(farmUpgradeCost * upgradePriceMultiplier);

    setFarmCount(farmCount + 1); // How many upgrades user has
  };

  const factoryUpgrade = () => {
    if (count < factoryUpgradeCost) return;
    setCount(count - factoryUpgradeCost);
    setCookiesPerSecond(cookiesPerSecond + 5); // Give user 5 cps
    console.log(cookiesPerSecond);
    setFactoryUpgradeCost(factoryUpgradeCost * upgradePriceMultiplier);

    setFactoryCount(factoryCount + 1); // How many upgrades user has
  };

  // Add cookies per second to total cookie count
  // Runs every 1 seconds
  useEffect(() => {
    const addCookiesPerSecond = setInterval(() => {
      let cookiesToAdd = cookiesPerSecond * 1; // Multiply by the interval time
      setCount((count) => count + cookiesToAdd);
    }, 1000);
    return () => clearInterval(addCookiesPerSecond);
  }, [cookiesPerSecond]);

  return (
    <ImageBackground
      style={Styles.backgroundImg}
      source={{ uri: "https://i.imgur.com/uivwJrT.jpg" }}
    >
      <SafeAreaView>
        {/* Displays users collected cookies and cookies per second */}
        <Text style={Styles.cookieCount}>{count.toFixed()} Cookies</Text>
        <Text style={Styles.cookiesPerSecond}>
          passive cps: {cookiesPerSecond.toFixed(1)}
        </Text>

        {/* Clickable Cookie */}
        <TouchableOpacity
          // On press we run our animation and increment cookie count
          onPress={async () => {
            handleAnimation();
            setCount(count + 1 * clickMultiplier);
          }}
          style={Styles.cookieImgContainer}
          activeOpacity={0.7}
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
          {/*  Cursor Upgrade */}
          {/* Cookie upgrade image and name */}
          <TouchableOpacity
            onPress={async () => {
              cursorUpgrade();
            }}
          >
            <Text style={Styles.upgradesSubtitles}>Cursor</Text>
            <View style={Styles.upgradeView}>
              <Image
                style={Styles.upgradesImages}
                source={{
                  uri: "https://i.imgur.com/T42x8PH.png",
                }}
              />
              <Text style={Styles.upgradeCountText}>{cursorCount}</Text>
            </View>

            {/* Cookie upgrade cost */}
            <Text style={Styles.cookieCostText}>
              <Image
                style={Styles.cookieCostImg}
                source={{
                  uri: "https://i.imgur.com/D1sOdaz.png",
                }}
              />
              {/* */} {cursorUpgradeCost.toFixed()}
            </Text>
          </TouchableOpacity>

          {/* Grandma Upgrade */}
          {/* Cookie upgrade image and name */}
          <TouchableOpacity
            onPress={async () => {
              grandmaUpgrade();
            }}
          >
            <Text style={Styles.upgradesSubtitles}>Grandma</Text>
            <View style={Styles.upgradeView}>
              <Image
                style={Styles.upgradesImages}
                source={{
                  uri: "https://i.imgur.com/t9YfqrJ.png",
                }}
              />
              <Text style={Styles.upgradeCountText}>{grandmaCount}</Text>
            </View>

            {/* Cookie upgrade cost */}
            <Text style={Styles.cookieCostText}>
              <Image
                style={Styles.cookieCostImg}
                source={{
                  uri: "https://i.imgur.com/D1sOdaz.png",
                }}
              />
              {/* */} {grandmaUpgradeCost.toFixed()}
            </Text>
          </TouchableOpacity>

          {/*  Farm Upgrade */}
          {/* Cookie upgrade image and name */}
          <TouchableOpacity
            onPress={async () => {
              farmUpgrade();
            }}
          >
            <Text style={Styles.upgradesSubtitles}>Farm</Text>
            <View style={Styles.upgradeView}>
              <Image
                style={Styles.upgradesImages}
                source={{
                  uri: "https://i.imgur.com/LIUJMA1.png",
                }}
              />
              <Text style={Styles.upgradeCountText}>{farmCount}</Text>
            </View>

            {/* Cookie upgrade cost */}
            <Text style={Styles.cookieCostText}>
              <Image
                style={Styles.cookieCostImg}
                source={{
                  uri: "https://i.imgur.com/D1sOdaz.png",
                }}
              />
              {/* */} {farmUpgradeCost.toFixed()}
            </Text>
          </TouchableOpacity>

          {/* Factory Upgrade */}
          {/* Cookie upgrade image and name */}
          <TouchableOpacity
            onPress={async () => {
              factoryUpgrade();
            }}
          >
            <Text style={Styles.upgradesSubtitles}>Factory</Text>
            <View style={Styles.upgradeView}>
              <Image
                style={Styles.upgradesImages}
                source={{
                  uri: "https://i.imgur.com/x43Vl9b.png",
                }}
              />
              <Text style={Styles.upgradeCountText}>{factoryCount}</Text>
            </View>

            {/* Cookie upgrade cost */}
            <Text style={Styles.cookieCostText}>
              <Image
                style={Styles.cookieCostImg}
                source={{
                  uri: "https://i.imgur.com/D1sOdaz.png",
                }}
              />
              {/* */} {factoryUpgradeCost.toFixed()}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Cookie;

const Styles = StyleSheet.create({
  backgroundImg: {
    height: "100%",
    width: "100%",
  },

  upgradeView: {
    //backgroundColor: "red",
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {},
      android: {},
      default: {},
    }),
  },

  upgradeCountText: {
    position: "absolute",
    left: 0,
    top: 0,
    fontWeight: "400",
    color: "white",
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        fontSize: "120%",
      },
    }),
  },

  cookieCostText: {
    height: 20,
    alignSelf: "center",
    fontWeight: "600",
    marginTop: 5,
    color: "white",
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        fontSize: "120%",
        height: 35,
        marginTop: 15,
      },
    }),
  },

  cookieCostImg: {
    height: 15,
    width: 15,
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        height: 25,
        width: 25,
      },
    }),
  },

  upgradesSubtitles: {
    textAlign: "center",
    fontWeight: "700",
    marginTop: 10,
    color: "white",
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        fontSize: "110%",
      },
    }),
  },
  upgradesImages: {
    height: 75,
    width: 75,
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
    color: "white",
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
    color: "white",
    ...Platform.select({
      ios: {
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
    color: "white",
    ...Platform.select({
      ios: {
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
