import React from 'react';
import {Modal, View, TouchableOpacity, ScrollView} from 'react-native';
import {TextLarge, TextDefault} from '../atom/textTitle';
import FontIcon from '../atom/fontIcon';

function BottomShet(props) {
  return (
    <TouchableOpacity onPress={props.action}>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={props.bottomShet}
        onRequestClose={props.action}>
        <View
          style={{
            flex: 1,

            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              height: 500,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.32,
              shadowRadius: 5.46,

              elevation: 9,
            }}>
            <View style={{marginLeft: 20, marginRight: 20, marginTop: 18}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TextLarge name="Diskripsi" type="default" />
                <FontIcon
                  name="times"
                  typeIcon=""
                  colorIcon="black"
                  action={props.action}
                />
              </View>
              <ScrollView style={{height: 450, marginTop: 23}}>
                <TextDefault name={props.discription} />
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
}

export default BottomShet;
