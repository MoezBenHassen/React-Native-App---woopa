import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { ScrollView, StyleSheet, View,Text, Linking,  Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { SocialIcon, Divider, Button } from 'react-native-elements';
//import Icon from 'react-native-ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';

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
          <TouchableOpacity style={styles.link_container} >
            <SocialIcon
              //Social Icon using react-native-elements
              button
              //To make a button type Social Icon
              title=" facebook "
              light
              //Title of Social Button
              type="facebook"
              //Type of Social Icon
              onPress={ ()=>{Linking.openURL('fb://www.facebook.com')} }
            />
            </TouchableOpacity>
            <Text>
           
            </Text>
          <TouchableOpacity style={styles.link_container}>
            <SocialIcon
              //Social Icon using react-native-elements
              button
              light
              //To make a button type Social Icon
              title=" instagram "
              //Title of Social Button
              type="instagram"
              //Type of Social Icon
              onPress={ ()=>{Linking.openURL('instagram://user?username=dal.digitalagency')} }
            />
            </TouchableOpacity>
         
          <TouchableOpacity style={styles.link_container}>
            <SocialIcon
              //Social Icon using react-native-elements
              button
              light
              //To make a button type Social Icon
              title=" website "
              //Title of Social Button
              type="wordpress"
              //Type of Social Icon
              onPress={ ()=>{Linking.openURL('https://dal-digitalagency.com')} }
            />
            </TouchableOpacity>
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
    width:1000,
    height: 1,
    backgroundColor: 'gray',
 
  },
  button: {
    width: 30,
    height: 30,
    padding: 50,
    marginLeft:50,
  },
  content_container: {
    flex: 1,
    flexDirection: 'column'
  },
  image_container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10
  },
  image:{
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
    textAlign:'center',
    paddingBottom: 30,
    color: '#FFFFFF'
  }
});
