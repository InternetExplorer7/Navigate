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
  View
} from 'react-native';

export default class LA extends Component {
  constructor() {
    super();
    this.state = {
      showInitialView: true,
      whereTo: ''
    }
  }
  getWhereToLocation(location) {
    console.log('location: ' + location);
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
      cb: props.cb
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Where are you trying to go?
        </Text>
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
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('LA', () => LA);
