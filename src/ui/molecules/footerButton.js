import React from 'react';
import {View} from 'react-native';
import Button from '../atom/button';

function FooterButton(props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        height: 60,
        marginTop: 12,
      }}>
      <Button
        name={props.name}
        action={props.action}
        color={props.color}
        bgColor={props.bgColor}
      />
    </View>
  );
}

export default FooterButton;
