import * as React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
/*import { Header } from "react-native-elements";
<Header centerComponent={{ text: "MONKEY CHUNKY" }}></Header>*/
import db from "./localDb";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      chunks: [],
    };
  }
  render() {
    return (
      <View>
        
        <TextInput
          style={{ borderWidth: 20, marginTop: 30 }}
          onChangeText={(data) => {
            this.setState({ text: data });
          }}
        />
        <TouchableOpacity
          onPress={() => {
            this.setState({ chunks: db[this.state.text].chunks });
          }}
        >
          <Text>GO</Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map((item) => (
            <TouchableOpacity>
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}
