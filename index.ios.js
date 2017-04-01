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
import Camera from 'react-native-camera';



export default class LA extends Component {
  constructor() {
    super();
    this.state = {
      showInitialView: false,
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
        <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}>
        <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[SNAP]</Text>
        </Camera>
      </View>
    )
  }

    takePicture() {
      const options = {};
      //options.location = ...
      this.camera.capture({metadata: options, target: Camera.constants.CaptureTarget.memory})
        .then((image) => {
          alert('imageData: ' + image.data.substring(100,190));
        })
        .catch(err => alert(err));
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
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
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

AppRegistry.registerComponent('LA', () => LA);
