import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase'
import { Header } from './src/components/common'
import { SignupForm,LoginForm } from './src/components'

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
      <View>
        <Header headerText={'Authantication'} />
        <LoginForm />
        {/*<Text>Shake your phone to open the developer menu.</Text>*/}
      </View>
    );
  }
}
