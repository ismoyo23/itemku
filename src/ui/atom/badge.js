import React from 'react';
import {View, Text} from 'react-native';
// you should declaration collorText, collor, name

export let BadgeBorder = props => {
  return (
    <View
      style={{
        marginTop: 12,
        borderColor: '#10c942',
        borderWidth: 2,
        width: 89,
        height: 26,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: '#10c942'}}>{props.name}</Text>
    </View>
  );
};

export let BadgeBgColor = props => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        marginTop: 9,
        borderColor: 'transparent',
        borderWidth: 2,
        borderWidth: 2,
        width: props.width == null ? 49 : props.width,
        height: 26,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white'}}>{props.name}</Text>
    </View>
  );
};

export let BadgeSmoth = props => {
  return (
    <View
      style={{
        opacity: 0.8,
        backgroundColor: props.colors,
        marginTop: 9,
        borderColor: 'transparent',
        borderWidth: 2,

        borderWidth: 2,
        width: 120,
        height: 24,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: props.colorText}}>{props.name}</Text>
    </View>
  );
};
