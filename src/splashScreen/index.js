import React, {useEffect} from 'react';
import {View} from 'react-native';
import {ImagesCard} from '../ui/atom/images';
import {useNavigation} from '@react-navigation/native';

function SplashScreen() {
  let navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('homePage');
    }, 1000);
  }, []);
  return (
    <View style={{width: '100%', height: '100%'}}>
      <ImagesCard fullHeight={true} Name={require('../assets/splash.png')} />
    </View>
  );
}

export default SplashScreen;
