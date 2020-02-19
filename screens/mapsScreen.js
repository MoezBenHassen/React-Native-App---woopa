import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, Button, Platform, Linking, TouchableOpacity, Animated } from 'react-native';

import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions'
import Polyline from '@mapbox/polyline'
import { showLocation } from 'react-native-map-link'
import LottieView from "lottie-react-native";

const locations = require('../constants/locations.json');
export default class mapScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            positionLeft: new Animated.Value(Dimensions.get('window').width)
        }
    }

    componentDidMount() {
        Animated.spring(
            this.state.positionLeft, {
            toValue: 0
        }
        ).start()
    }
    render() {
        return (

            <View style={{ backgroundColor: '#2C2F33', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => {
                    if (Platform.OS === 'ios') {
                        Linking.openURL("https://www.google.com/maps/place/Carrefour+Ksar+Said/@36.8175313,10.1019402,17z/data=!3m1!4b1!4m5!3m4!1s0x12fd325deeb0cfc3:0x380dc7e055dcc97!8m2!3d36.817527!4d10.1041342");
                    }
                    else /* else use Google */ {
                        Linking.openURL("https://www.google.com/maps/place/Carrefour+Ksar+Said/@36.8175313,10.1019402,17z/data=!3m1!4b1!4m5!3m4!1s0x12fd325deeb0cfc3:0x380dc7e055dcc97!8m2!3d36.817527!4d10.1041342")
                    };
                }}>
                    <Animated.Image style={[{ left: this.state.positionLeft }, { marginTop: 100, width: 200, height: 200 }]} source={require('../assets/images/mapsIcon.png')} />
                </TouchableOpacity>
            </View>
        )
    }
}
/* if we're on iOS, open in Apple Maps */

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
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: 150,
        height: 150
    },
    buttonContainer: {
        paddingTop: 20,
    },
});


