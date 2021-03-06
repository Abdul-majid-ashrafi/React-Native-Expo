import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/store/reducers'
import { Header } from './src/common/Header'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
        <Header headerText='saylani' />
          <Text>Open up App.js to start working on your app!</Text>
          {/*<Text>Changes you make will automatically reload.</Text>*/}
          {/*<Text>Shake your phone to open the developer menu.</Text>*/}
        </View>
      </Provider>
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
