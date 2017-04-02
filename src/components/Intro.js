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
            { backgroundColor: '#1060fe', image: <Image source={require('../assets/walker.png')} style={{width: 50, height: 50}}/>, title: 'Simple Messenger UI', subtitle: 'Implemented in React Native' },
            { backgroundColor: "#fe6e58", image: <Image source={require('../assets/walker.png')} style={{width: 50, height: 50}}/>, title: 'Welcome', subtitle: 'To Earth' },
            { backgroundColor: "#999", image: <Image source={require('../assets/walker.png')} style={{width: 50, height: 50}}/>, title: 'Also', subtitle: 'Mars is nice' },
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
