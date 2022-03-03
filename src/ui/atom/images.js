import React from 'react';
import {Image} from 'react-native';
// you should declaration props Width, Height, image

export let ImagesHeader = props => {
  return <Image style={{width: '100%', height: 79}} source={props.Name} />;
};

export let ImagesCard = props => {
  return (
    <Image
      style={{
        width: '100%',
        height: props.fullHeight == true ? '100%' : 90,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}
      source={props.Name}
    />
  );
};
