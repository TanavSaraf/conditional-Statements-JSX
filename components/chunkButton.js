import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";

export default class ChunkButton extends Component {
  constructor() {
    super();
    this.state = {
      pressedButtonIndex: "",
    };
  }
  playSound = async (phonem) => {
    Audio.Sound.createAsync(
      {
        uri:
          "https://s3-whitehatjrcontent.whjr.online/phones/" + phonem + ".mp3",
      },
      {
        shouldPlay: true,
      }
    );
  };
  render() {
    return (
      <TouchableOpacity
        style={
          this.state.pressedButtonIndex === this.props.buttonIndex
            ? [styles.button, { backgroundColor: "red" }]
            : styles.button
        }
        onPress={() => {
          this.playSound(this.props.phonem);
          this.setState({ pressedButtonIndex: this.props.buttonIndex });
        }}
      >
        <Text
          style={
            this.state.pressedButtonIndex === this.props.buttonIndex
              ? { fontSize: 30, color: "white" }
              : { fontSize: 30, color: "black" }
          }
        >
          {this.props.chunk}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
    width: "50%",
    padding: 10,
    backgroundColor: "blue",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 10,
  },
});
