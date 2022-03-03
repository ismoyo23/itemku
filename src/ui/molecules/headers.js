import React from 'react';
import {ImagesHeader} from '../atom/images';
import {View} from 'react-native';
function Header(props) {
  return (
    <View
      style={{
        width: '100%',
        height: 90,
        borderBottomColor: '#c9ced6',
        borderBottomWidth: 1,
      }}>
      <View style={{width: 200}}>
        <ImagesHeader
          Width="180"
          Height="79"
          Name={require('../../assets/logoItemku.png')}
        />
      </View>
    </View>
  );
}

export default Header;
