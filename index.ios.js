'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

class MyNewApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          barStyle= 'light-content'
        />
        <View style={styles.content}>
          <Text style={styles.welcome}>
            Challenge 3
          </Text>
          <Image
            style={styles.targetImage}
            source={require('./app/assets/images/mind-blown.gif')}
          />
          <View style={styles.textContainer}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={styles.leftText}>
                I'm on the 
              </Text><Text style={{color: 'red'}}>left.</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={styles.rightText}>
                I'm on the 
              </Text><Text style={{color: 'blue'}}>right.</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#333333',
    flexDirection: 'column'

  },
  textContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  leftText: {
    color: 'white',
  },
  rightText: {
    color: 'white'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  instructions: {
    marginTop: 10,
    textAlign: 'center',
  },
  targetImage: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginTop: 25,
    borderColor: 'black',
    borderWidth: 3
  }
});

AppRegistry.registerComponent('MyNewApp', () => MyNewApp);
