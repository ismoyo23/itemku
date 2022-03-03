import React from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../molecules/headers';
import SubTitle from '../molecules/subTitle';
import MiniCard from '../molecules/miniCard';
import Footer from '../molecules/footer';

function HomeOrganims() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <View>
        {/* header */}
        <Header />

        {/* --------- */}
        <View style={{marginLeft: 19, marginTop: 14, opacity: 0.8}}>
          {/* large */}
          <SubTitle name="Termurah Seluruh Indonesia" />

          <ScrollView
            horizontal={true}
            style={{flexDirection: 'row', marginTop: 12}}>
            {/* card */}
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

            {/* ======================================================================= */}
          </ScrollView>
        </View>

        <View style={{marginLeft: 19, marginTop: 14, opacity: 0.8}}>
          {/* large */}
          <SubTitle name="Product steam terpopuler" />

          <ScrollView
            horizontal={true}
            style={{flexDirection: 'row', marginTop: 12}}>
            {/* card */}
            <MiniCard
              imagesCard={require('../../assets/dota.jpg')}
              title="100 Dota Coins"
              subTitle="Dota"
              stok="999+"
              isDiscount="true"
              priceBeforeDiscount="200.000"
              price="100.000"
              time="10 menit kirim"
              totalSale="1000"
            />

            <MiniCard
              imagesCard={require('../../assets/dota.jpg')}
              title="100 Dota Coins"
              subTitle="Dota"
              stok="999+"
              isDiscount="true"
              priceBeforeDiscount="200.000"
              price="100.000"
              time="10 menit kirim"
              totalSale="1000"
            />

            <MiniCard
              imagesCard={require('../../assets/dota.jpg')}
              title="100 Dota Coins"
              subTitle="Dota"
              stok="999+"
              isDiscount="true"
              priceBeforeDiscount="200.000"
              price="100.000"
              time="10 menit kirim"
              totalSale="1000"
            />

            <MiniCard
              imagesCard={require('../../assets/dota.jpg')}
              title="100 Dota Coins"
              subTitle="Dota"
              stok="999+"
              isDiscount="true"
              priceBeforeDiscount="200.000"
              price="100.000"
              time="10 menit kirim"
              totalSale="1000"
            />

            <MiniCard
              imagesCard={require('../../assets/dota.jpg')}
              title="100 Dota Coins"
              subTitle="Dota"
              stok="999+"
              isDiscount="true"
              priceBeforeDiscount="200.000"
              price="100.000"
              time="10 menit kirim"
              totalSale="1000"
            />

            {/* ======================================================================= */}
          </ScrollView>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default HomeOrganims;
