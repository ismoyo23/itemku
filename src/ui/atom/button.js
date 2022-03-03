import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
// '#ff8c00'
let Button = props => {
  return (
    <TouchableOpacity
      onPress={props.action}
      style={{
        backgroundColor: props.bgColor,
        height: 40,
        width: 300,
        borderRadius: 10,
        display: 'flex',

        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontWeight: 'bold', color: props.color}}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default Button;
