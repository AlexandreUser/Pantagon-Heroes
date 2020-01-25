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
  export default CardDetail = () => {
    return (
      <View style={styles.body}>
        <UserBar />
        <View style={styles.container}>
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
    moneyHolder: {
      alignItems: "center",
  
      height: 100,
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
  