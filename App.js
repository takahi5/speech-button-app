import * as React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Constants from "expo-constants";
import MenuButton from "./components/MenuButton";
import NumberButton from "./components/NumberButton";
import TextButton from "./components/TextButton";

const items = [
  {
    text: "sandwitch",
    image: require("./assets/images/sandwitch.png")
  },
  {
    text: "pizza",
    image: require("./assets/images/pizza.png")
  },
  {
    text: "curry and rice",
    image: require("./assets/images/curry.png")
  },
  {
    text: "soup",
    image: require("./assets/images/soup.png")
  },
  {
    text: "spaghetti",
    image: require("./assets/images/spaghetti.png")
  },
  {
    text: "humburger",
    image: require("./assets/images/humburger.png")
  },
  {
    text: "popcorn",
    image: require("./assets/images/popcorn.png")
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
    justifyContent: "flex-start",
    flexWrap: "wrap"
  },
  numberContainer: {
    marginHorizontal: 5,
    padding: 20,
    backgroundColor: "#F2EFFB",
    flexDirection: "row",
    justifyContent: "flex-start",
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
    <MenuButton
      text={item.text}
      imageUrl={item.imageUrl}
      image={item.image}
      key={index}
    />
  ));

  const numbers = [...Array(12)].map((_, i) => (
    <NumberButton text={(i + 1).toString()} key={i.toString()} />
  ));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.itemContainer}>{menus}</View>
        <View style={styles.numberContainer}>{numbers}</View>
        <View style={styles.extraContaner}>
          <TextButton text="what do you want" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
