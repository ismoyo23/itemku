import React, {useState} from 'react';
import HightCard from '../molecules/hightCard';
import CardWithoutImg from '../molecules/cardWithoutImg';
import CardDescription from '../molecules/cardDiscription';
import FooterButton from '../molecules/footerButton';
import {ScrollView, View, Alert} from 'react-native';
function DetailOrganism() {
  let [count, setCount] = useState(0);
  let [icon, setIcon] = useState('heart-o');
  let troliAction = () => {
    setCount(count + 1);
    Alert.alert('Success', 'Produk sudah di tambahkan ke keranjang');
  };
  let changeIcon = event => {
    event.preventDefault();
    if (icon == 'heart-o') {
      setIcon('heart');
    } else {
      setIcon('heart-o');
    }
  };
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <View>
        {/* headder image */}
        {/* action 1, action 2, action 3 is function for redirect page */}
        <HightCard
          countCard={count}
          icon1="arrow-left"
          icon2="share-alt"
          icon3="shopping-cart"
          backgroundImage={require('../../assets/dota.jpg')}
        />

        {/* card title */}
        <CardWithoutImg
          countDiamon="300 Diamon"
          colorIcon={icon == 'heart-o' ? 'black' : 'red'}
          nameIcon={icon}
          price="RP.100.000"
          explainPrice="Per 1 Top Up"
          discount="40%"
          afterDiscount="RP.50.0000"
          title="Dota"
          action={changeIcon}
        />

        {/* description */}
        <CardDescription
          title="Diskripsi produk"
          description="Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan.."
          next="Selengkapnya"
          top={170}
          height={150}
          viewAll=""
        />

        {/* list card*/}
        <CardDescription
          title="Pengiriman Tercepat"
          description="Product yang mengganti Garansi hingga 1 jam"
          next=""
          top={10}
          height={451}
          slide="on"
          viewAll="true"
          textViewAll="Lihat Semua"
        />
      </View>

      {/* card list */}

      <FooterButton
        action={troliAction}
        name="tambah ke troli"
        color="white"
        bgColor="#ff8c00"
      />
    </ScrollView>
  );
}

export default DetailOrganism;
