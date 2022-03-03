import React from 'react';
import {TextMini} from '../atom/textTitle';
import {View} from 'react-native';

function Footer() {
  return (
    <View
      style={{
        backgroundColor: 'white',
        marginTop: 10,
        width: '100%',
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: '#c9ced6',
        borderTopWidth: 1,
      }}>
      <TextMini name="2021 Create by M Ismoyo Setyonowidagdo" />
    </View>
  );
}

export default Footer;
