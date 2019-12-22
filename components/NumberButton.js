import * as React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import * as Speech from "expo-speech";

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
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
    Speech.speak(text, { language: "en-US" });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={speak}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
