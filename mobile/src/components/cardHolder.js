import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
export default Card = props => {
  let alpha = false;
  if (props.big) {
    alpha = true;
  }
  cards = [
    require("../../assets/Archer.png"),
    require("../../assets/Aurora.png"),
    require("../../assets/Galeo.jpg"),
    require("../../assets/demon.gif"),
  ];
  chooseCard = cards[Math.floor(Math.random() * cards.length)];
  return (
    <TouchableOpacity onPress={Actions.detailScreen}>
      <View style={props.style}>
        <ImageBackground style={styles.cardgame_inside} source={chooseCard}>
          <ImageBackground
            style={[styles.cardgame, { marginTop: alpha ? -10 : -2 }]}
            source={require("../../assets/moldura.png")}
          ></ImageBackground>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardgame_inside: {
    width: "92%",
    height: "90%"
  },
  cardgame: {
    width: "100%",
    height: "100%"
  }
});
