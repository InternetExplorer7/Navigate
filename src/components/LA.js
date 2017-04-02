import React, { Component } from 'react';
import ShowInitialView from './ShowInitialView';
import CameraPreview from './CameraPreview';

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
    if (this.state.showInitialView) {
      // Enter location + GO button
      return <ShowInitialView cb={this.getWhereToLocation.bind(this)}/>
    } else {
      // Go to main camera view
      return <CameraPreview whereTo={this.state.whereTo}/>
    }
  }
}
