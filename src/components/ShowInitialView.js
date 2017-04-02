import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image
} from 'react-native';

export default class ShowInitialView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cb: this.props.cb,
      currentText: ""
    };
  }

  render() {
    return (
	    <View style={styles.containerInitialView}>
        <Image
          source={require('../assets/walker2.png')}
        />
	      <Text style={styles.welcome}>
          Where are you walking to?
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({currentText: text})}
          value={this.state.currentText}
        />
        <Button
	        onPress={this.state.cb.bind(this, this.state.currentText)}
          color= "black"
	        title="Start Walking"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerInitialView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7FBFF',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 5,
    borderTopWidth: 5,
    borderColor: 'black'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 70
  }
});
