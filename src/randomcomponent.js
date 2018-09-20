import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

export default class randomcomponent extends Component {

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Clicca per estrarre una frase</Text>
        <TouchableHighlight
                style = {styles.button}
                underlayColor= "white"
              >
              <Text
                  style={styles.buttonText}>
                  GO!
              </Text>
            </TouchableHighlight>
      </View>
    )
  }
}