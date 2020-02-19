import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';

import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions'
import Polyline from '@mapbox/polyline'


const locations = require('../constants/locations.json')
export default class mapScreen2 extends Component {
    state = {
        latitude: null,
        longitude: null,
        locations: locations
    }

    async componentDidMount() {
        const { status } = await Permissions.getAsync(Permissions.LOCATION)
        console.log(status)

        if (status !== 'granted') {
            const response = await Permissions.askAsync(Permissions.LOCATION)
        }
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => this.setState({ latitude, longitude }, this.mergeCoords),
            (error) => console.log('Error:', error)
        )

        const { locations: [sampleLocation] } = this.state

        this.setState({
            desLatitude: sampleLocation.coords.latitude,
            desLongitude: sampleLocation.coords.longitude
        }, this.mergeCoords)
    }

    mergeCoords = () => {
        const {
            latitude,
            longitude,
            desLatitude,
            desLongitude
        } = this.state

        const hasStartAndEnd = latitude !== null && desLatitude !== null

        if (hasStartAndEnd) {
            const concatStart = `${latitude},${longitude}`
            const concatEnd = `${desLatitude},${desLongitude}`
            this.getDirections(concatStart, concatEnd)
        }
    }

    async getDirections(startLoc, desLoc) {
        try {
            const resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${desLoc}&key=AIzaSyC_7bJQEVd4LJ0TNK_9s8gar194uq1iUWg`)
            const respJson = await resp.json();
            const response = respJson.routes[0]
            const distanceTime = response.legs[0]
            const distance = distanceTime.distance.text
            const time = distanceTime.duration.text
            const points = Polyline.decode(respJson.routes[0].overview_polyline.points);
            const coords = points.map(point => {
                return {
                    latitude: point[0],
                    longitude: point[1]
                }
            })
            this.setState({ coords, distance, time })
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    render() {
        const { latitude, longitude, coords } = this.state
        if (latitude) {
            return (
                <MapView
                    showsUserLocation={true}
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude,
                        longitude,
                        longitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                >

                </MapView>

            );
        }
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>We need your permission!</Text>
            </View>
        )

    }
}

mapScreen.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
