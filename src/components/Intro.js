import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import Onboarding from 'react-native-simple-onboarding';
import LA from './LA';

export default class Intro extends Component {
  constructor() {
    super();
    this.state = {
      completedOnboarding: false,
    };
  }
  render() {
    if (!this.state.completedOnboarding) {
      return (
        <Onboarding
          pages={[
            { backgroundColor: '#fff', image: <Image source={require('../assets/walker.png')} style={{width: 200, height: 200}}/>, title: 'Navigate', subtitle: 'Walking Directions Reinvented' },
            { backgroundColor: "#fff", image: <Image source={require('../assets/map.png')} style={{width: 250, height: 200}}/>, title: 'Direct', subtitle: 'Enter a location to walk to' },
            { backgroundColor: "#fff", image: <Image source={require('../assets/AR.png')} style={{width: 125, height: 200}}/>, title: 'View', subtitle: 'View directions in Augmented Reality' },
          ]}
          onEnd={() => this.setState({ completedOnboarding: true })}
        />
      );
    }
    return (
      <LA />
    );
  }
}
