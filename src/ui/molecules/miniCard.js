import React from 'react';
import {ImagesCard} from '../atom/images';
import {TextLarge, TextMedium, TextMini, TextLines} from '../atom/textTitle';
import {BadgeBorder, BadgeBgColor, BadgeSmoth} from '../atom/badge';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function MiniCard(props) {
  let navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('detailPage')}
      style={{
        marginLeft: 4,
        marginTop: 9,
        backgroundColor: 'white',
        shadowColor: '#33ffd6',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        width: 170,
        height: 340,
        borderRadius: 10,
      }}>
      <ImagesCard
        Width="100%"
        Height="90"
        type="active"
        Name={props.imagesCard}
      />

      <View style={{marginLeft: 10, marginTop: 9}}>
        {/* medium */}
        <TextMedium colors="black" name={props.title} />
        {/* mini */}
        <TextMini colors="#a3a8a5" name={props.subTitle} />

        {/* badge border */}
        <BadgeBorder name={'Stok: ' + props.stok} />

        {props.isDiscount != '' ? (
          <View style={{flexDirection: 'row', marginTop: 7}}>
            {/* badge bg */}
            <BadgeBgColor name="55%" />

            <View style={{marginTop: 14, marginLeft: 9}}>
              {/* mini line Tought*/}
              <TextLines name="RP.200.000" colors="#a3a8a5" />
            </View>
          </View>
        ) : (
          <View></View>
        )}

        <View style={{marginTop: 12}}>
          {/* large */}
          <TextLarge
            type="large"
            name={'RP.' + props.priceBeforeDiscount}
            type="price"
          />
        </View>
        {/* badge-smoth */}
        <BadgeSmoth
          colors="#1cc7a5"
          colorText="green"
          name={props.time + ' menit kirim'}
        />

        <View style={{position: 'absolute', marginTop: 216}}>
          {/* mini */}

          <TextMini name={props.totalSale + ' product terjual'} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default MiniCard;
