import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import ContactScreen from '../screens/ContactScreen';

import mapScreen from '../screens/mapsScreen';
import { fromLeft } from 'react-navigation-transitions';




const config = Platform.select({
  web: { headerMode: 'float' },
  default: {},
});



/* HOME SECTION */
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

/* LINK SECTION */
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

/* CONTACT SECTION */
const ContactStack = createStackNavigator(
  {
    Settings: {
      screen: ContactScreen,
    },
    initialRouteName: 'Settingsscreen',
    transitionConfig: () => fromLeft()
  },
  {
    headerMode: 'float',
    defaultNavigationOptions: {
      title: 'Contact',
      headerTintColor: '#f99e23',
      headerStyle: {
        backgroundColor: '#35393e'
      },
      style: { backgroundColor: '#35393e' },

    },

  },
  config
);




ContactStack.navigationOptions = {
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

ContactStack.path = '';

/* MAP SECTION */
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
  tabBarLabel: 'Map',

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
  ContactStack,
  mapStack,
});

tabNavigator.path = '';

export default tabNavigator;
