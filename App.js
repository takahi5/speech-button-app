import * as React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions
} from "react-native";
import Constants from "expo-constants";
import MenuButton from "./components/MenuButton";
import NumberButton from "./components/NumberButton";
import TextButton from "./components/TextButton";

const { width, height } = Dimensions.get("window");

const items = [
  {
    text: "sandwitch",
    imageUrl:
      "https://media.istockphoto.com/vectors/vector-realistic-sandwitch-illustration-isolated-on-white-background-vector-id514556062?k=6&m=514556062&s=612x612&w=0&h=mzTs46mrF923xoc1cIfjvcJOdTZlZFcRYfPfJFZSCOY="
  },
  {
    text: "pizza",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQexdm-Y3K8tGrGtoaztDNTV0Jy9eyfAMT9k4lU0f9mFV80MpSFMg&s"
  },
  {
    text: "curry and rice",
    imageUrl:
      "https://image.shutterstock.com/image-vector/japanesestyle-curry-rice-260nw-1031301637.jpg"
  },
  {
    text: "soup",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHH0mwaT_-_Fttg2RfTM_eo9tEt5nIAHF5OAI9ssJM3isD4YMY&s"
  },
  {
    text: "spaghetti",
    imageUrl:
      "https://cdn.imgbin.com/10/17/9/imgbin-bolognese-sauce-pasta-spaghetti-alle-vongole-ramen-others-GUADBhVEWymxFYgEKRQQmrUWK.jpg"
  },
  {
    text: "humburger",
    imageUrl:
      "https://www.clipartwiki.com/clipimg/detail/31-313368_hamburger-clipart-sketch-burger-drawing-png.png"
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ff4000",
    paddingVertical: 100,
    paddingHorizontal: 50,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  itemContainer: {
    marginHorizontal: 5,
    padding: 20,
    backgroundColor: "#f4fa58",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  numberContainer: {
    marginHorizontal: 5,
    padding: 20,
    backgroundColor: "#F2EFFB",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  extraContaner: {
    margin: 10
  }
});

export default App = () => {
  speak = () => {
    var thingToSay = "pizza";
    Speech.speak(thingToSay);
  };

  const menus = items.map((item, index) => (
    <MenuButton text={item.text} imageUrl={item.imageUrl} key={index} />
  ));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.itemContainer}>{menus}</View>
        <View style={styles.numberContainer}>
          <NumberButton text="1" />
          <NumberButton text="2" />
          <NumberButton text="3" />
          <NumberButton text="4" />
          <NumberButton text="5" />
          <NumberButton text="6" />
        </View>
        <View style={styles.extraContaner}>
          <TextButton text="what do you want" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
