
import * as React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {Header} from 'react-native-elements'
export default class App extends React.Component{
    constructor()
    {
        super()
        this.state={
            text:'',
            displayText:''
        }
    }
    render()
    {
        return(<View>
            <Header centerComponent={{text:'MONKEY CHUNKY'}}></Header>
            <TextInput style={{borderWidth:20,marginTop:30}} onChangeText={(data)=>{
                    this.setState({text:data})
            }}/>
            <TouchableOpacity onPress={()=>{
                this.setState({displayText:this.state.text})
            }}><Text>GO</Text></TouchableOpacity>
            <Text>{this.state.displayText}</Text>
        </View>)
    }
}


