'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Switch,
  TouchableOpacity
} from 'react-native';

class MyNewApp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      canLaunch: false,
      showLaunch: false
    }
  }

  renderLaunchImage () {
    return (
      <TouchableOpacity 
        onPress={(value) => {this.setState({showLaunch: false})}}
        style = {{flex: 1}}
      >
        <Image
          style={styles.launchImage}
          source={{uri: "https://s3.amazonaws.com/vigesharing-is-vigecaring/lkurtz/rnwksp-c4-launch.jpg"}}
        />
      </TouchableOpacity>
    );
  }

  renderLaunchScreen () {
    return (
      <View style={styles.container}>
        <Text style={styles.launchText}>
          Launch Control
        </Text>

        <Switch
          onValueChange = {(value) => {this.setState({canLaunch: value})}}
          value = {this.state.canLaunch}
        >
        </Switch>

        <TouchableOpacity 
          onPress={(value) => {this.setState({showLaunch: true})}}
          disabled={!this.state.canLaunch}
        >
          <View style={styles.launchButton}>
            <Text style={styles.launchButtonText}>Launch!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    if (this.state.showLaunch) {
      return this.renderLaunchImage()
    } else {
      return this.renderLaunchScreen()
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  launchText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  launchButton: {
    backgroundColor: 'red',
    margin: 20,
    padding: 20,
    borderRadius: 10
  },
  launchButtonText: {
    color: 'white'
  },
  launchImage: {
    flex: 1
  }
});

AppRegistry.registerComponent('MyNewApp', () => MyNewApp);
