import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Identify from '../TabBarScreens/Identify';
import Identify_navigator from '../navigation/Identify_navigator';
import Profile from './Profile_navigator';
import Explore from './Explore_navigator';
import Log from '../TabBarScreens/Log';
import Home_navigator from './Home_navigator';

const Tab = createBottomTabNavigator();

// Import your icons here - update the paths/names if different
const homeIconActive = require('../../assets/icons/home-active.png');
const homeIconInactive = require('../../assets/icons/home-inactive.png');

const searchIconActive = require('../../assets/icons/search-active.png');
const searchIconInactive = require('../../assets/icons/search-inactive.png');

const identifyIconActive = require('../../assets/icons/identify-active.png');
const identifyIconInactive = require('../../assets/icons/identify-inactive.png');

const LogIconActive = require('../../assets/icons/Log-active.png');
const LogIconInactive = require('../../assets/icons/Log-inactive.png');

const ProfileIconActive = require('../../assets/icons/Profile-active.png');
const ProfileIconInactive = require('../../assets/icons/Profile-inactive.png');

const Nature_Explorer = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#0D1C12', // just in case text or vector icons are used
        tabBarInactiveTintColor: '#4F946B',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home_navigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? homeIconActive : homeIconInactive}
              style={{ width: 33, height: 33 }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? searchIconActive : searchIconInactive}
              style={{ width: 33, height: 33 }}
              resizeMode="contain"
            />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: e => {
            // Prevent default behavior
            e.preventDefault();

            // 👇 Jump directly to ExploreExploreScreen inside Explore stack
            navigation.navigate('Explore', {
              screen: 'ExploreExploreScreen',
            });
          },
        })}
      />
      <Tab.Screen
        name="identify"
        component={Identify_navigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? identifyIconActive : identifyIconInactive}
              style={{ width: 33, height: 33 }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Log"
        component={Log}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? LogIconActive : LogIconInactive}
              style={{ width: 33, height: 33 }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? ProfileIconActive : ProfileIconInactive}
              style={{ width: 33, height: 33 }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Nature_Explorer;
