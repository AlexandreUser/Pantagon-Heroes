import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import React, { Component } from "react";
import Card from "./cardHolder";
export default Deck = (props) => {

  return (
    <View style={styles.container}>
      <View style={styles.deckHolder}>
        <Card style={styles.cardgame} />
        <Card style={styles.cardgame} />
        <Card style={styles.cardgame} />
      </View>
      <View style={styles.deckHolder}>
        <Card style={styles.cardgame} />
        <Card style={styles.cardgame} />
        <Card style={styles.cardgame} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardgame: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    width: 70,
    height: 110
  },
  container: {
    alignSelf: "center",
    marginTop: 30,
    alignItems: "center",
    width: 280,
    height: 250,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    shadowOffset: { width: 20, height: 20 },
    backgroundColor: "#310069"
  },
  deckHolder: {
    marginLeft: 10,
    marginTop: 5,
    flexDirection: "row"
  }
});
