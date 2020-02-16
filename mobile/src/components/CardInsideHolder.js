import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  ScrollView,
  View,
  AsyncStorage
} from "react-native";
import React, { Component, useState, useEffect } from "react";
export default Card = props => {
  let alpha = false;
  if (props.big) {
    alpha = true;
  }
  cards = [
    0,
    require("../../assets/Archer.png"),
    require("../../assets/Aurora.png"),
    require("../../assets/Galeo.jpg"),
    require("../../assets/demon.gif")
  ];
  chooseCard = cards[props.id];
  return (
    <View style={props.style}>
      <ImageBackground style={styles.cardgame_inside} source={chooseCard}>
        <ImageBackground
          style={[styles.cardgame, { marginTop: alpha ? -10 : -2 }]}
          source={require("../../assets/moldura.png")}
        ></ImageBackground>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  isNotHoved: {
    marginTop: 0
  },
  isHoved: {},
  cardgame_inside: {
    marginTop: -10,
    width: "92%",
    height: "90%"
  },
  cardgame: {
    width: "100%",
    height: "100%"
  }
});
