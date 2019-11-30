import * as React from "react";
import { Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import Constants from "expo-constants";
import * as Speech from "expo-speech";

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "#848484",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-around",
    margin: 5,
    paddingHorizontal: 30
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20
  }
});

export default TextButton = ({ text }) => {
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
