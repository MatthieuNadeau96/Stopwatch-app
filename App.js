import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import moment from 'moment'

const DATA = {
  timer: 1234567,
  laps: [ 12234, 2345, 5555, 90009]
}

function Timer({ interval }) {
  const duration = moment.duration(interval)
  const centiseconds = Math.floor(duration.milliseconds() / 10)
  return (
    <Text style={styles.timer}>
      {duration.minutes()}:{duration.seconds()}.{centiseconds}
    </Text>
  )
}
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Timer interval={DATA.timer}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    paddingTop: 130,
  },
  timer: {
    color: '#ffffff',
    fontSize: 76,
    fontWeight: '200',
  }
})
