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

function RoundButton({ title, color, background }) {
  return (
    <View style={[ styles.button, { backgroundColor: background }]}>
      <View style={styles.buttonBorder}>
        <Text style={[ styles.buttonTitle, { color }]}>{title}</Text>
      </View>
    </View>
  )
}

function ButtonsRow({ children }) {
  return (
    <View style={styles.buttonsRow}>{children}</View>
  )
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Timer interval={DATA.timer}/>
        <ButtonsRow>
          <RoundButton title='Reset' color='#ffffff' background='#3d3d3d'/>
          <RoundButton title='Start' color='#63c367' background='#4d8348'/>
        </ButtonsRow>
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
    paddingHorizontal: 20,
  },
  timer: {
    color: '#ffffff',
    fontSize: 76,
    fontWeight: '200',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 18,
  },
  buttonBorder: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 80,
  },
})
