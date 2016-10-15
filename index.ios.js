'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  MapView
} from 'react-native';

function distance(lat1, lon1, lat2, lon2) {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    return dist.toFixed(2)
}

class MyNewApp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      position : {
        coords: {
          latitude: 0,
          longitude: 0
        }
      }
    }
  }

  distanceFromHome () {
    const homePosition = {
      latitude: 40.626523,
      longitude: -111.885059
    }

    const currentPosition = this.state.position.coords

    return distance(homePosition.latitude, homePosition.longitude, currentPosition.latitude, currentPosition.longitude)
  }

  componentDidMount () {
    const positionOptions = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 1000
    }

    const onSuccess = (position) => {
      this.setState({ position })
    }

    const onFailure = (error) => {
      alert(error)
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onFailure, positionOptions)
    navigator.geolocation.watchPosition(onSuccess, onFailure, positionOptions)
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <MapView 
          style = {{flex: 1}}
          showsUserLocation = {true}
          followUserLocation = {true}
        />
        <View style = {{position: 'absolute', right: 0, left: 0, bottom: 10, padding: 10, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <Text style={{textAlign: 'center'}}>{this.distanceFromHome()} miles from home</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('MyNewApp', () => MyNewApp);
