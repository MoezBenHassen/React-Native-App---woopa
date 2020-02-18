import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

import mapScreen from '../screens/mapsScreen';


const config = Platform.select({
  web: { headerMode: 'float' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,

  }, {
  headerMode: 'screen',
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {
      backgroundColor: '#35393e'
    }
  }
},
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarOptions: {
    activeTintColor: "#f99e23",
    inactiveTintColor: "#808080",
    indicatorStyle: {
      backgroundColor: 'red'
    },
    style: { backgroundColor: '#35393e' }
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
      screen: LinksScreen,
    },

  }, {
  headerMode: 'float',
  defaultNavigationOptions: {
    activeTintColor: '#f99e23',
    headerTintColor: '#f99e23',
    headerStyle: {
      backgroundColor: '#35393e'
    }, style: { backgroundColor: '#35393e' }
  }
},

  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarOptions: {
    activeTintColor: "#f99e23",
    inactiveTintColor: "#808080",
    indicatorStyle: {
      backgroundColor: 'red'
    },
    style: { backgroundColor: '#35393e' }
  },
  tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon color={tintColor} focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
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
    headerMode: 'float',
    defaultNavigationOptions: {
      title: 'Settings',
      headerTintColor: '#f99e23',
      headerStyle: {
        backgroundColor: '#35393e'
      }, style: { backgroundColor: '#35393e' }
    }
  },
  config
);




SettingsStack.navigationOptions = {
  tabBarLabel: 'Contact',

  headerStyle: {
    backgroundColor: '#35393e',
    headerTintColor: '#FFFFFF'
  },
  tabBarOptions: {
    activeTintColor: "#f99e23",
    inactiveTintColor: "#808080",
    indicatorStyle: {
      backgroundColor: 'red'
    },
    style: { backgroundColor: '#35393e' }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'} />
  ),
};

SettingsStack.path = '';


const mapStack = createStackNavigator(
  {
    Links: {
      screen: mapScreen,
    },

  }, {
  headerMode: 'float',
  defaultNavigationOptions: {
    activeTintColor: '#f99e23',
    headerTintColor: '#f99e23',
    headerStyle: {
      backgroundColor: '#35393e'
    }, style: { backgroundColor: '#35393e' }
  }
},

  config
);

mapStack.navigationOptions = {
  tabBarLabel: 'map',

  headerStyle: {
    backgroundColor: '#35393e',
    headerTintColor: '#FFFFFF'
  },
  tabBarOptions: {
    activeTintColor: "#f99e23",
    inactiveTintColor: "#808080",
    indicatorStyle: {
      backgroundColor: 'red'
    },
    style: { backgroundColor: '#35393e' }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'} />
  ),
};

mapStack.path = '';


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
  mapStack,
});

tabNavigator.path = '';

export default tabNavigator;
