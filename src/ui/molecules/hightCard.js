import React from 'react';
import {View, ImageBackground} from 'react-native';
import FontIcon from '../atom/fontIcon';
import {BadgeBgColor} from '../atom/badge';
import {useNavigation} from '@react-navigation/native';
function HightCard(props) {
  let navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        style={{width: '100%', height: 190}}
        source={props.backgroundImage}>
        {/* header icon */}

        <View
          style={{
            flexDirection: 'row',
            marginLeft: 14,

            marginTop: 9,
            width: '90%',
          }}>
          <FontIcon
            typeIcon="with-bg"
            action={() => navigation.navigate('homePage')}
            name={props.icon1}
            color="white"
          />

          <View
            style={{
              flexDirection: 'row',
              marginLeft: 'auto',
              justifyContent: 'space-between',
              width: 100,
            }}>
            <FontIcon
              typeIcon="with-bg"
              action={() => navigation.navigate('detailPage')}
              name={props.icon2}
              color="white"
            />

            <FontIcon
              typeIcon="with-bg"
              action={() => navigation.navigate('detailPage')}
              name={props.icon3}
              color="white"
            />
            {props.countCard < 1 ? (
              <View style={{position: 'absolute'}}></View>
            ) : (
              <View
                style={{position: 'absolute', marginLeft: 80, marginTop: -18}}>
                <BadgeBgColor name={props.countCard} width={29} />
              </View>
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default HightCard;
