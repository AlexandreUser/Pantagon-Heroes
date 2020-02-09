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
import React, { Component, useState } from "react";
export default Card = props => {
  let alpha = false;
  if (props.big) {
    alpha = true;
  }
  const [isClicked, setClicked] = useState(false);
  cards = [
    require("../../assets/Archer.png"),
    require("../../assets/Aurora.png"),
    require("../../assets/Galeo.jpg"),
    require("../../assets/demon.gif")
  ];
  chooseCard = cards[Math.floor(Math.random() * cards.length)];
  return (
    <TouchableOpacity
      onPress={() => {
        console.log(isClicked);
        setClicked(!isClicked);
      }}
    >
      <View style={isClicked?styles.isHoved:styles.isNotHoved}>
        <View style={props.style}>
          <ImageBackground style={styles.cardgame_inside} source={chooseCard}>
            <ImageBackground
              style={[styles.cardgame, { marginTop: alpha ? -10 : -2 }]}
              source={require("../../assets/moldura.png")}
            ></ImageBackground>
          </ImageBackground>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  isNotHoved: {
    marginTop: 0
  },
  isHoved: {
    marginTop: -10
  },
  cardgame_inside: {
    width: "92%",
    height: "90%"
  },
  cardgame: {
    width: "100%",
    height: "100%"
  }
});
