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
export default Card = () => {
  return (
    <View style={styles.container}>
        <Image
          style={styles.cardgame}
          source={require("../../assets/moldura.png")}
        ></Image>
       
    </View>
  );
};

const styles = StyleSheet.create({

  cardgame: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    width: 190,
    height: 300
  },
  container: {
    marginTop: 30,
    alignItems: "center",
    width: 220,
    height: 320,
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
    flexDirection: "row"
  }
});
