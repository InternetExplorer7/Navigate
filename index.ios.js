/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

import { AppRegistry, TextInput } from 'react-native';

export default class LA extends Component {
  constructor() {
    super();
    this.state = {
      showInitialView: true,
      whereTo: ''
    }
    this.getWhereToLocation = this.getWhereToLocation.bind(this);
  }
  getWhereToLocation(location) {
    alert('location: ' + JSON.stringify(location));
  }
  render() {
    if (this.state.showInitialView) {
      // Enter location + GO button
      return <ShowInitialView cb={this.getWhereToLocation}/>
    } else {
      // Go to main camera view
      return <CameraPreview whereTo={this.state.whereTo}/>
    }
  }
}

class ShowInitialView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cb: props.cb,
      currentText: ''
    }
	 this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Where do you want to go ?
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({currentText: text})}
          value={this.state.currentText}
        />
 	// text input 
	 <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
        <Button
        onPress={this.state.cb.bind(this.state.currentText)}
        title="Go!"
        />
      </View>
    )
  }
}

class CameraPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whereToLocationString: props.whereTo
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Enter your location.
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 70
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('LA', () => LA);
