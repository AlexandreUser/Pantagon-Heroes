import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
} from "react-native";
import Menu from "../components/menu";
import UserBar from "../components/userBar";
import Deck from "../components/deck";
import Colector from "../components/Colector";

import React, { Component } from "react";
export default deckChoose = () => {
  return (
    <View style={styles.body}>
      <UserBar />
        <ScrollView style={styles.container}>
            <View style={styles.separatorDeck}>
              <Deck quantity={1} />
            </View>

            <Colector />
        </ScrollView>
        <Menu />

    </View>
  );
};

const styles = StyleSheet.create({
  separatorDeck: {
    marginBottom: 20
  },
  TextButton: {
    fontWeight: "bold",
    marginTop: 10,
    color: "white",
    fontSize: 20
  },
  MoneyButton: {
    fontWeight: "bold",
    marginTop: 10,
    color: "yellow",
    fontSize: 20
  },
  buyButton: {
    marginTop: 10,
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
    backgroundColor: "#3c0080"
  },

  cardgame: {
    marginTop: 10,
    width: 250,
    height: 400
  },

  container: {
    minHeight:"80%",
    width: "100%",
    height: "80%"
  },
 
  logoImage: {
    marginTop: 20,
    width: 250,
    height: 150,
    marginBottom: 100
  },
  body: {
    backgroundColor: "#280154",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
    height: "100%"
  }
});
