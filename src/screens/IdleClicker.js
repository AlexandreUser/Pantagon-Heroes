import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import React, {Component} from 'react';
export default Card = () => {
  return (
    <View style={styles.body}>
      <Image
        source={require('../../assets/2.png')}
        style={styles.logoImage}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  logoImage: {
    width: '70%',
    height: '70%',
  },
  body: {
    alignItems: 'center',
    width: '100%',
    height: 200,
  },
});
