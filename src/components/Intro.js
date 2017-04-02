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
            { backgroundColor: '#78c9f2', image: <Image source={require('../assets/animated_map.gif')} style={{width: 300, height: 300}}/>, title: 'Navigate', subtitle: 'Walking Directions Reinvented' },
            { backgroundColor: "#78c9f2", image: <Image source={require('../assets/map.png')} style={{width: 250, height: 200}}/>, title: 'Direct', subtitle: 'Enter a location to walk to' },
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
