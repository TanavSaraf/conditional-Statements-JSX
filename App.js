import * as React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
/*import { Header } from "react-native-elements";
<Header centerComponent={{ text: "MONKEY CHUNKY" }}></Header>*/
import db from "./localDb";
import ChunkButton from "./components/chunkButton";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      chunks: [],
      phonemes: [],
    };
  }
  render() {
    console.log(this.state.phonemes);
    return (
      <View>
        <Image source={require('./assets/Untitled.png')} style={styles.image} />
        <TextInput
          style={styles.input}
          onChangeText={(data) => {
            this.setState({ text: data });
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.setState({ chunks: db[this.state.text].chunks });
            this.setState({ phonemes: db[this.state.text].phones });
          }}
        >
          <Text>GO</Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map((item, index) => (
            <ChunkButton chunk={item} phonem={this.state.phonemes[index]} />
          ))}
        </View>
      </View>
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
    backgroundColor: "pink",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 10,
  },
  input: {
     borderWidth: 1.2,
     marginTop: 90, 
     textAlign:'center',
     width:'80%',
     alignSelf:'center',

    },
    image:{
      width:'30%',
      height:'30%',
      alignSelf:'center',
    }
});
