import React, { Component } from 'react';
import {View} from 'react-native';
import ShowInitialView from './ShowInitialView';
import CameraPreview from './CameraPreview';
import KeyboardSpacer from 'react-native-keyboard-spacer';

console.disableYellowBox = true;

export default class LA extends Component {
  constructor() {
    super();
    this.state = {
      showInitialView: true,
      whereTo: ''
    }
  }
  getWhereToLocation(location) {
    // location is of type string
    this.setState({
      showInitialView: false,
      whereTo: location
    })
  }
  render() {
    var view = <ShowInitialView cb={this.getWhereToLocation.bind(this)}/>
    if (!this.state.showInitialView) {
      view = <CameraPreview whereTo={this.state.whereTo}/>
    }
    return (
      <View>
        {view}
        <KeyboardSpacer/>
      </View>
    )
  }
}
