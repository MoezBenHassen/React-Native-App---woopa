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
        </View>
        <View style={styles.cardView}>
          <Animated.View
            style={StyleSheet.absoluteFill}
            style={{
              transform: [
                { translateX: this.state.pan.x },
                { translateY: this.state.pan.y }
              ]
            }}
            {...this._panResponder.panHandlers}
          >
            <Project
              title={"Web Dev"}
              image={require("../assets/images/cards/webDev.jpg")}
              text= "developping websites"
            />
          </Animated.View>
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
    backgroundColor: "#2C2F33"
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
    flex: 0.25,
    position: "relative",
    alignItems: "center",
    height: 150,
    marginBottom: 50,
    backgroundColor: "#f99e23",
    justifyContent: "center",
    alignItems: "center"
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
