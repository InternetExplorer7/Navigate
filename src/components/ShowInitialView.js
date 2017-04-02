import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

export default class ShowInitialView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cb: this.props.cb,
      currentText: ""
    };
  }

  render() {
    return (
	    <KeyboardAvoidingView behavior="padding" style={styles.containerInitialView}>
        <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/walker2.png')}
        />
        </View>
        <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => this.setState({currentText: text})}
          value={this.state.currentText}
          style={styles.input}
          placeholder="Where are you walking to?"
        />
        <TouchableOpacity
	        onPress={this.state.cb.bind(this, this.state.currentText)}
          color= "black"
	        title="Start Walking"
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>NAVIGATE</Text>
        </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  containerInitialView: {
    flex: 1,
    backgroundColor: '#F7FBFF',
    borderWidth: 5,
    borderColor: 'black'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    height: 200,
    width: 300
  },
  inputContainer: {
    padding: 20
  },
  input: {
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginBottom: 20,
    paddingHorizontal: 10
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    color: "#FFFFFF"
  },
  buttonContainer: {
    backgroundColor: '#3b3b3b',
    paddingVertical: 15,
    borderRadius: 10
  }
});
