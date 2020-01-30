import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";
import Menu from "../components/menu";
import UserBar from "../components/userBar";
import React, { Component } from "react";
import Carousel from "simple-carousel-react-native";
import Card from "../components/cardHolder";
export default cardChoose = () => {
  function _renderCards() {
    let qtd_cards = [0, 1, 2, 3, 4, 5];
    return qtd_cards.map(card => {
      return <Card big={true} style={styles.cardgame} />;
    });
  }
  return (
    <View style={styles.body}>
      <UserBar />
      <View style={styles.container}>
        <Carousel
          backgroundColor={"transparent"}
          width={380}
          height={400}
          showBubbles={false}
        >
          {_renderCards()}
        </Carousel>

        <View style={styles.moneyHolder}>
          <Text style={styles.MoneyButton}>999</Text>
          <Image
            style={styles.smallImage}
            source={require("../../assets/010-crystal.png")}
          ></Image>
        </View>

        <TouchableOpacity onPress={() => {}}>
          <View style={styles.buyButton}>
            <Text style={styles.TextButton}> Comprar</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  moldura:{
    marginLeft: -10,
    marginTop: 0,
    width: 260,
    height: 420
  },
  smallImage: {
    marginTop: 10,
    width: 30,
    height: 30
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
    marginRight:5,
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
    backgroundColor: "#310069"
  },
  moneyHolder: {
    flexDirection:"row",
    alignItems: "center",

    height: 40,
    width: "100%",
    color: "black"
  },
  cardgame: {
    marginLeft: 80,
    marginTop: 30,
    width: 240,
    height: 400
  },
  container: {
    alignItems: "center",
    height: "81%"
  },
  logoImage: {
    marginTop: 20,
    width: 250,
    height: 150,
    marginBottom: 100
  },
  body: {
    backgroundColor: "#280154",
    alignItems: "center",
    width: "100%",
    height: "100%"
  }
});
