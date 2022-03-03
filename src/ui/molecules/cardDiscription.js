import React from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import {TextLarge, TextDefault, TextPrimary} from '../atom/textTitle';
import MiniCard from '../molecules/miniCard';

function CardDiscription(props) {
  return (
    <View
      style={{
        marginTop: props.top,
        width: '100%',
        height: props.height,

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
          <View style={{width: '100%'}}>
            <View style={{flexDirection: 'row'}}>
              <TextLarge name={props.title} type="default" />
              {props.viewAll != '' ? (
                <TouchableOpacity style={{marginLeft: 'auto', marginTop: -29}}>
                  <TextPrimary size={12} name={props.textViewAll} />
                </TouchableOpacity>
              ) : (
                <View></View>
              )}
            </View>
            <View style={{marginTop: 5}}>
              <TextDefault
                name={props.description}
                bold="false"
                colors="black"
              />
            </View>
            {props.next != '' ? (
              <TouchableOpacity style={{marginLeft: 'auto'}}>
                <TextPrimary size={16} name={props.next} />
              </TouchableOpacity>
            ) : (
              <View></View>
            )}

            {props.slide == 'on' ? (
              <ScrollView
                horizontal={true}
                style={{flexDirection: 'row', marginTop: 12}}>
                <MiniCard
                  imagesCard={require('../../assets/codm.jpg')}
                  title="100 CODM Coins"
                  subTitle="COD Mobile"
                  stok="999+"
                  isDiscount=""
                  priceBeforeDiscount="200.000"
                  price="100.000"
                  time="10 menit kirim"
                  totalSale="1000"
                />

                <MiniCard
                  imagesCard={require('../../assets/codm.jpg')}
                  title="100 CODM Coins"
                  subTitle="COD Mobile"
                  stok="999+"
                  isDiscount=""
                  priceBeforeDiscount="200.000"
                  price="100.000"
                  time="10 menit kirim"
                  totalSale="1000"
                />

                <MiniCard
                  imagesCard={require('../../assets/codm.jpg')}
                  title="100 CODM Coins"
                  subTitle="COD Mobile"
                  stok="999+"
                  isDiscount="true"
                  priceBeforeDiscount="200.000"
                  price="100.000"
                  time="10 menit kirim"
                  totalSale="1000"
                />

                <MiniCard
                  imagesCard={require('../../assets/codm.jpg')}
                  title="100 CODM Coins"
                  subTitle="COD Mobile"
                  stok="999+"
                  isDiscount="true"
                  priceBeforeDiscount="200.000"
                  price="100.000"
                  time="10 menit kirim"
                  totalSale="1000"
                />
              </ScrollView>
            ) : (
              <View></View>
            )}
          </View>
        </View>
        {/* ------------ */}
      </View>
    </View>
  );
}

export default CardDiscription;
