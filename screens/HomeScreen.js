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
  SafeAreaView
} from "react-native";

import { Card } from "react-native-elements";
import { MonoText } from "../components/StyledText";
import Project from "../components/Project";
import Project2 from "../components/Project";

import Swipe from "../components/Swipe";
import jobs from "../constants/homeData";
export default class HomeScreen extends Component {
  /*constructor(props) {
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
  }*/
  renderCards(job) {
    return (
      <Card containerStyle={{borderRadius: 14}} title={job.jobtitle} titleStyle={{ fontSize: 14 }}>
        <View style={{ height: 200 }}>
          <Image
            source={require("../assets/images/cards/webDev.jpg")}
            style={{ width: "100%", height: 200 }}
          />
        </View>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text numberOfLines={1}>
          {job.snippet.replace(/<b>/g, "").replace(/<\/b>/g, "")}
        </Text>
      </Card>
    );
  }

  renderNoMoreCards = () => {
    return (
      <Card title="No More cards">
        <Button
          title="Do something"
          large
          icon={{ name: "my-location" }}
          backgroundColor="#03A9F4"
        />
      </Card>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.titleText}>Our Work</Text>

          <ScrollView style={styles.cardView}>
            <SafeAreaView >
              <Swipe
                data={jobs}
                
                renderCard={this.renderCards}
                renderNoMoreCards={this.renderNoMoreCards}
              />
            </SafeAreaView>
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
