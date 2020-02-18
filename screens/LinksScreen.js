import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { ScrollView, StyleSheet, View, Text, Linking, Image } from 'react-native';
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

export default function LinksScreen() {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content_container}>
        <Text style={styles.socials_title}> Check our Socials !</Text>
        <View style={styles.image_container}>
          <Image
            style={styles.image}
            source={require('../assets/images/blackDownArrow.png')}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => {
            if (Platform.OS === 'ios') {
              Linking.openURL("maps://www.google.com/maps/place/Carrefour+Ksar+Said/@36.8175313,10.1019402,17z/data=!3m1!4b1!4m5!3m4!1s0x12fd325deeb0cfc3:0x380dc7e055dcc97!8m2!3d36.817527!4d10.1041342");
            }
            else /* else use Google */ {
              Linking.openURL("https://www.google.com/maps/place/Carrefour+Ksar+Said/@36.8175313,10.1019402,17z/data=!3m1!4b1!4m5!3m4!1s0x12fd325deeb0cfc3:0x380dc7e055dcc97!8m2!3d36.817527!4d10.1041342")
            };
            console.log(" chose happened here !")
          }}>
            <Image style={{ margin: 10, width: 100, height: 100 }} source={require('../assets/images/fbIcon.png')} />
          </TouchableOpacity>

        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => {
            if (Platform.OS === 'ios') {
              Linking.openURL("maps://www.google.com/maps/place/Carrefour+Ksar+Said/@36.8175313,10.1019402,17z/data=!3m1!4b1!4m5!3m4!1s0x12fd325deeb0cfc3:0x380dc7e055dcc97!8m2!3d36.817527!4d10.1041342");
            }
            else /* else use Google */ {
              Linking.openURL("https://www.google.com/maps/place/Carrefour+Ksar+Said/@36.8175313,10.1019402,17z/data=!3m1!4b1!4m5!3m4!1s0x12fd325deeb0cfc3:0x380dc7e055dcc97!8m2!3d36.817527!4d10.1041342")
            };
            console.log(" chose happened here !")
          }}>
            <Image style={{ margin: 10, width: 100, height: 100 }} source={require('../assets/images/instaIcon.png')} />
          </TouchableOpacity>

        </View><View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => {
            if (Platform.OS === 'ios') {
              Linking.openURL("maps://www.google.com/maps/place/Carrefour+Ksar+Said/@36.8175313,10.1019402,17z/data=!3m1!4b1!4m5!3m4!1s0x12fd325deeb0cfc3:0x380dc7e055dcc97!8m2!3d36.817527!4d10.1041342");
            }
            else /* else use Google */ {
              Linking.openURL("https://www.google.com/maps/place/Carrefour+Ksar+Said/@36.8175313,10.1019402,17z/data=!3m1!4b1!4m5!3m4!1s0x12fd325deeb0cfc3:0x380dc7e055dcc97!8m2!3d36.817527!4d10.1041342")
            };
            console.log(" chose happened here !")
          }}>
            <Image style={{ margin: 10, width: 100, height: 100 }} source={require('../assets/images/webIcon.png')} />
          </TouchableOpacity>

        </View>

      </View>
    </ScrollView>
  );
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
  divider: {
    width: 1000,
    height: 1,
    backgroundColor: '#808080',

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
  link_container: {
    flex: 1,
    width: '100%',
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  socials_title: {
    flex: 1,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 30,
    color: '#FFFFFF'
  }
});
