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
import Carousel from "simple-carousel-react-native"
export default cardChoose = () => {
  function _renderCards() {
    let qtd_cards = [0, 1, 2, 3, 4, 5];
    return qtd_cards.map(card => {
      return (
        <Image
          style={styles.cardgame}
          source={require("../../assets/moldura.png")}
        ></Image>
      );
    });
  }
  return (
    <View style={styles.body}>
      <UserBar />
      <View style={styles.container}>
        <Carousel  backgroundColor={"transparent"} width={400} height={400} showBubbles={false}>
          {_renderCards()}
        </Carousel>

        <View style={styles.moneyHolder}>
        <Text style={styles.MoneyButton}>999</Text>

          <TouchableOpacity onPress={()=>{}}>
          <View style={styles.buyButton}>
            <Text style={styles.TextButton}> Comprar</Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
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
  buyButton:{
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
  moneyHolder:{
    alignItems: "center",

    height:100,
    width:"100%",
    color:"black",
  },
  cardgame: {
    marginLeft:70,
    marginTop: 10,
    width: 250,
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
