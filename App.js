import * as React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Alert
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
            var ln=this.state.text.length
            var word=this.state.text.trim().toLowerCase()
            ln>0?(
              db[word]?(this.setState({ chunks: db[word].chunks, phonemes: db[word].phones })):(Alert.alert('SORRY WE WOULD SOON FIND THIS WORD FOR YOU'))
            ):(Alert.alert('enter a word'))
            console.log(ln)
          }}
        >
          <Text>GO</Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map((item, index) => (
            <ChunkButton chunk={item} phonem={this.state.phonemes[index]} buttonIndex={index} />
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
