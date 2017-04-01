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
  Button,
  Alert
} from 'react-native';



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
const onButtonPress = ()=>
{
// what it should do 
 Alert.alert('THIS FUNCTION SHOULD CHANGE');
};
class ShowInitialView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cb: props.cb,
      currentText: "destination"
    }
;
  }

  render() {
    return (
      
	<View style={styles.container}>
        <Text style={styles.welcome}>
          Where are you walking to?
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({currentText: text})}
          value={this.state.currentText}
        />
	


       <Button
	onPress={onButtonPress}
        color= "red"
	title="Start Walking"
        />
      </View>
    )
  }
}

class DestTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Destination' };
  }

  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
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
