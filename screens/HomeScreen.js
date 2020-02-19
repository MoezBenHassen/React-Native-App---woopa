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
  Animated,
  SafeAreaView,
  Dimensions
} from "react-native";

import { Card } from "react-native-elements";
import { MonoText } from "../components/StyledText";
import Project from "../components/Project";
import Project2 from "../components/Project";

import Swipe from "../components/Swipe";
//import { Icon } from "react-native-vector-icons/Icon";
//import jobs from "../constants/homeData";
const SCREEN_HEIGHT = Dimensions.get("window").height;

const SCREEN_WIDTH = Dimensions.get("window").width;
const Jobs = [
  { id: "1", uri: require("../assets/images/cards/webDevIRL.jpg"), name: "Web Dev" },
  { id: "2", uri: require("../assets/images/cards/Screenshot_2.jpg"), name: "Social Media" },
  { id: "3", uri: require("../assets/images/cards/graphicDesignerIRL.jpg"), name: "Graphic Desgin" },
  { id: "4", uri: require("../assets/images/cards/webDevIRL.jpg"), name: "Web Dev" },
  { id: "5", uri: require("../assets/images/cards/Screenshot_2.jpg"), name: "Social Media" },
  { id: "6", uri: require("../assets/images/cards/graphicDesignerIRL.jpg"), name: "Graphic Design" },
  { id: "7", uri: require("../assets/images/cards/webDevIRL.jpg"), name: "Web Dev" },
  { id: "8", uri: require("../assets/images/cards/Screenshot_2.jpg"), name: "Social Media" },
  { id: "9", uri: require("../assets/images/cards/graphicDesignerIRL.jpg"), name: "Graphic Design" },
  { id: "10", uri: require("../assets/images/cards/webDevIRL.jpg"), name: "Web Dev" },
  { id: "11", uri: require("../assets/images/cards/Screenshot_2.jpg"), name: "Social Media" },
  { id: "12", uri: require("../assets/images/cards/graphicDesignerIRL.jpg"), name: "Graphic Design" },
  { id: "13", uri: require("../assets/images/cards/webDevIRL.jpg"), name: "Web Dev" },
  { id: "14", uri: require("../assets/images/cards/Screenshot_2.jpg"), name: "Social Media" },
  { id: "15", uri: require("../assets/images/cards/graphicDesignerIRL.jpg"), name: "Graphic Design" },
];
export default class HomeScreen extends Component {
  constructor() {
    super();

    this.position = new Animated.ValueXY();
    this.state = {
      currentIndex: 0
    };

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ["-10deg", "0deg", "10deg"],
      extrapolate: "clamp"
    });

    this.rotateAndTranslate = {
      transform: [
        {
          rotate: this.rotate
        },
        ...this.position.getTranslateTransform()
      ]
    };

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: "clamp"
    });

    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: "clamp"
    });

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: "clamp"
    });

    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: "clamp"
    });
  }
  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 180) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
        } else if (gestureState.dx < -180) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 });
            });
          });
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start();
        }
      }
    });
  }

  renderJobs = () => {
    return Jobs.map((item, i) => {
      if (i < this.state.currentIndex) {
        return null;
      } else if (i == this.state.currentIndex) {
        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id}
            style={[
              this.rotateAndTranslate,
              {
                height: SCREEN_HEIGHT - 180,
                width: SCREEN_WIDTH,
                padding: 10,
                position: "absolute"
              }
            ]}
          >
            <Animated.View
              style={{
                opacity: this.likeOpacity,
                transform: [{ rotate: "-30deg" }],
                position: "absolute",
                top: 50,
                left: 40,
                zIndex: 1000
              }}
            >
              <Image source={require('../assets/images/leftArrow.png')} />
            </Animated.View>

            <Animated.View
              style={{
                opacity: this.dislikeOpacity,
                transform: [{ rotate: "30deg" }],
                position: "absolute",
                top: 50,
                right: 40,
                zIndex: 1000
              }}
            >

              <Image source={require('../assets/images/rightArrow.png')} />

            </Animated.View>
            <Image
              style={{
                flex: 1,
                height: null,
                width: null,
                resizeMode: "cover",
                borderRadius: 20
              }}
              source={item.uri}
            />

            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }} >{item.name}</Text>
            </View>

          </Animated.View>
        );
      } else {
        return (
          <Animated.View
            key={item.id}
            style={[
              {
                opacity: this.nextCardOpacity,
                transform: [{ scale: this.nextCardScale }],
                height: SCREEN_HEIGHT - 180,
                width: SCREEN_WIDTH,
                padding: 10,
                position: "absolute"
              }
            ]}
          >

            <Image
              style={{
                flex: 1,
                height: null,
                width: null,
                resizeMode: "cover",
                borderRadius: 20
              }}
              source={item.uri}
            />
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }} >{item.name}</Text>
            </View>
          </Animated.View>

        );
      }
    }).reverse();
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: 150,
            backgroundColor: "#f99e23",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 30,
            paddingBottom: 20,

          }}
        >
          <Text style={styles.titleText}> Our Work  </Text>
        </View>

        <View style={{ flex: 1, backgroundColor: '#2C2F33' }}>{this.renderJobs()}</View>

        <View style={{ height: 0, backgroundColor: '#2C2F33' }}></View>

      </View >
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
    backgroundColor: "#2C2F33",
    paddingBottom: 30
  },

  titleText: {
    fontSize: 26,
    fontWeight: "bold",
    margin: 10,
    color: "white",

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
