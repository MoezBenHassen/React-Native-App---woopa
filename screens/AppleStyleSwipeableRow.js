import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View, I18nManager, Platform, Linking, TouchableOpacity, TouchableNativeFeedback,TouchableHighlight } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';


import Swipeable from 'react-native-gesture-handler/Swipeable';
import Communications from 'react-native-communications'
import { Ionicons, AntDesign, Entypo, Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';


export default class AppleStyleSwipeableRow extends Component {
  renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    /* REPLACED WITH THE Communications LIBRARY 
    const pressHandler = () => {
        this.close();
  
        let phoneNumber ='tel:${22887300}';
  
        if(Platform.O === 'android'){
            this.phoneNumber = 'tel:${22887300}';
        }
        Linking.openURL(phoneNumber);
      };
      */
    return (
      <RectButton style={styles.leftAction} onPress={this.close}>
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{ translateX: trans }],
            },]}
            onPress={() => Communications.phonecall('22887300', true)}
        >
   
        <MaterialIcons name="phone" size={35} color="white"/>
        </Animated.Text>
      </RectButton>
    );
  };

  //Right action for Action
  renderRightAction = (text, color, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    const pressHandler = () => {
        this.close()
        alert('action');
    }
    /* REPLACED WITH THE Communication library
    const pressHandler = () => {
      this.close();

      let phoneNumber ='tel:${22887300}';

      if(Platform.O === 'android'){
          this.phoneNumber = 'tel:${22887300}';
      }
      Linking.openURL(phoneNumber);
    };*/ 
    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
        <RectButton
          style={[styles.rightAction, { backgroundColor: color}]}
          onPress={ ()=>{Linking.openURL('whatsapp://send?text=hello&phone=21654103201')} }>
         <FontAwesome name="whatsapp" size={35} color="white"/>  
        </RectButton>        
      </Animated.View>
    );
  };

  //Right action for TEXTING BUTTON
  renderRightActionTexting = (text, color, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    }); 
    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
        <RectButton
          style={[styles.rightAction, { backgroundColor: color}]}
          onPress={() => Communications.text ('22887300')}>
          <MaterialIcons name="message" size={35} color="white"/>  
        </RectButton>        
      </Animated.View>
    );
  };
  
  //Right action for MAILING BUTTON
  renderRightActionMailing = (text, color, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    }); 
    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
        <RectButton
          style={[styles.rightAction, { backgroundColor: color}]}
          onPress={() => Communications.email(['moezbh.mbh@gmail.com',''], null,null,  'SUBJECT ', 'BODY')}>
          <MaterialIcons name="email" size={35} color="white"/>
        </RectButton>        
      </Animated.View>
    );
  };
  renderRightActions = progress => (
    <View style={{ width: 192, flexDirection: I18nManager.isRTL? 'row-reverse' : 'row' }}>
      {this.renderRightAction('Whatsapp/msnger', '#25D366', 192, progress)}
      {this.renderRightActionTexting('Sms', '#ffab00', 128, progress)}
      {this.renderRightActionMailing('eMail', '#dd2c00', 64, progress)}
    </View>
  );
  updateRef = ref => {
    this._swipeableRow = ref;
  };
  close = () => {
    this._swipeableRow.close();
  };
  render() {
    const { children } = this.props;
    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        leftThreshold={30}
        rightThreshold={40}
        renderLeftActions={this.renderLeftActions}
        renderRightActions={this.renderRightActions}>
        {children}
      </Swipeable>
    );
  }
}


const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: '#f99e23',
    justifyContent: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});