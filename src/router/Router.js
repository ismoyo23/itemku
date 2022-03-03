import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import homePage from '../component/pages/homePages';
import detailPage from '../component/pages/detailPages';

let Router = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="homePage">
        <Stack.Screen
          options={{headerShown: false}}
          name="homePage"
          component={homePage}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="detailPage"
          component={detailPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
