import React, {useState, useCallback, useMemo, useRef} from 'react';
import HightCard from '../molecules/hightCard';
import CardWithoutImg from '../molecules/cardWithoutImg';
import CardDescription from '../molecules/cardDiscription';
import FooterButton from '../molecules/footerButton';
import {ScrollView, View, Alert} from 'react-native';
import BottomShet from '../molecules/bottomShet';
function DetailOrganism() {
  let [count, setCount] = useState(0);
  let [icon, setIcon] = useState('heart-o');
  let [popUp, setPopUp] = useState(false);
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

  let showAction = event => {
    event.preventDefault;
    if (popUp == false) {
      setPopUp(true);
    } else {
      setPopUp(false);
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
          action={showAction}
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

      <BottomShet
        bottomShet={popUp}
        action={showAction}
        discription="Ladies and gentlemen, bullying may seem like a small problem for some people. Most people may not realize that the damage caused by bullying can be so serious. It can be as serious as “death” in extreme cases. If you think that bullying is not a serious matter to deal with just because it merely hurt “feelings” then I have to tell you that you are completely wrong. This “merely hurt your feelings” thing can be the beginning of various worse scenarios such as physical assault, suicide, or any other kinds of violent acts carried out in the name of revenge. Ladies and gentlemen, bullying may seem like a small problem for some people. Most people may not realize that the damage caused by bullying can be so serious. It can be as serious as “death” in extreme cases. If you think that bullying is not a serious matter to deal with just because it merely hurt “feelings” then I have to tell you that you are completely wrong. This “merely hurt your feelings” thing can be the beginning of various worse scenarios such as physical assault, suicide, or any other kinds of violent acts carried out in the name of revenge. Ladies and gentlemen, bullying may seem like a small problem for some people. Most people may not realize that the damage caused by bullying can be so serious. It can be as serious as “death” in extreme cases. If you think that bullying is not a serious matter to deal with just because it merely hurt “feelings” then I have to tell you that you are completely wrong. This “merely hurt your feelings” thing can be the beginning of various worse scenarios such as physical assault, suicide, or any other kinds of violent acts carried out in the name of revenge."
      />

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
