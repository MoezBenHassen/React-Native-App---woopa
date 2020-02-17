import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';

import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions'

export default class mapScreen extends Component {
    state = {
        latitude: null,
        longitude: null,
    }

    async componentDidMount() {
        const { status } = await Permissions.getAsync(Permissions.LOCATION)

        if (status !== 'granted') {
            const response = await Permissions.askAsync(Permissions.LOCATION)
        }
    }
    render() {
        return (
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    // latitude,
                    //longitude,
                    longitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            >

            </MapView>

        );
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
