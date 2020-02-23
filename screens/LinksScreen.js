import React, { Component } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { ScrollView, StyleSheet, View, Text, Linking, Image, Animated, Dimensions } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { SocialIcon, Divider, Button } from 'react-native-elements';
//import Icon from 'react-native-ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createOpenLink } from 'react-native-open-maps';

const facebookHQ = { latitude: 36.817316, longitude: 10.104039 };
const openFacebookHQ = createOpenLink({ facebookHQ, zoom: 50 });

const yosemite = { latitude: 37.865101, longitude: -119.538330 };
const openYosemite = createOpenLink(yosemite);
const openYosemiteZoomedOut = createOpenLink({ ...yosemite, zoom: 30 });

export default class LinksScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      positionBottom: new Animated.Value(Dimensions.get('window').width),
      positionBottom2: new Animated.Value(Dimensions.get('window').width)
    }
  }

  componentDidMount() {
    Animated.spring(
      this.state.positionBottom, {
      toValue: 0
    }
    ).start()
  }
  render() {


    return (
      <ScrollView style={styles.container} >
        <View style={styles.content_container}>
          <Text style={styles.socials_title}> Check our Socials !</Text>
          <View style={styles.image_container}>
            <Animated.Image
              style={[{ bottom: this.state.positionBottom }, styles.image]}
              source={require('../assets/images/blackDownArrow.png')}
            />
          </View>
          <View style={styles.socials_touchable}>
            <TouchableOpacity onPress={() => {
              if (Platform.OS === 'ios') {
                Linking.openURL("fb://www.facebook.com");
              }
              else /* else use Google */ {
                Linking.openURL("fb://https://www.facebook.com")
              };
              console.log(" chose happened here !")
            }}>
              <Animated.Image style={[{ bottom: this.state.positionBottom }, { margin: 10, width: 100, height: 100 }]} source={require('../assets/images/fbIcon.png')} />
            </TouchableOpacity>

          </View>

          <View style={styles.socials_touchable}>
            <TouchableOpacity onPress={() => {
              if (Platform.OS === 'ios') {
                Linking.openURL("insta://www.instagram.com");
              }
              else /* else use Google */ {
                Linking.openURL("insta://www.instagram.com")
              };
              console.log(" chose happened here !")
            }}>
              <Animated.Image style={[{ bottom: this.state.positionBottom }, { margin: 10, width: 100, height: 100 }]} source={require('../assets/images/instaIcon.png')} />
            </TouchableOpacity>

          </View><View style={styles.socials_touchable}>
            <TouchableOpacity onPress={() => {
              if (Platform.OS === 'ios') {
                Linking.openURL("https://dal-digitalagency.com");
              }
              else /* else use Google */ {
                Linking.openURL("https://dal-digitalagency.com")
              };
              console.log(" chose happened here !")
            }}>
              <Animated.Image style={[{ bottom: this.state.positionBottom }, { margin: 10, width: 100, height: 100 }]} source={require('../assets/images/webIcon.png')} />
            </TouchableOpacity>

          </View>

        </View>
      </ScrollView>
    );
  }
}


<ExpoLinksView />

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://www.facebook.com'
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#2c2f33',
  },
  button: {
    width: 30,
    height: 30,
    padding: 50,
    marginLeft: 50,
  },
  content_container: {
    flex: 1,
    flexDirection: 'column'
  },
  image_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10
  },
  image: {
    width: 50,
    height: 50,
  },
  socials_title: {
    flex: 1,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 30,
    color: '#FFFFFF'
  },
  socials_touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
