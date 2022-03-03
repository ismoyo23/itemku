import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, View} from 'react-native';

let FontIcon = props => {
  return (
    <View>
      {props.typeIcon == 'with-bg' ? (
        <TouchableOpacity
          onPress={props.action}
          style={{
            height: 46,
            width: 46,
            backgroundColor: 'black',
            opacity: 0.8,
            borderRadius: 8,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name={props.name}
            style={{fontWeight: 'bold'}}
            size={22}
            color={props.color}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={props.action}>
          <Icon name={props.name} size={22} color={props.colorIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FontIcon;
