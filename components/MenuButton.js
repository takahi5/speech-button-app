import * as React from "react";
import { Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import * as Speech from "expo-speech";

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 120,
    backgroundColor: "#ffd700",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-around",
    margin: 5,
    padding: 2
  },
  text: {
    color: "#3b170b",
    fontWeight: "bold"
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "contain"
  }
});

export default MenuButton = ({ text, image }) => {
  speak = () => {
    Speech.speak(text, { language: "en-US" });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={speak}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
