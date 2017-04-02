import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const googleApiKey = 'AIzaSyB1A5rTTn2LtWyhryiJBzxjZYxlBE3B0pw';

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
	    <KeyboardAvoidingView behavior="padding" style={styles.containerInitialView}>
        <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/icon.png')}
        />
        <Text style={styles.title}>Footsteps</Text>
        <Text style={styles.description}>Walking. Reinvented.</Text>
        </View>
        <View style={styles.inputContainer}>
        <GooglePlacesAutocomplete
        placeholder='Where would you like to walk to?'
        minLength={2} // minimum length of text to search
        autoFocus={false}
        listViewDisplayed='auto'    // true/false/undefined
        fetchDetails={true}
        renderDescription={(row) => row.description} // custom description render
        onPress={ // 'details' is provided when fetchDetails = true
          this.state.cb.bind(this, this.state.currentText)
        }
        getDefaultValue={() => {
          return ''; // text input default value
        }}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: googleApiKey,
          language: 'en' // language of the results
        }}
        styles={{
    textInputContainer: {
      backgroundColor: 'rgba(0,0,0,0)',
      borderTopWidth: 0,
      borderBottomWidth:0,
      paddingHorizontal: 5
    },
    textInput: {
      marginLeft: 0,
      marginRight: 0,
      height: 40,
      color: '#5d5d5d',
      fontSize: 16,
      shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 0.5
    },
    predefinedPlacesDescription: {
      color: '#1faadb'
    },
  }}
        nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GoogleReverseGeocodingQuery={{
          // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
        }}
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: 'distance',
          types: 'food',
        }}

        debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  containerInitialView: {
    flex: 1,
    backgroundColor: '#F7FBFF'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 0.5,
    justifyContent: 'center'
  },
  logo: {
    height: 150,
    width: 200
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    opacity: 0.7
  },
  inputContainer: {
    padding: 20,
    flex: 1,
        flexDirection: 'column'
  },
  input: {
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginBottom: 20,
    paddingHorizontal: 10
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    color: "#FFFFFF"
  },
  buttonContainer: {
    backgroundColor: '#3b3b3b',
    paddingVertical: 15,
    borderRadius: 10
  }
});
