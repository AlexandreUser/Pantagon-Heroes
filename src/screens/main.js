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
import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
export default Initial = () => {
  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.body}
    >
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logoImage}
      ></Image>
      <View style={styles.container}>
        <TouchableOpacity onPress={Actions.fightScreen}>
          <View style={styles.button}>
            <Text style={styles.TextButton}>Entrar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  TextButton: {
    fontWeight: "bold",
    marginTop: 10,
    color: "white",
    fontSize: 20
  },
  button: {
    marginTop: 40,
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
    backgroundColor: "#873400"
  },

  container: {
    alignItems: "center"
  },
  logoImage: {
    marginTop: 20,
    width: 250,
    height: 150,
    marginBottom: 100
  },
  body: {
    alignItems: "center",
    width: "100%",
    height: "100%"
  }
});
