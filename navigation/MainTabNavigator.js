import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },{
    defaultNavigationOptions: {
      headerTintColor: '#444',
      headerStyle: {
        backgroundColor: 'pink'
      }
    }
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarOptions: {
    activeTintColor: "gray", 
    inactiveTintColor: "white", 
    indicatorStyle :{
          backgroundColor:'red'
    },
    style: {backgroundColor: 'pink'}
  },
  tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: {
      screen:LinksScreen,
    },
    
  },{
    defaultNavigationOptions: {
      activeTintColor: 'white',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: 'pink'
      },style: {backgroundColor: 'pink'}
    }
  },
  
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarOptions: {
    activeTintColor: "gray", 
    inactiveTintColor: "white", 
    indicatorStyle :{
          backgroundColor:'red'
    },
    style: {backgroundColor: 'pink'}
  },
  tabBarIcon: ({ focused, tintColor}) => (
    <TabBarIcon color = {tintColor} focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  )
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: 'pink'
      },style: {backgroundColor: 'pink'}
    }
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  
  headerStyle:{
    backgroundColor: 'pink',
    headerTintColor: '#fff'
  },
  tabBarOptions: {
    activeTintColor: "gray", 
    inactiveTintColor: "white", 
    indicatorStyle :{
          backgroundColor:'red'
    },
    style: {backgroundColor: 'pink'}
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
