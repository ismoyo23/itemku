import React from 'react';
import {View} from 'react-native';
import {TextLarge, TextMini, TextLines} from '../atom/textTitle';
import FontIcon from '../atom/fontIcon';
import {BadgeBgColor} from '../atom/badge';
function CardWithoutImg(props) {
  return (
    <View
      style={{
        marginTop: 190,
        width: '100%',
        height: 160,
        position: 'absolute',

        backgroundColor: 'white',
      }}>
      {/*  */}
      <View style={{width: '100%', marginLeft: 20}}>
        <View
          style={{
            marginTop: 19,
            width: '90%',
            flexDirection: 'row',
          }}>
          <View>
            {/* header */}
            <TextLarge type="default" name={props.countDiamon} />
            <TextMini name={props.title} />
          </View>
          {/* icon heart */}
          <View style={{marginLeft: 'auto'}}>
            <FontIcon
              action={props.action}
              typeIcon="default"
              name={props.nameIcon}
              color="black"
              colorIcon={props.colorIcon}
            />
          </View>
        </View>
        <View style={{marginTop: 14, flexDirection: 'row'}}>
          <TextLarge type="price" name={props.price} />
          <View style={{marginTop: 5, marginLeft: 10}}>
            <TextMini name={props.explainPrice} />
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <BadgeBgColor name={props.discount} />

          <View style={{marginTop: 12, marginLeft: 9}}>
            <TextLines name={props.afterDiscount} />
          </View>
        </View>
      </View>
    </View>
  );
}

export default CardWithoutImg;
