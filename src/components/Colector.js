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

export default Colector = () => {
  return (
    <>
      <View style={styles.holdButtons}>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.TextButton}>Usar</Text>
          </View>
        </TouchableOpacity>
      </View>
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
        <View style={styles.deckHolder}>
          <Card style={styles.cardgame} />
          <Card style={styles.cardgame} />
          <Card style={styles.cardgame} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  TextButton: {
    fontWeight: "bold",
    marginTop: 10,
    color: "white",
    fontSize: 20
  },
  holdButtons: {
    alignSelf: "center"
  },
  button: {
    marginTop: 0,
    alignItems: "center",
    width: 150,
    height: 50,
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
  cardgame: {
    marginTop: 10,
    alignSelf: "center",
    marginRight: 10,
    width: 70,
    height: 110
  },
  container: {
    alignSelf: "center",
    marginTop: 30,
    alignItems: "center",
    width: 280,
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
    alignSelf: "center",
    marginTop: 10,
    marginRight: 0,
    flexDirection: "row"
  }
});
