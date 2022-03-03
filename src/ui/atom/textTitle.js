import React from 'react';
import {Text} from 'react-native';
// you should declaration props name, colors
// name type is large, medium, mini, mini-lineTought

export let TextLarge = props => {
  return (
    <Text
      style={{
        color: props.type == 'price' ? 'orange' : 'black',
        fontWeight: 'bold',
        fontSize: 19,
      }}>
      {props.name}
    </Text>
  );
};

export let TextMedium = props => {
  return (
    <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
      {props.name}
    </Text>
  );
};

export let TextMini = props => {
  return <Text style={{color: '#a3a8a5', fontSize: 14}}>{props.name}</Text>;
};

export let TextLines = props => {
  return (
    <Text
      style={{
        color: '#a3a8a5',
        fontSize: 12,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
      }}>
      {props.name}
    </Text>
  );
};

export let TextDefault = props => {
  return <Text style={{color: 'black', fontSize: 14}}>{props.name}</Text>;
};

export let TextPrimary = props => {
  return (
    <Text
      style={{
        marginTop: 31,
        color: '#1973b0',
        fontWeight: 'bold',
        fontSize: props.size,
      }}>
      {props.name}
    </Text>
  );
};
