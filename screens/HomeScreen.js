import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PanResponder,
  Animated
} from "react-native";

import { Card } from "react-native-elements";
import { MonoText } from "../components/StyledText";
import Project from "../components/Project";
import Project2 from "../components/Project";

import Swipe from "../components/Swipe";
import jobs from "../constants/homeData";
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY()
    };
  }
  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: this.state.pan.x, dy: this.state.pan.y }
      ]),
      onPanResponderRelease: () => {
        Animated.spring(this.state.pan, {
          toValue: { x: 0, y: 0 }
        }).start();
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.titleText}>Our Work</Text>
          
          <ScrollView>
            <View style={styles.cardView}>
              <Swipe data={jobs} />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C2F33"
  },
  cardView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2C2F33",
    paddingBottom: 30
  },

  titleText: {
    fontSize: 26,
    fontWeight: "bold",
    margin: 10,
    color: "white",
    textDecorationLine: "underline"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    height: 150,
    marginTop: 30,
    backgroundColor: "#f99e23",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  }
});
