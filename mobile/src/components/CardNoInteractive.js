import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  ScrollView,
  View,
  AsyncStorage,
  TouchableOpacity
} from "react-native";
import React, { Component, useState } from "react";
export default Card = props => {
  let alpha = false;
  if (props.big) {
    alpha = true;
  }
  const [isClicked, setClicked] = useState(props.clicked);
  cards = [
    0,
    require("../../assets/Archer.png"),
    require("../../assets/Aurora.png"),
    require("../../assets/Galeo.jpg"),
    require("../../assets/demon.gif")
  ];
  chooseCard = cards[props.id];
  return (
    <TouchableOpacity
      onPress={() => {
        props.onclicked(props.id);
        setClicked(!isClicked);
      }}
    >
      <View style={isClicked ? styles.isHoved : styles.isNotHoved}>
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
