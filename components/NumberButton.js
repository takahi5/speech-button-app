import * as React from "react";
import { Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import Constants from "expo-constants";
import * as Speech from "expo-speech";

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: "#4B088A",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-around",
    margin: 5
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30
  }
});

export default NumberButton = ({ text }) => {
  speak = () => {
    var thingToSay = text;
    Speech.speak(thingToSay);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={speak}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
