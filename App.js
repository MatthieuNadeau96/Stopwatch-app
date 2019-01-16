import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'

const DATA = {
  timer: 1234567,
  laps: [ 12234, 2345, 5555, 90009]
}

type Props = {};
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
  }
})
