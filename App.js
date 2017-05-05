import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header, List } from './scr/tags'
// import { FormLabel, FormInput, Button } from 'react-native-elements'

export default class App extends Component {
  render() {
    // let pic = {
    //   uri: 'http://www.appcoda.com/wp-content/uploads/2015/04/react-native.png'
    // };
    return (
      <View>
        <Header headerText={'Albums'} />
        {/*<Text>Home page Component</Text>*/}

        <List />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
