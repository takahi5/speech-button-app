import * as React from "react";
import { Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import Constants from "expo-constants";
import * as Speech from "expo-speech";

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 150,
    backgroundColor: "#ffd700",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-around",
    margin: 5
  },
  text: {
    color: "#3b170b",
    fontWeight: "bold"
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain"
  }
});

export default App = ({ text, imageUrl }) => {
  speak = () => {
    var thingToSay = text;
    Speech.speak(thingToSay);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={speak}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
