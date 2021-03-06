import React, { Component } from 'react';
import Camera from 'react-native-camera';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class CameraPreview extends Component {
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
  this.camera.capture({
          metadata: options,
          target: Camera.constants.CaptureTarget.memory
      })
      .then((image) => {
          fetch('https://e63e723e.ngrok.io/find/blue', {
                  method: 'POST',
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                      base64Image: image.data
                  })
              })
              .then((response) => {
                  return response.json();
              }).then((responseJson) => {
                  // The JSON response.
                  var stairsOrHallway = responseJson.Result;
                  if (stairsOrHallway === '\"A\"') {
                    alert('stairs detected')
                  } else if (stairsOrHallway === '\"B\"') {
                    alert('hallway detected')
                  } else {
                    alert('response: ' + stairsOrHallway);
                  }
              })
      })
      .catch(err => alert(err));
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
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
