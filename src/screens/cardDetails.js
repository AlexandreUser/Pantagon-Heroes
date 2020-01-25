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
import Deck from "../components/deck";
import Colector from "../components/Colector";

import React, { Component } from "react";
import Carousel from "simple-carousel-react-native";
import Card from "../components/Card";
export default CardDetail = () => {
  return (
    <View style={styles.body}>
      <UserBar />
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.descriptionTextContainer}>
            <Text style={styles.descriptionTextTitle}> Lancelot </Text>
            <Text style={styles.descriptionLevel}> Comum </Text>

            <Card />

            <Text style={styles.descriptionText}>
              LOREM IPSUM DOLOR ET MET LOREM IPSUM DOLOR ET METLOREM IPSUM DOLOR
              ET METLOREM IPSUM DOLOR ET METLOREM IPSUM DOLOR ET METLOREM IPSUM
              DOLOR ET METLOREM IPSUM DOLOR ET METLOREM IPSUM DOLOR ET METLOREM
              IPSUM DOLOR ET MET LOREM IPSUM DOLOR ET MET LOREM IPSUM DOLOR ET
              METLOREM IPSUM DOLOR ET METLOREM IPSUM DOLOR ET METLOREM IPSUM
              DOLOR ET METLOREM IPSUM DOLOR ET METLOREM IPSUM DOLOR ET METLOREM
              IPSUM DOLOR ET METLOREM IPSUM DOLOR ET MET LOREM IPSUM DOLOR ET
              MET LOREM IPSUM DOLOR ET METLOREM IPSUM DOLOR ET METLOREM IPSUM
              DOLOR ET METLOREM IPSUM DOLOR ET METLOREM IPSUM DOLOR ET METLOREM
              IPSUM DOLOR ET METLOREM IPSUM DOLOR ET METLOREM IPSUM DOLOR ET MET
              LOREM IPSUM DOLOR ET MET LOREM IPSUM DOLOR ET METLOREM IPSUM DOLOR
              ET METLOREM IPSUM DOLOR ET METLOREM IPSUM DOLOR ET METLOREM IPSUM
              DOLOR ET METLOREM IPSUM DOLOR ET METLOREM IPSUM DOLOR ET METLOREM
              IPSUM DOLOR ET MET
            </Text>
            <View style={styles.moneyHolder}>
              <Text style={styles.MoneyButton}>999 <Image
                style={styles.smallImage}
                source={require("../../assets/010-crystal.png")}
              ></Image></Text>
              
            </View>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.buyButton}>
                <Text style={styles.TextButton}> Comprar</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
 
  smallImage: {
    marginTop: 10,
    width: 30,
    height: 30
  },

  descriptionText: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    textAlign: "justify",
    color: "#c2c2c2",
    fontSize: 15
  },
  descriptionTextTitle: {
    marginTop: 30,
    textAlign: "justify",
    color: "#c2c2c2",
    fontSize: 20,
    fontWeight: "bold"
  },
  descriptionLevel: {
    marginTop: 5,
    textAlign: "justify",
    fontSize: 12,
    fontWeight: "bold",
    color: "green"
  },
  descriptionTextContainer: {
    marginLeft: 0,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#310069",
    borderRadius: 10
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
    marginBottom: 20,
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
  moneyHolder: {
    alignItems: "center",

    height: 70,
    width: "100%",
    color: "black"
  },
  cardgame: {
    marginTop: 10,
    width: 250,
    height: 400
  },
  container: {
    alignItems: "center",
    width: "100%",
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
