import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header, List } from './scr/tags'
// import { FormLabel, FormInput, Button } from 'react-native-elements'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        {/*<Text>Home page Component</Text>*/}
        <List />
      </View>
    );
  }
}
