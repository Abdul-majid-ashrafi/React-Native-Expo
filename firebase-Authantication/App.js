import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase'
import { Header } from './src/components/common'

export default class App extends React.Component {
  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCXs2qMUazezjisKUS2ICNAKbasCkJdGDQ",
      authDomain: "react-sample-17caa.firebaseapp.com",
      databaseURL: "https://react-sample-17caa.firebaseio.com",
      projectId: "react-sample-17caa",
      storageBucket: "react-sample-17caa.appspot.com",
      messagingSenderId: "411422279834"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Authantication'} />
        <Text>Changes you make will automatically reload.</Text>
        {/*<Text>Shake your phone to open the developer menu.</Text>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
